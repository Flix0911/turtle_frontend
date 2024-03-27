// Import our Pet component
import { Link, useLoaderData, Form } from "react-router-dom"



export default function Show(props) {

    // make a pet
    const aPet = useLoaderData()
    // 1- ?. ~ optional chaining
    // is it real or undefined, if undefined, won't go further
    // it is undefined until a pet is defined into it
    const id = aPet?.url.split("/")[4]

    return(
        <div>
            <h1>{aPet.name}</h1>
            <h2>{aPet.age}</h2>

            <div>
                {/* Update form */}
              {/* Update form */}
              <Form action={`/update/${id}/`} method="POST">
                    <label htmlFor="name">
                        Rename you Turtle
                        <input type="text" id="name" name="name" defaultValue={aPet.name}/>
                    </label>
                    
                    <label htmlFor="age">
                        Did they have a birthday?
                        <input type="number" id="age" name="age" defaultValue={aPet.age}/>
                    </label>
                    <button style={{"backgroundColor": "blue"}}>Update our Turtle</button>
                </Form>

                {/* delete form */}
                <Form action={`/delete/${id}/`} method="post">
                    <button style={{"backgroundColor": "red"}}>Release Turtle</button>
                </Form>
            </div>

            <Link to="/">
                <button>Go back</button>
            </Link>
        </div>
    )
}