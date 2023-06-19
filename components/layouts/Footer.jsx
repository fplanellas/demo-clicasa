import Link from "next/link";

import Image from "next/image";
import styles from "./styles/MainLayout.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__row}>
                <div className={styles.footer__group}>
                    <Image
                        src="/logo-clicasa.png"
                        alt="Clicasa Logo"
                        width={209}
                        height={55}
                    />
                </div>
                <div className={styles.footer__group}>
                    <div className={styles.footer__subgroup}>
                        <Image
                            src="/images/phone.png"
                            alt="phone"
                            width={60}
                            height={60}
                        />
                        <span>123-456-789</span>
                    </div>
                    <div className={styles.footer__subgroup}>
                        <Image src="/images/mail.png" alt="mail" width={60} height={60} />
                        <span>info@clicasa.com</span>
                    </div>
                </div>
            </div>
            <div className={styles.footer__row + " " + styles.footer__bottomRow}>
                <div className={styles.footer__group}>
                    <span className={styles.footer__text}>
                        &copy; 2017 CLICASA. TODOS LOS DERECHOS RESERVADOS
                    </span>
                </div>
                <div className={styles.footer__group}>
                    <ul className={styles.footer__links}>
                        <li>
                            <Link href="/" passHref legacyBehavior>
                                <a href="#">Mapa web</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" passHref legacyBehavior>
                                <a href="#">Contacto</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" passHref legacyBehavior>
                                <a href="#">Aviso legal</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    className={styles.footer__group + " " + styles["footer__group--end"]}
                >
                    <ul className={styles.footer__social}>
                        <li>
                            <Image
                                src="/images/facebook-circle-color.svg"
                                alt="Youtube"
                                width={30}
                                height={30}
                            />
                        </li>
                        <li>
                            <Image
                                src="/images/twitter-circle-color.svg"
                                alt="Youtube"
                                width={30}
                                height={30}
                            />
                        </li>
                        <li>
                            <Image
                                src="/images/linkedin-circle-color.svg"
                                alt="Youtube"
                                width={30}
                                height={30}
                            />
                        </li>
                        <li>
                            <Image
                                src="/images/youtube-circle-color.svg"
                                alt="Youtube"
                                width={30}
                                height={30}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
