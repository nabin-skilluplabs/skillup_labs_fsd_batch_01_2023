import { useForm } from "react-hook-form";
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


let formSchema = object({
    fullName: string().required('This field is required!'),
    email: string().email('Invalid email address!'),
    mobile: string().required('Mobile is required!'),
    address: string().required('Address is required!'),
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
                    <input className="border" type="text"  {...register("fullName")} />
                    {errors.fullName && <span className="text-sm text-red-500">{errors.fullName.message}</span>}
                </div>
                <div>
                    <label>Email*</label>
                    <input className="border"  type="email"  {...register("email")} />
                    {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                </div>
                <div>
                    <label>Mobile*</label>
                    <input className="border"  type="text"  {...register("mobile")} />
                    {errors.mobile && <span className="text-sm text-red-500">{errors.mobile.message}</span>}
                </div>
                <div>
                    <label>Residential Address*</label>
                    <textarea className="border"   {...register("address")} ></textarea>
                    {errors.address && <span className="text-sm text-red-500">{errors.address.message}</span>}
                </div>

                <div>
                    <input type="submit" className="border bg-black  p-2 text-white mx-2"  value="Enroll Now" />
                    <input type="reset" className="border bg-slate-300 p-2 text-white mx-2"   value="Reset" />
                </div>
            </form>

        </div>
    );
}

export default EnrollmentForm;