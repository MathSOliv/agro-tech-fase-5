import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <>
            <div className={styles.container} >
                <div className={styles.content} >
                    <div className={styles.textContainer} >
                        <h2>Quem Somos Nós</h2>
                        <p>O SODAL é um sistema solidário que nasceu com um único propósito:
                            combater a fome por meio da conexão entre quem pode doar e quem
                            mais precisa. Atuamos como uma ponte entre comércios que desejam
                            contribuir com doações de alimentos e comunidades em situação de
                            vulnerabilidade, garantindo que o que sobra em um lugar possa
                            fazer a diferença em outro. Nosso trabalho vai além da logística —
                            é movido por empatia, responsabilidade social e o desejo genuíno
                            de transformar realidades. Buscamos diariamente novos parceiros e
                            comércios que queiram se unir a essa causa, enquanto identificamos
                            famílias e instituições que enfrentam dificuldades para garantir
                            uma refeição digna. Com o apoio de voluntários e doadores, o SODAL
                            torna possível algo essencial: levar alimento, dignidade e
                            esperança para quem precisa. Doe, participe, compartilhe. Juntos,
                            somos mais fortes.</p>
                    </div>
                    <div className={styles.imageContainer} >
                        <div className={ styles.image } ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;