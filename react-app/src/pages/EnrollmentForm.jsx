import { useForm } from "react-hook-form";

function EnrollmentForm() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    
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
                </div>
                <div>
                    <label>Email*</label>
                    <input className="border"  type="email"  {...register("email")} />
                </div>
                <div>
                    <label>Mobile*</label>
                    <input className="border"  type="text"  {...register("mobile")} />
                </div>
                <div>
                    <label>Residential Address*</label>
                    <textarea className="border"   {...register("address")} ></textarea>
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