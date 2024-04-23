import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

let formSchema = object({
  fullName: string().required("This field is required!"),
  email: string().email("Invalid email address!"),
  mobile: string().required("Mobile is required!"),
  address: string().required("Address is required!"),
});

function EnrollmentForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  console.log(errors);

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <h1>Student Enrollment Form</h1>
      <h2>Personal Information</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Full Name*</label>
          <input className="border" type="text" {...register("fullName")} />
        </div>
        <div>
          <label>Email*</label>
          <input className="border" type="text" {...register("email")} />
        </div>
        <div>
          <label>*Mobile</label>
          <input className="border" type="text" {...register("mobile")} />
        </div>
        <div>
          <label>Residential Area*</label>
          <textarea className="border" {...register("address")}></textarea>
        </div>
        <div>
          <input
            className="border bg-black text-gray-100 p-2 mx-2"
            type="submit"
            value="Enroll Now"
          />
          <input
            className="border bg-slate-300 text-black p-2"
            type="reset"
            value="Reset"
          />
        </div>
      </form>
    </div>
  );
}

export default EnrollmentForm;
