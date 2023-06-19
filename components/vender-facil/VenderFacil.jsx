import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles/VenderFacil.module.css";

export const VenderFacil = ({ props: { quotes } }) => {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const [quoteClass, setQuoteClass] = useState(styles.quote);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteClass(`${styles.quote} ${styles["quote-change"]}`);
            setTimeout(() => {
                setCurrentQuote((prevQuote) => {
                    const currentIndex = quotes.indexOf(prevQuote);
                    const nextIndex = (currentIndex + 1) % quotes.length;
                    return quotes[nextIndex];
                });
                setQuoteClass(styles.quote);
            }, 1000);
        }, 10000);

        return () => clearInterval(interval);
    }, [quotes]);

    return (
        <article className={styles.article}>
            <h2 className={styles.article__title}>Vender tu piso nunca fue tan fácil</h2>

            <div className={quoteClass}>
                {" "}
                {currentQuote.quote} - {currentQuote.author}
            </div>

            <div className={styles["card-grid"]}>
                <div className={styles.card + " " + styles.active}>
                    <div className={styles["card__container"]}>
                        <div className={styles["card__circle"]}>
                            <span className={styles["card__number"]}>1</span>
                        </div>
                    </div>
                    <div className={styles["card__content"]}>
                        <h3 className={styles["card__title"]}>Descríbemos tu inmueble</h3>
                        <p className={styles["card__text"]}>
                            No te preocupes de su estado, ni de reparaciones para
                            eneseñarlo
                        </p>
                    </div>
                </div>
                <div className={styles["article__img-container-movile"]}>
                    <Image
                        src="/images/img-muestra.png"
                        alt="Tu eliges la fecha"
                        width="300"
                        height="179"
                    />
                </div>
                <div className={styles.card}>
                    <div className={styles["card__container"]}>
                        <div className={styles["card__circle"]}>
                            <span className={styles["card__number"]}>2</span>
                        </div>
                    </div>
                    <div className={styles["card__content"]}>
                        <h3 className={styles["card__title"]}>
                            Recibe una oferta en 24 horas
                        </h3>
                        <p className={styles["card__text"]}>Piénsatela!</p>
                    </div>
                </div>
                <div className={styles["article__img-container-movile"]}>
                    <Image
                        src="/images/img-muestra.png"
                        alt="Tu eliges la fecha"
                        width="300"
                        height="179"
                    />
                </div>
                <div className={styles.card}>
                    <div className={styles["card__container"]}>
                        <div className={styles["card__circle"]}>
                            <span className={styles["card__number"]}>3</span>
                        </div>
                    </div>
                    <div className={styles["card__content"]}>
                        <h3 className={styles["card__title"]}>
                            Dinos hasta cuando quieres quedarte
                        </h3>
                        <p className={styles["card__text"]}>
                            Nos ajustamos a tus necesidades, cuando tu estés listo
                            nosotros también lo estaremos
                        </p>
                    </div>
                </div>
                <div className={styles["article__img-container-movile"]}>
                    <Image
                        src="/images/img-muestra.png"
                        alt="Tu eliges la fecha"
                        width="300"
                        height="179"
                    />
                </div>
                <div className={styles.card}>
                    <div className={styles["card__container"]}>
                        <div className={styles["card__circle"]}>
                            <span className={styles["card__number"]}>4</span>
                        </div>
                    </div>
                    <div className={styles["card__content"]}>
                        <h3 className={styles["card__title"]}>Ya está!</h3>
                        <p className={styles["card__text"]}>
                            Firma la venta y recibe el dinero
                        </p>
                    </div>
                </div>
                <div className={styles["article__img-container-movile"]}>
                    <Image
                        src="/images/img-muestra.png"
                        alt="Tu eliges la fecha"
                        width="300"
                        height="179"
                    />
                </div>
            </div>
            <div className={styles["article__img-container"]}>
                <Image
                    src="/images/img-muestra.png"
                    alt="Tu eliges la fecha"
                    width="1030"
                    height="534"
                />
            </div>
        </article>
    );
};
