import Header from "./Header"

export default function App() {
    const apps = [
        {
            title: "Counter",
            path: "./Counter.jsx"
        }
    ]
}
return (
    <div>
        <Header appName="React Apps" />
    </div>
)
