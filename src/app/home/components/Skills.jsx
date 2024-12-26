import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skillsData from "../../../../public/data/skillsData.json";

export const Skills = () => {
  const { headings, skills } = skillsData;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{headings?.headingSkills}</h2>
              <p>
                {headings?.subheadContentLine1}
                <br />
                {headings?.subheadContentLine2}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {/* This is a loop which fetches the skills data from skillData.json and returns the circular progress bar */}
                {skills?.map((skill, index) => {
                  return (
                    <div className="item RR_CustomCircle">
                      <CircularProgressbar
                        value={skill?.percentage}
                        text={skill?.percentage}
                      />
                      <h5>{skill?.skillName}</h5>{" "}
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
