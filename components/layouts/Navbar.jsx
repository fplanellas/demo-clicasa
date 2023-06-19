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

export const Navbar = () => {
    return (
        <nav className={styles["header__navbar"]}>
            {menuItems.map(({ text, href }) => (
                <ActiveLink key={href} text={text} href={href} />
            ))}
        </nav>
    );
};
