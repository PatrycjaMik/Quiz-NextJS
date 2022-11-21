import styles from "./styles/YellowMenu.module.scss"

const YellowMenu = () => {
    return (
        <div className={styles.YMenuContainer}>
            <div className={styles.YMenuContent}>
                <div className={styles.stationLogo}></div>
            </div>
            <nav className={styles.navigation}>
                <a href="https://www.polskieradio.pl/10/8387" className={styles.navLink}>
                    newsy
                </a>
                <div className={styles.decorDot}></div>
                <a href="https://www.polskieradio.pl/10/214" className={styles.navLink}>
                    muzyka
                </a>
                <div className={styles.decorDot}></div>
                <a href="https://www.polskieradio.pl/10/216" className={styles.navLink}>
                    kultura
                </a>
                <div className={styles.decorDot}></div>
                <a href="https://www.polskieradio.pl/10/215" className={styles.navLink}>
                    lifestyle i nauka
                </a>
                <div className={styles.decorDot}></div>
                <a href="https://www.polskieradio.pl/10/217" className={styles.navLink}>
                    sport
                </a>
                <div className={styles.decorDot}></div>
                <a href="https://www.polskieradio.pl/169" className={styles.navLink}>
                    blog muzyczny
                </a>
            </nav>
        </div>
    )
}

export default YellowMenu;