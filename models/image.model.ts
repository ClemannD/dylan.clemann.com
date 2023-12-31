import { z } from 'zod';

const PhotoSchema = z.object({
    id: z.string(),
    width: z.number(),
    height: z.number(),
    src: z.string(),
    alt: z.string().optional(),
    base64Placeholder: z.string().optional(),
});

export type Photo = z.infer<typeof PhotoSchema>;
