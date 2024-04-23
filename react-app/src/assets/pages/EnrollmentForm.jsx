import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function EnrollmentForm() {
    const validationSchema = yup.object({
        fullName: yup.string().required('This field is required!'),
        email: yup.string().email('Invalid email address!').required('This field is required!'),
        mobile: yup.string().required('This field is required!'),
        address: yup.string().required('This field is required!'),
        education: yup.string().required('This field is required!'),
        college: yup.string().required('This field is required!'),
        course: yup.string().required('This field is required!'),
        enrollmentDate: yup.string().required('This field is required!'),
        timetable: yup.string().required('This field is required!'),
        fee: yup.string().required('This field is required!'),
    });
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h1>Student Enrollment Form</h1>
            <h2>Personal Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Full Name*</label>
                    <input type="text" className="border" {...register("fullname")} />
                    {errors.fullName && <p>{errors.fullName.message}</p>}
                </div>
                <div>
                    <label>Email Address*</label>
                    <input type="email" {...register("email")} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Mobile*</label>
                    <input type="tel" {...register("tel")} />
                </div>
                <div>
                    <label>Residential Address**</label>
                    <input type="textarea" {...register("address")} />
                </div>


                <h2>Academic Information</h2>
                <div>
                    <label>Education*</label>
                    <input type="text" {...register("education")} />
                </div>
                <div>
                    <label>College/University*</label>
                    <input type="text" {...register("college")} />
                </div>

                <h2>Course Information</h2>
                <div>
                    <label>Course*</label>
                    <input type="text" {...register("course")} />
                </div>
                <div>
                    <label>Enrollment Date*</label>
                    <input type="date" {...register("enrollmentDate")} />
                </div>
                <div>
                    <label>Class Time Table*</label>
                    <input type="text" {...register("timetable")} />
                </div>
                <div>
                    <label>Course Fee</label>
                    <input type="text" {...register("fee")} />
                </div>
                <button className="py-2 px-3 block bg-black text-white rounded-md">Enroll Now</button>
                <button>Cancel</button>
            </form>
        </div>
    )
}

export default EnrollmentForm