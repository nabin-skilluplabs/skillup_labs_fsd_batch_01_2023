import { useEffect, useState } from "react";

function Student() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    (async () => {
      const request = await fetch("http://localhost:3005/students");
      const studentData = await request.json();
      setStudents(studentData.data);
    })();
  }, []);
  return (
    <>
      <h2 className="text-4xl my-4">Students</h2>
      {students.map((students, index) => (
        <div className="my-4 p-4 bg-slate-200" key={index}>
          <h3 className="text-xl font-bold">{students.name}</h3>
          <h4>
            <a href={`mailto:${students.email}`}>{students.email}</a>
          </h4>
          <h4>{students.mobile}</h4>
        </div>
      ))}
    </>
  );
}

export default Student;