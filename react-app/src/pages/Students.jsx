import { useEffect } from "react";
import { useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await fetch("http://localhost:3005/students");
      const studentsData = await request.json();
      setStudents(studentsData.data);
    })();
  }, []);

  return (
    <>
      <h2>Total Students</h2>

      {students.map((student, index) => (
        <div className="my-4 p-4 bg-slate-200" key={index}>
          <h3 className="text-2xl font-bold">{student.name}</h3>
          <h4>
            <a href={`mailto:${student.email}`}>{student.email}</a>
          </h4>
          <h4>{student.mobile}</h4>
          <p>{student.intro}</p>
        </div>
      ))}
    </>
  );
}

export default Students;
