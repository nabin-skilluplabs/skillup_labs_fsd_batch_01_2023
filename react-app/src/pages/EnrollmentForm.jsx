import {useForm} from "react-hook-form";
import {object, String} from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function EnrollmentForm(){
    let formSchema = object({
        fullName: String().required('This field is required'),
        email: String().email('Invalid email address!'),
        mobile: String().required("Mobile is required"),
        address: String().required("Address is requird"),
        resolver: yupResolver(formSchema)


    })
    const{
        register,
        handleSubmit,
        watch, 
        formState: {errors},
    } = useForm()


    function onSubmit(data){
        console.log(data);
        console.log(formSchema);
    }
    
    return(
        <div>
            <h1>Studnet Enrollment Form</h1>
            <h2>Personal Information </h2>

            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div>
                <label htmlFor="name">Full Name</label>
                <input className="border" type="text"  {...register("fullName")} />
                
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input className="border" type="email" {...register("email")} />
              </div>
              <div>
                <label htmlFor="">Mobiles</label>
                <input className="border" type="text" {...register("mobile")}/>
              </div>
              <div>
                <label htmlFor="">Residential Address</label>
                <textarea className="border" name="address" id="" cols="30" rows="10" {...register("address")}></textarea>
              </div>
              <div>
                    <input className="border  " type="submit" value="Enroll Now" />
                    <input className="border bg-gray-500 text-white" type="reset" value="Reset" />
              </div>

            </form>
        </div>
    )
}
export default EnrollmentForm