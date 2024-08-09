import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
import musicLern from "../../assets/musicLern.png";
import disneyClone from "../../assets/disneyClone.png";
import MovieExplore from "../../assets/MovieExplore.png";
import DivPizza from "../../assets/DivPizza.png";

// TODO: Add more projects here, and update the image sources and links.

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={musicLern}
          link="https://github.com/dibyaranjanpati/music-app-nextjs"
          h3="Hero Music"
          p="Music Lerning App"
        />
        <ProjectCard
          src={disneyClone}
          link="https://github.com/dibyaranjanpati/disney-clone"
          h3="disney Clone"
          p="movies and series"
        />
        <ProjectCard
          src={DivPizza}
          link="https://github.com/dibyaranjanpati/div-pizza"
          h3="Div Pizza"
          p="Online Pizza Shop"
        />
        <ProjectCard
          src={MovieExplore}
          link="https://github.com/dibyaranjanpati/movie-website"
          h3="Movie Explorer"
          p="Movies Exploring Webapp"
        />
      </div>
    </section>
  );
}

export default Projects;
