/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function Students(){
    const [students, setStudents] = useState([]);
    useEffect(() =>{
        (async() =>{
            const req = await fetch('http://localhost:3005/students');
            const studentData = await req.json();
            console.log(studentData)
        })()
    }, [])
    return(
        <h1>Hello there</h1>
    )
}
export default Students;