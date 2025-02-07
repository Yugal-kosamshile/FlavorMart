import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-5">
        <div className="card shadow-lg p-4 rounded-4 border-0">
          <h1 className="text-center text-primary mb-3">Contact Us 
          <span className="floating">📩</span></h1>
          <p className="text-center text-muted">
            Have questions, feedback, or need assistance? Feel free to reach out to us! 
            Fill out the form below, and we’ll get back to you as soon as possible.
          </p>

          <form className="contact-form"> 
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                className="form-control" 
                placeholder="Enter your name" 
                required 
              />
            </div> 
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="Enter your email" 
                required 
              />
            </div> 
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                className="form-control" 
                rows="5" 
                placeholder="Enter your message" 
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
