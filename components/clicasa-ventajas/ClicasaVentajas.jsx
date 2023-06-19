import Image from "next/image";
import styles from "./styles/ClicasaVentajas.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const ClicasaVentajas = ({ props: { quotes } }) => {
    return (
        <article className={styles["article"]}>
            <h2 className={styles["article__title"]}>En Clicasa sólo hay ventajas</h2>
            <div className={styles["slide-container"]}>
                <Slide easing="ease" duration={10000} indicators>
                    {quotes?.map((quote, index) => (
                        <div
                            key={index}
                            data-testid={`quote-${index}`}
                            className={styles["each-slide"]}
                        >
                            <div className={styles["slide-content"]}>
                                {quote.quote} - {quote.author}
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>

            <div className={styles["card-grid"]}>
                <div className={styles["card"]}>
                    <div className={styles["card__icon"]}>
                        <Image
                            src="/images/if-rotation-left.svg"
                            alt="Oferta en 24 h"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div>
                        <h2 className={styles["card__title"]}>Oferta en 24 h</h2>
                        <p className={styles["card__text"]}>
                            No te preocupes de su estado, ni de reparaciones para
                            eneseñarlo
                        </p>
                    </div>
                </div>
                <div className={styles["card"]}>
                    <div className={styles["card__icon"]}>
                        <Image
                            src="/images/wallet.svg"
                            alt="Pago inmediato"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div>
                        <h2 className={styles["card__title"]}>Pago inmediato</h2>
                        <p className={styles["card__text"]}>
                            No te preocupes de su estado, ni de reparaciones para
                            eneseñarlo
                        </p>
                    </div>
                </div>
                <div className={styles["card"]}>
                    <div className={styles["card__icon"]}>
                        <Image
                            src="/images/paperplane.svg"
                            alt="Ahórrate el papeleo"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div>
                        <h2 className={styles["card__title"]}>Ahórrate el papeleo</h2>
                        <p className={styles["card__text"]}>
                            Si lo necesitas también podemos ayudarte a encontrar tu nuevo
                            hogar
                        </p>
                    </div>
                </div>
                <div className={styles["card"]}>
                    <div className={styles["card__icon"]}>
                        <Image
                            src="/images/calendar.svg"
                            alt="Tu eliges la fecha"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div>
                        <h2 className={styles["card__title"]}>Tu eliges la fecha</h2>
                        <p className={styles["card__text"]}>
                            Si lo necesitas también podemos ayudarte a encontrar tu nuevo
                            hogar
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};
