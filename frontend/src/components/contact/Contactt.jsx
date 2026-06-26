import React from "react";
import { toast } from "react-toastify";
import contactImg from "../../assets/contact.png";
import "./Contact.css";

function Contactt() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "51988ebc-9fcb-4bf6-a808-f22a64f545da");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="py-5" id="contact">
      <div className="container text-center mb-5">
        <p className="text-muted mb-1">You can text me directly</p>
        <h2 className="fw-bold display-6">Write Me</h2>
      </div>

      <div className="container">
        <div
          className="row align-items-center shadow-lg rounded-4 p-4 p-md-5 mx-auto"
          style={{ maxWidth: "1000px" }}
        >
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={contactImg}
              alt="Contact"
              className="img-fluid"
              style={{ maxWidth: "320px" }}
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-4">Email Me</h3>

            <form onSubmit={onSubmit}>
              <input
                className="form-control mb-3"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                className="form-control mb-3"
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
              <textarea
                className="form-control mb-3"
                name="message"
                rows="5"
                placeholder="Message"
                required
              />
              <button className="btn btn-success w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactt;