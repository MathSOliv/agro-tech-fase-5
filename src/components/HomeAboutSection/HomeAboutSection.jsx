import styles from './HomeAboutSection.module.css';

const HomeAboutSection = () => {
    return (
        <>
            <div className={styles.container} >
                <div className={styles.textContainer} >
                    <h2>Sobre Nós</h2>
                    <p>
                        Somos uma instituição sem fins lucrativos, mantida por parcerias,
                        voluntários e pessoas como você — que acreditam que cada gesto de
                        solidariedade pode fazer toda a diferença. Junte-se a nós e faça
                        parte dessa corrente do bem. Juntos, podemos mudar histórias.
                    </p>
                </div>
                <div className={styles.imgContainer} ></div>
            </div>
        </>
    )
}

export default HomeAboutSection;