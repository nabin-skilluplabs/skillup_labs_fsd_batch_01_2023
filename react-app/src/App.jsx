import Header  from "./components/Header"

export default function App(){
    const apps = [
        {
            title: "Home",
            path: ""
        },
        {
            title: "Counter",
            path: "/counter"
        },
        {
            title: "Stock Management",
            path: "/stock"
        },
        {
            title: "ToDo Application",
            path: "/todoapp"
        },
        {
            title: "Describing the UI",
            path: "/describing-the-ui"
        },
        {
            title: "News",
            path: "/news"
        },
        {
            title: "Student Elrollment Form",
            path: "/enrollmentform"
        }

    ]
    return (
        <div className="text-center"> 
            <Header appName="React Apps" />
            {
                apps.map((app, index) =>(
                    <a className=" text-amber-600 block py-1" key={index} href={app.path}>{app.title}</a>
                ))
            }
        </div>
    )
}