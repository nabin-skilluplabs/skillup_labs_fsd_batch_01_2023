import { useEffect, useState } from "react";

function Student() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
(async() => {
    const request = await fetch('http://localhost:3004/student');
    const studentData = await request.json();
    console.log(studentData);
})()
    },[])
  return (
    <>
      <h2>Students</h2>

    </>
  );
}

export default Student;
