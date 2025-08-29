import styles from './HeroSection.module.css';

const HeroSection = () => {

    return(
        <>
            <div className={ styles.container } >
                <div className={ styles.overlay } ></div>
                <div className={ styles.content } >
                    <h1 className={ styles.ongName } >SODAL</h1>
                    <h2 className={ styles.title } >Alimente Esperanças. Doe <span className={ styles.loveText } >Amor</span>.</h2>
                </div>
            </div>
        </>
    )

}

export default HeroSection;