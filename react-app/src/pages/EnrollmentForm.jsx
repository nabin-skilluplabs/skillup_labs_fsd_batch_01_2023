import { useForm } from "react-hook-form";
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";

let formSchema = object({
    name: string().required('This field is required!'),
    email: string().required('Email is required!').email('Invalid email address!'),
    mobile: string().required('Mobile is required!'),
    addres: string().required('Address is required!'),
  });

function EnrollmentForm() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema),
      });
    
    async function onSubmit(data) {
       const response = await fetch('http://localhost:3005/students', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
       });

       if(response.status === 200) {
            return navigate('/students')
       }
    }



    return (
        <div>
            <h1>Student Enrollment Form</h1>
            <h2>Personal Information</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Full Name*</label>
                    <input className="border" type="text"  {...register("name")} />
                    {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
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
                    <textarea className="border"   {...register("addres")} ></textarea>
                    {errors.addres && <span className="text-sm text-red-500">{errors.addres.message}</span>}
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