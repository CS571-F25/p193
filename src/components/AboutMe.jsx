import kart from "../assets/kart.jpg";
import avatar2 from "../assets/avatar2.jpg";
export default function AboutMe() {
    return (
        <section className="page-section">
          <span className="page-badge">ABOUT</span>
          <h1 className="page-heading">About Me</h1>
           <div className="page-image-grid">
             <div className="page-image-wrapper">
               <img src={avatar2} alt="Tianyi Zhang" className="page-image" />
             </div>
             <div className="page-image-wrapper">
               <img src={kart} alt="Tianyi Zhang" className="page-image" />
             </div>
           </div>
           <div className="page-bio">
             <h2 className="page-subheading">Tianyi Zhang(in Chinese: 张天怡)</h2>
            <p className="page-subtext page-subtext-tight">CS & Math junior</p>
            <div className="page-separator"></div>
           </div>
          <p className="page-subtext about-paragraph">
            Hi there! I'm Tianyi. I am an undergraduate junior at the University of Wisconsin–Madison studying Computer Science and Mathematics, with a minor in Game Design. I am currently a research assistant in the MadAbility Lab, where I work with PhD researcher{" "}
            <a
              href="https://chenruijia120.github.io/"
              className="home-hero__intro-highlight"
              target="_blank"
              rel="noreferrer"
            >
              Ruijia Chen
            </a>{" "}
            and{" "}
            <a
              href="https://www.yuhangz.com/"
              className="home-hero__intro-highlight"
              target="_blank"
              rel="noreferrer"
            >
              Prof. Yuhang Zhao
            </a>{" "}
            on AR/VR interaction techniques and accessibility for people with low vision (PLV).
          </p>
          <p className="page-subtext about-paragraph">My academic interests focus on front-end development and human–computer interaction, particularly in AR/VR interfaces and accessibility for people with low vision. I am motivated by designing and building interactive systems that are intuitive, inclusive, and empowering for diverse users.</p>
          <p className="page-subtext about-paragraph">Outside of academics, I love spending time with friends, learning to drive go-karts, playing piano and composing my own music, playing basketball, and making Chinese food.</p>
          <p className="page-subtext about-paragraph">I'm always open to chatting about research—or pretty much anything else! The best way to reach me is by email: tzhang628 [at] wisc [dot] edu.</p>
           <hr className="about-divider" />

          <div className="timeline">
            <div className="timeline-column">
              <h3 className="timeline-heading">Education</h3>
              <div className="timeline-list">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-card">
                    <span className="timeline-date">2024 - Present</span>
                    <div>
                      <h4 className="timeline-title">University of Wisconsin–Madison</h4>
                      <p className="timeline-subtitle">Bachelor Degree</p>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-card">
                    <span className="timeline-date">2023.6 - 2023.9</span>
                    <div>
                      <h4 className="timeline-title">Peking University(China)</h4>
                      <p className="timeline-subtitle">Exchange Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-column">
              <h3 className="timeline-heading">Experience</h3>
              <div className="timeline-list">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-card">
                    <span className="timeline-date">Aug. 2025 - Present</span>
                    <div>
                      <h4 className="timeline-title">MadAbility Lab, UW-Madison</h4>
                      <p className="timeline-subtitle">HCI Research Assistant</p>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-card">
                    <span className="timeline-date">May. 2025 - Sep. 2025</span>
                    <div>
                      <h4 className="timeline-title">UCSC</h4>
                      <p className="timeline-subtitle">Research Assistant Intern</p>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-card">
                    <span className="timeline-date">Dec. 2024 - Feb. 2025</span>
                    <div>
                      <h4 className="timeline-title">Archermind Technology (Nanjing) Co., Ltd.</h4>
                      <p className="timeline-subtitle">Backend Development Intern</p>
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-card">
                    <span className="timeline-date">Jun. 2023 - Sep. 2023</span>
                    <div>
                      <h4 className="timeline-title">Medical School, King’s College London</h4>
                      <p className="timeline-subtitle">Research Assistant Intern</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{height: '50px'}}></div>
          </div>
        </section>
      );
}