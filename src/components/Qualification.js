import { Fade } from "react-awesome-reveal";

function Qualification() {
  return (
    /* ==================== QUALIFICATION ==================== */
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">Experience & education</span>

      <Fade triggerOnce="true" duration="3000">
        <div className="qualification_container container section_border">
          <div className="timeline">

            
            <div className="timeline-container left-container">
              <div className="qualification-circle"></div>
              <div className="text-box">
                <h2 className="qualification_name">Mykolas Romeris University</h2>
                <span className="qualification_subtitle">2010 - 2014</span>
                <h3 className="qualification_info-title">Bachelor's degree, Law</h3>
                <span className="left-container-arrow"></span>
              </div>
            </div>

            <div className="timeline-container right-container">
              <div className="qualification-circle"></div>
              <div className="text-box">
                <h2 className="qualification_name">Kaunas city Center Police station</h2>
                <span className="qualification_subtitle">2014 - 2016</span>
                <h3 className="qualification_info-title">Investigator</h3>
                <span className="right-container-arrow"></span>
              </div>
            </div>

            <div className="timeline-container left-container">
              <div className="qualification-circle"></div>
              <div className="text-box">
                <h2 className="qualification_name">Kaunas County Police Headquarter</h2>
                <span className="qualification_subtitle">2016 - 2021</span>
                <h3 className="qualification_info-title">Senior investigator</h3>
                <span className="left-container-arrow"></span>
              </div>
            </div>

            <div className="timeline-container right-container">
              <div className="qualification-circle"></div>
              <div className="text-box">
                <h2 className="qualification_name">Police Department</h2>
                <span className="qualification_subtitle">2021 - Present</span>
                <h3 className="qualification_info-title">Chief investigator</h3>
                <span className="right-container-arrow"></span>
              </div>
            </div>

            <div className="timeline-container left-container">
              <div className="qualification-circle"></div>
              <div className="text-box">
                <h2 className="qualification_name">Kaunas information technology school</h2>
                <span className="qualification_subtitle">2022 - Present</span>
                <h3 className="qualification_info-title">Junior javascript programmer</h3>
                <span className="left-container-arrow"></span>
              </div>
            </div>
          </div>
        </div>

      </Fade>
    </section>
  );
}

export default Qualification;