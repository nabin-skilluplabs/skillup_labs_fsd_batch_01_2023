/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function Students(){
    const [students, setStudents] = useState([]);
    useEffect(() =>{
        (async() =>{
            const req = await fetch('http://localhost:3005/students');
            const studentData = await req.json();
            setStudents(studentData.data);
        })()
    }, [])
    return(
        <>
        <h1>Hello there</h1>
          {
            students.map((students, index) =>{
                <div key={index}>
                    <h3>{students.name}</h3>
                    <h4>
                        <a href={`mailto:${students.email}`}>{students.email}</a>
                   
                    </h4>
                    <h4>{students.mobile}</h4>
                    <p>{students.intro}</p>

                </div>
            })
        }
        </>
      
    )
}
export default Students;