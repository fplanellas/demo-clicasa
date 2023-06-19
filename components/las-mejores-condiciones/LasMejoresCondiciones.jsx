import styles from "./styles/LasMejoresCondiciones.module.css";

export const LasMejoresCondiciones = () => {
    return (
        <article className={styles.article}>
            <h2 className={styles.article__title}>
                Las mejores condiciones del mercado inmobiliario
            </h2>
            <p className={styles.article__intro}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles["article__button"]}>
                <span>DESCUBRE NUESTRAS TARIFAS</span>
            </div>
        </article>
    );
};
