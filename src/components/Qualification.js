import qualifications from "../Data/qualificationData";
import { Fade } from "react-awesome-reveal";

function Qualification() {
  return (
    <section className="qualification section" id="qualification">

      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">Experience & education</span>

      <Fade triggerOnce={true} duration={3000}>
        <div className="qualification_container container section_border">
          <div className="timeline">

            {/* ==================== QUALIFICATIONS ==================== */}
            {qualifications.map((qualification, index) => (
              <div key={index + 1} className={qualification.container}>
                <div className="qualification-circle"></div>
                <div className="text-box">
                  <h2 className="qualification_name">{qualification.name}</h2>
                  <span className="qualification_subtitle">{qualification.subtitle}</span>
                  <h3 className="qualification_info-title">{qualification.title}</h3>
                  <span className={qualification.arrow}></span>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </Fade>

    </section>
  );
}

export default Qualification;