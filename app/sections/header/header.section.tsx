import HeaderHeroComponent from './hero.component';
import HeaderNavbarComponent from './navbar.component';

export default async function HeaderSection() {
    return (
        <header className="bg-gradient-to-br from-white to-blue-50">
            {/* @ts-expect-error Server Component */}
            <HeaderNavbarComponent />
            {/* @ts-expect-error Server Component */}
            <HeaderHeroComponent />
        </header>
    );
}
