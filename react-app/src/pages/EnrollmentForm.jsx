/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

// let formSchema = object() {
//     fullName: string().required('This field is required'),
//     email: string().email('Invalid email address'),
//     mobile: string().required('Mobile is required'),
//     address: string.required('Address ')
// };

function EnrollmentForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await fetch({'http://loclahost/3005/students',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    

       
       
    })

    
  }
  return (
    <div>
      <h1>Student Enrollment Form</h1>
      <h2>Personal Information</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Full Name*</label>
          <input className="border-2" type="text" {...register("fullName")} />
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <input className="border-2" type="text" {...register("email")} />
        </div>
        <div>
          <label htmlFor="mobile">Mobiles*</label>
          <input className="border-2" type="text" {...register("mobile")} />
        </div>
        <div>
          <label htmlFor="address">Residential Address</label>
          <textarea
            className="border-2"
            name="address"
            id="address"
            cols="30"
            rows="2"
            {...register("address")}
          ></textarea>
        </div>
        <div className="flex gap-2 items-center">
          <input
            className="border-2 text-white bg-slate-700 px-5 py-0 text-center rounded-3xl"
            type="submit"
            value="Enroll Now"
          />
          <input className="border-2" type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
}

export default EnrollmentForm;