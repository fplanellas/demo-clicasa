import { useState } from "react";
import Image from "next/image";
import { ActiveLink } from "./ActiveLink";
import styles from "./styles/MainLayout.module.css";

const menuItems = [
    {
        text: "Vender",
        href: "/",
    },
    {
        text: "Comprar",
        href: "/comprar",
    },
    {
        text: "#YOELIJOCLICPISO ",
        href: "/yoelijo",
    },
    {
        text: "¿POR QUÉ CLICPISO?",
        href: "/clicpiso",
    },
];

export const SideMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles["header__side-menu"]}>
            <Image
                className={styles["header__side-icon"]}
                src="/images/hamburguer-icon.svg"
                alt="menu"
                width={22}
                height={16}
                onClick={toggleMenu}
            />

            <div
                className={`${styles["header__side-menu-items"]} ${
                    isMenuOpen ? styles.open : ""
                }`}
            >
                {menuItems.map(({ text, href }) => (
                    <ActiveLink key={href} text={text} href={href} />
                ))}
            </div>
        </nav>
    );
};
