const videoSrc = new URL("../assets/3d printing vedio.mp4", import.meta.url)
  .href;

export default function Research() {
  return (
    <section className="page-section">
      <span className="page-badge">RESEARCH</span>
      <h1 className="page-heading">Experience</h1>
      <h2 className="page-subheading" style={{marginBottom: '-20px', fontSize: '28px'}}>Prosthetic Finger Prototype - 3D Printing</h2>
      <div className="research-feature">
        <video
          className="research-video"
          src={videoSrc}
          muted
          autoPlay
          loop
          playsInline
          controls
          aria-label="3D printing video"
        />
        <p className="page-subtext research-description">
          In this project, I was primarily responsible for the digital modeling
          and 3D-printed prototyping of the prosthetic finger. My work focused on
          exploring the design space of low-cost prosthetics from the perspective
          of human–computer interaction and assistive technology. I designed the
          prototype using a three-phalange, single-DOF structure and implemented a
          passive adaptive grasp mechanism to create a more natural and human-like
          interaction experience.
          </p>
      </div>
      <p className="page-subtext" style={{marginTop: '0', marginBottom: '100px'}}>
          Throughout multiple cycles of modeling and additive-manufacturing
          iteration, I evaluated the finger’s grasp stability, range of motion,
          and potential user comfort across different interaction scenarios. I
          also examined how material choices and print precision affect
          usability, safety, and long-term reliability. This project strengthened
          my skills in digital modeling, rapid prototyping, and
          interaction-mechanism design, and helped me develop a deeper
          understanding of user-centered design in assistive technologies. It
          also showed me how computational modeling and iterative prototyping can
          meaningfully improve the interaction experience of wearable devices.
        </p>
        <div style={{ height: "200px", color: "transparent" }}>margin</div>
    </section>
    
  );
}