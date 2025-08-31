import styles from './HeroSectionAbout.module.css';

const HeroSectionAbout = () => {
    return(
        <div className={styles.container} >
            <div className={ styles.overlay } >
                <div className={styles.content} >
                    <div className={ styles.titulo } >
                        <h1>Sobre Nós</h1>
                    </div>
                    <div className={ styles.subTitulo } >
                        <p>Unidos para transformar vidas através da solidariedade.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionAbout;