import styles from "./HeroStyles.module.css";
// import heroImg from "../../assets/Design uten navn.png";
import dibyaImg from "../../assets/dibyaDisplayPicture.png";
import dibyaImgDark from "../../assets/dibyaDisplayPictureDark.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import insragramDark from "../../assets/instagram-dark.svg";
import instagramLight from "../../assets/instagram-light.svg";
import CV from "../../assets/DibyaranjanPatiCV.pdf";
import { useTheme } from "../../common/ThemeContext";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const el = useRef(null);

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const instagramIcon = theme === "light" ? instagramLight : insragramDark;
  const dibyaImage = theme === "light" ? dibyaImg : dibyaImgDark;

  // Typing effect
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "FrontEnd Developer",
        "ReactJs Developer",
        "NextJs Developer",
        "MERN Stack Developer",
        "Android Developer",
        "Ios Developer",
      ],
      // contentType: "text",
      // stringsElement: null,
      // showCursor: true,
      // fadeOut: true,
      cursorChar: "_",
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 20,
      backDelay: 700,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={dibyaImage}
          className={styles.hero}
          alt="Profile picture of Dibyaranjan pati"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          {" "}
          Dibyaranjan Pati
          {/* <br /> */}
        </h1>
        <h2>
          I Am <span ref={el}></span>
        </h2>
        {/* <h2>Frontend Developer</h2> */}
        <span className={styles.socImg}>
          <a href="https://x.com/DIbyaranjan_09" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/dibyaranjanpati" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/dibyaranjan-pati-a37a07214/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.instagram.com/dibyaranjanpati/" target="_blank">
            <img src={instagramIcon} alt="Instgram icon" />
          </a>
        </span>
        <p className={styles.description}>
          Skilled Front-End Developer specializing in React.js, React Native,
          responsive design, and innovative problem-solving.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
