import React, { useState } from 'react'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap'

const Todo = ({ id, title, description, completeTodo, deleteTodo, editTodo }) => {

    const [titleedit, settitleedit] = useState(title)
    const [descriptionedit, setdescriptionedit] = useState(description)

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        settitleedit(title)
        setdescriptionedit(description)
    }

    const handleShow = () => setShow(true);

    const edittodoHanler = (title, description) => {
        handleClose();
        const todo = {
            id, title, description,
        };
        editTodo(todo)
        settitleedit(title)
        setdescriptionedit(description)

    }
    return (
        <div>
            <Row className="border-botton pt-3">
                <Col md={1}>
                    <Form>
                        <Form.Check onChange={() => completeTodo(id)} type='checkbox'>

                        </Form.Check>
                    </Form>
                </Col>
                <Col>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </Col>
                <Col md={2}>
                    <Form>
                        <Button variant='info' className="my-2 btn-block" onClick={handleShow}> Edit</Button>
                    </Form>
                    <Form>
                        <Button variant='danger' className="my-2 btn-block" onClick={() => deleteTodo(id)}>Delete</Button>
                    </Form>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                value={titleedit}
                                type="text"
                                placeholder="title"
                                onChange={e => settitleedit(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="descriptions">
                            <Form.Label>description</Form.Label>
                            <Form.Control
                                value={descriptionedit}
                                type="text"
                                placeholder="description"
                                onChange={e => setdescriptionedit(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        type="submit"
                        onClick={() => edittodoHanler(titleedit, descriptionedit)}>
                        update
                    </Button>
                    <Button variant="secondary"
                        onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Todo
