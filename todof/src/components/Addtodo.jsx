import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"

const Addtodo = ({ addtodo }) => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")

    const addtodoHandler = (e) => {
        e.preventDefault();
        addtodo({
            title, description, completed: false,

        })

    }

    // console.log(title);
    // console.log(description);


    return (
        <Form>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"
                    placeholder="title"
                    onChange={e => settitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descriptions">
                <Form.Label>description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="description"
                    onChange={e => setdescription(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={addtodoHandler}>
                Addtodo
            </Button>
        </Form>
    )
}

export default Addtodo
