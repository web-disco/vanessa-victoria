import { Formik, Form } from "formik";
import * as yup from "yup";

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hearAboutUs: "",
    typeOfEvent: "",
    eventDate: "",
    ceremonyLocation: "",
    venueLocation: "",
    numberOfGuests: "",
    budget: "",
    message: "",
  };

  const validationSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: yup.string().required("Phone number is required"),
  });

  return (
    // <Formik
    //   initialValues={initialValues}
    //   validationSchema={validationSchema}
    //   onSubmit={(values, { setSubmitting }) => {}}
    // >
    //   {({ values, handleChange, handleBlur, handleSubmit, errors }) => {
    //     return (
    //       <Form
    //         className="grid grid-cols-2 gap-8"
    //         name="Contact Form"
    //         data-netlify={true}
    //       >
    //         <div className="col-span-2 md:col-span-1">
    // <input
    //   type="text"
    //   name="firstName"
    //   placeholder="First Name *"
    //   value={values.firstName}
    //   onChange={handleChange}
    //   className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    // />
    //           {errors.firstName && (
    //             <p className="text-red-500 text-[14px] mt-2">
    //               {errors.firstName}
    //             </p>
    //           )}
    //         </div>
    //         <div className="col-span-2 md:col-span-1">
    //           <input
    //             type="text"
    //             name="lastName"
    //             placeholder="Last Name *"
    //             value={values.lastName}
    //             onChange={handleChange}
    //             className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    //           />
    //           {errors.lastName && (
    //             <p className="text-red-500 text-[14px] mt-2">
    //               {errors.lastName}
    //             </p>
    //           )}
    //         </div>
    //         <div className="col-span-2 md:col-span-1">
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Email *"
    //             className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    //             value={values.email}
    //             onChange={handleChange}
    //           />
    //           {errors.email && (
    //             <p className="text-red-500 text-[14px] mt-2">{errors.email}</p>
    //           )}
    //         </div>
    //         <div className="col-span-2 md:col-span-1">
    //           <input
    //             type="tel"
    //             name="phone"
    //             placeholder="Phone"
    //             value={values.phone}
    //             onChange={handleChange}
    //             className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    //           />
    //         </div>
    //         <div className="col-span-2">
    //           <select
    //             name="hearAboutUs"
    //             className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    //             value={values.hearAboutUs}
    //             onChange={handleChange}
    //           >
    //             <option value="">How did you hear about us?</option>
    //             <option value="google">Google</option>
    //             <option value="instagram">Instagram</option>
    //             <option value="facebook">Facebook</option>
    //             <option value="friend">Friend</option>
    //             <option value="other">Other</option>
    //           </select>
    //         </div>
    //         <div className="col-span-2 md:col-span-1">
    //           <input
    //             type="text"
    //             name="typeOfEvent"
    //             placeholder="Type of Event"
    //             className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    //             value={values.typeOfEvent}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="col-span-2 md:col-span-1">
    //           <input
    //             type="date"
    //             name="eventDate"
    //             placeholder="Event Date"
    //             className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    //             value={values.eventDate}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="col-span-2 md:col-span-1">
    //           <input
    //             type="text"
    //             name="ceremonyLocation"
    //             placeholder="Ceremony Location"
    //             className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    //             value={values.ceremonyLocation}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="col-span-2 md:col-span-1">
    //           <input
    //             type="text"
    //             name="venueLocation"
    //             placeholder="Venue Location"
    //             className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    //             value={values.venueLocation}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="col-span-2 md:col-span-1">
    //           <input
    //             type="number"
    //             name="numberOfGuests"
    //             placeholder="Number of Guests"
    //             className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    //             value={values.numberOfGuests}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="col-span-2 md:col-span-1">
    //           <input
    //             type="number"
    //             name="budget"
    //             placeholder="Budget"
    //             className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
    //             value={values.budget}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="col-span-2">
    //           <textarea
    //             name="message"
    //             placeholder="Message"
    //             className="w-full p-2 bg-transparent border  border-sage text-brown placeholder-brown outline-none"
    //             value={values.message}
    //             onChange={handleChange}
    //             rows={8}
    //           />
    //         </div>
    //         <button
    //           type="submit"
    //           className="col-span-2 w-full font-fira font-light tracking-wide inline-block bg-sage py-3 px-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage"
    //           onClick={() => handleSubmit}
    //         >
    //           Submit
    //         </button>
    //       </Form>
    //     );
    //   }}
    // </Formik>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="grid grid-cols-2 gap-8"
    >
      <input type="hidden" name="Contact Form" value="contact" />
      <input
        type="text"
        name="firstName"
        placeholder="First Name *"
        className="w-full h-[40px] pb-2 bg-transparent border-b  border-sage text-brown placeholder-brown outline-none"
        required
      />
    </form>
  );
};

export default ContactForm;
