import "./Services.css"; // Import CSS file

function Services() {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service-card">
        <h3>Web Development</h3>
        <p>We build modern, fast, and secure websites.</p>
      </div>
      <div className="service-card">
        <h3>Mobile App Development</h3>
        <p>Create powerful mobile apps for iOS and Android.</p>
      </div>
      <div className="service-card">
        <h3>UI/UX Design</h3>
        <p>Design beautiful and user-friendly interfaces.</p>
      </div>
    </div>
  );
}

export default Services;
