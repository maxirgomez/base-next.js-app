import TestimonialDB from "../../DB/Testimonial.js";
export const CardTestimonial = () => {
  return (
    <>
      {
        TestimonialDB.map(({ id, image, location, name, text }) => {
          return (
            <div key={id} className="card-testimonial row">
              <div className="col-lg-4">
                <img src={image} alt={name} />
              </div>
              <div className="col-lg-8">
                <h4>{location}</h4>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
            </div>
          )
        })

      }
    </>
  )
}
