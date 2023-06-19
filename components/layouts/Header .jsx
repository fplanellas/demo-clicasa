import Image from "next/image";
import { Navbar } from "./Navbar";

import styles from "./styles/MainLayout.module.css";
import { SideMenu } from "./SideMenu";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles["header__logo"]}>
                <SideMenu />
                <Image
                    src="/logo-clicasa.png"
                    alt="Logo Clicasa"
                    width={223}
                    height={62}
                    style={{ width: "7.875rem", height: "2.125rem" }}
                />
            </div>
            <Navbar />
            <div className={styles["header__contacto"]}>
                <div>
                    <Image src="/images/phone.png" alt="phone" width={55} height={55} />
                    <span className={styles["header__tlfn-contacto"]}>
                        Teléfono de contacto
                    </span>
                </div>
                <div>
                    <Image
                        src="/images/whatsapp.png"
                        alt="whatsapp"
                        width={55}
                        height={55}
                    />
                </div>
                <div>
                    <Image src="/images/mail.png" alt="mail" width={55} height={55} />
                </div>
            </div>
        </header>
    );
};
