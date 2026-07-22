import styles from "../homepage/Homepage.module.css";

const Homepage = () => {
    return (
        <>
            <section className={styles.heroVideo}>
                <iframe
                    className={styles.heroVideoIframe}
                    src="https://www.youtube.com/embed/87eb45AYeBE?autoplay=1&mute=1&loop=1&playlist=87eb45AYeBE&controls=0&rel=0&playsinline=1&start=336&end=405"
                    title="Coffee Background"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />


            </section>
        </>
    );
};

export default Homepage;