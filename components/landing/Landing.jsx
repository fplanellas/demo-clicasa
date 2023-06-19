import Image from "next/image";
import styles from "./styles/Landing.module.css";

export const Landing = () => {
    return (
        <article className={styles.article}>
            <h2 className={styles.article__title}>
                Vende tu casa <br />
                en un <strong>click</strong>
            </h2>
            <div className={styles.article__form}>
                <div>
                    <Image
                        src="/images/icon-house.png"
                        alt="phone"
                        width={26}
                        height={26}
                    />
                    <input
                        type="text"
                        className={styles.article__input}
                        placeholder="Introduce la dirección de tu casa o piso"
                    />
                </div>
                <button type="submit" className={styles.article__button}>
                    Vender mi inmueble
                </button>
            </div>
            <div className={styles.article__text}>
                Compramos tu casa directamente <br />
                sin complicaciones ni preocupaciones.
            </div>
            <div className={styles.article__video}>
                <span>Ver vídeo</span>
            </div>
        </article>
    );
};
