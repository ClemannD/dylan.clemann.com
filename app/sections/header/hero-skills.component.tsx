'use client';

import { useEffect, useState } from 'react';

const pauseLength = 30;

export interface ISkillsProps {
    skills: {
        name: string;
        color: string;
    }[];
}

export default function Skills({ skills }: ISkillsProps) {
    const [skillNameIndex, setSkillNameIndex] = useState(0);
    const [skill, setSkill] = useState(skills[0]);
    const [pause, setPause] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (pause === pauseLength) {
                setPause(0);
                setSkill((prevSkill) => {
                    const prevSkillIndex = skills.indexOf(prevSkill);
                    return prevSkillIndex + 1 === skills.length
                        ? skills[0]
                        : skills[prevSkillIndex + 1];
                });
                setSkillNameIndex(0);
            } else if (pause > 0) {
                setPause((prevPause) => prevPause + 1);
            } else if (skillNameIndex === skill.name.length) {
                setPause(1);
            } else {
                setSkillNameIndex(
                    (prevSkillNameIndex) => prevSkillNameIndex + 1
                );
            }
        }, 50);
        return () => clearInterval(interval);
    }, [skillNameIndex, skill, pause]);

    return (
        <span
            className="min-w-[120px] bg-blue-gradient2 bg-clip-text font-bold text-transparent"
            // style={{
            //     color: skill.color,
            // }}
        >
            {skill.name.substring(0, skillNameIndex + 1)}
            <span className="animate-blink font-thin text-black opacity-100">
                |
            </span>
        </span>
    );
}
