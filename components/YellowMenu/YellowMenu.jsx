import { useState } from "react";
import styles from "./styles/YellowMenu.module.scss"

const YellowMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className={styles.YMenuContainer}>
            <div className={styles.YMenuContent}>
                <a href="https://www.polskieradio.pl/10" className={styles.logoLink}>
                <div className={styles.stationLogo}></div>
                </a>
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
            <div style={{display: "flex"}}>
                <div className={styles.socialLogos}>
                    <a href="//www.facebook.com/czworka" className={styles.socialLink}>
                        <div className={styles.socFb}></div>
                    </a>
                    <a href="https://www.instagram.com/czworka_polskieradio/" className={styles.socialLink}>
                        <div className={styles.socIg}></div>
                    </a>
                    <a href="https://www.youtube.com/channel/UClkwg7PkE3YiO9AnlNIjZhg" className={styles.socialLink}>
                        <div className={styles.socYt}></div>
                    </a>
                </div>
                <div 
                    className={styles.moreButton}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className={styles.arrowLeft} style={{transform: menuOpen ? "rotate(90deg)" : "none"}}></div>
                    więcej
                </div>
            </div>
            {menuOpen &&
                <nav className={styles.navigationMobile}>
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
            }
        </div>
        <div className={styles.blackBelt}></div>
        </>
    )
}

export default YellowMenu;