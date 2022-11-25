import React, { useState, useEffect } from "react";
import styles from "./styles/ModalTerms.module.scss";



const ModalTerms = () => {
    const [modalActive, setModalActive] = useState(false);

    const acceptTerms = () => {
        if (localStorage.getItem("termsOfUse") === null) {
            localStorage.setItem("termsOfUse", "accepted");
            setModalActive(false);
            return;
        }
    }

    const checkTerms = () => {
        localStorage.getItem("termsOfUse") === "accepted" ? setModalActive(false) : setModalActive(true);
    }

    useEffect(() => checkTerms(), []);

    return (
        <div className={styles.mainBg} style={{ display: modalActive ? "flex" : "none" }}>
            <div className={styles.infoWrapper}>
                <div className={styles.modalTop}>
                    <div className={styles.radioLogo}></div>
                    <button className={styles.closeBtn} onClick={() => setModalActive(false)}></button>
                </div>
                <div className={styles.modalHeader}>
                    <h2>
                        Szanowny użytkowniku
                    </h2>
                    <p>
                        25 maja 2018 roku zaczęło obowiązywać Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r (RODO). <br /> Zachęcamy do zapoznania się z informacjami dotyczącymi przetwarzania danych osobowych w Portalu PolskieRadio.pl
                    </p>
                </div>
                <div className={styles.infoBox}>
                    <ol className={styles.termsList}>
                        <li>1.&nbsp;Administratorem Danych jest Polskie Radio S.A. z siedzibą w Warszawie, al. Niepodległości 77/85, 00-977 Warszawa.</li>
                        <li>2.&nbsp;W sprawach związanych z Pani/a danymi należy kontaktować się z Inspektorem Ochrony Danych, e-mail: iod@polskieradio.pl, tel. 22 645 34 03.</li>
                        <li>3.&nbsp;Dane osobowe będą przetwarzane w celach marketingowych na podstawie zgody.</li>
                        <li>4.&nbsp;Dane osobowe mogą być udostępniane wyłącznie w celu prawidłowej realizacji usług określonych w polityce prywatności.</li>
                        <li>5.&nbsp;Dane osobowe nie będą przekazywane poza Europejski Obszar Gospodarczy lub do organizacji międzynarodowej.</li>
                        <li>6.&nbsp;Dane osobowe będą przechowywane przez okres 5 lat od dezaktywacji konta, zgodnie z przepisami prawa. </li>
                        <li>7.&nbsp;Ma Pan/i prawo dostępu do swoich danych osobowych, ich poprawiania, przeniesienia, usunięcia lub ograniczenia przetwarzania.</li>
                        <li>8.&nbsp;Ma Pan/i prawo do wniesienia sprzeciwu wobec dalszego przetwarzania, a w przypadku wyrażenia zgody na przetwarzanie danych osobowych do jej wycofania. Skorzystanie z prawa do cofnięcia zgody nie ma wpływu na przetwarzanie, które miało miejsce do momentu wycofania zgody.</li>
                        <li>9.&nbsp;Przysługuje Pani/u prawo wniesienia skargi do organu nadzorczego.</li>
                        <li>10.&nbsp;Polskie Radio S.A. informuje, że w trakcie przetwarzania danych osobowych nie są podejmowane zautomatyzowane decyzje oraz nie jest stosowane profilowanie.</li>
                    </ol>
                </div>
                <div className={styles.moreInfo}>
                    <p>Więcej informacji na ten temat znajdziesz na stronach <a rel="noreferrer" target="_blank" href="https://www.polskieradio.pl/13/6788">dane osobowe</a> oraz <a rel="noreferrer" target="_blank" href="https://www.polskieradio.pl/13/53/Artykul/254368">polityka prywatności</a></p>
                    <button className={styles.modalButton} onClick={() => acceptTerms()}>Rozumiem</button>
                </div>
            </div>
        </div>
    )
}

export default ModalTerms;