import Image from "next/image";
import styles from "./styles/MejoresEmpresas.module.css";

export const MejoresEmpresas = () => {
    return (
        <article className={styles.article}>
            <h2 className={styles.article__title}>Trabajamos con las mejores empresas</h2>
            <p className={styles.article__intro}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles["image-grid"]}>
                <div className={styles["image-grid__item"]}>
                    <Image
                        src="/images/img-inmoseguros.png"
                        alt="Tu eliges la fecha"
                        width={340}
                        height={180}
                    />
                </div>
                <div className={styles["image-grid__item"]}>
                    <Image
                        src="/images/img-mapfre.png"
                        alt="Tu eliges la fecha"
                        width={340}
                        height={180}
                    />
                </div>
            </div>
        </article>
    );
};
