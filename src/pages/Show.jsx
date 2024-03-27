// Import our Pet component
import { Link, useLoaderData } from "react-router-dom"



export default function Show(props) {

    // make a pet
    const aPet = useLoaderData()

    return(
        <div>
            <h1>{aPet.name}</h1>
            <h2>{aPet.age}</h2>
            <Link to="/">
                <button>Go back</button>
            </Link>
        </div>
    )
}