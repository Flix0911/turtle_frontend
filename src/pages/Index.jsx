// Import our Pet component
import Pet from "../components/Pet"
// import loader data
import { useLoaderData, Form } from "react-router-dom"

export default function Index(props) {
// all our pets
    const allPets = useLoaderData()

    return(
        <>
            <h1>Index Page</h1>

            <h1>Add a Turtle</h1>
            <Form action="/create" method="post">
                <label htmlFor="name">
                    <input type="text" name="name" id="name" />
                </label>
                <label htmlFor="age">
                    <input type="number" name="age" id="age" />
                </label>
                <button>Add New Turtle</button>
            </Form>

            <hr />
            {/* go to JS land */}
            {allPets.map((pet, i) => <Pet pet={pet} key={i}/>)}

        </>
    )
}