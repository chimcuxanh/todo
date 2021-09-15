import Addtodo from "./components/Addtodo";
import { useEffect, useState } from 'react'
import Todo from "./components/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { domain } from "./env";
import { Container, Row, Col, Card } from 'react-bootstrap'
function App() {
  const [todos, settodos] = useState(null)

  const gettodo = async () => {
    await axios({
      url: `${domain}/api/todo/`,
      method: 'GET',

    }).then((res) => {
      // console.log(res.data)
      settodos(res.data);
    })
  }

  useEffect(() => {
    gettodo();
  }, [])


  const addtodo = async newTodo => {
    try {

      await axios.post(`${domain}/api/todo/`, newTodo)
      gettodo();
    } catch (err) {
      console.log(err);
    }
  }



  const completeTodo = async id => {
    try {
      const todo = todos.filter(todo => todo.id === id)[0]
      todo.completed = true
      await axios.put(`${domain}/api/todo/${id}/`, todo)
      gettodo();
    }
    catch (err) {
      console.log(err)
    }
  }


  const editTodo = async todo => {
    try {
      await axios.put(`${domain}/api/todo/${todo.id}/`, todo);
      gettodo();
    }
    catch (err) {
      console.log(err)

    }
  }

  const deleteTodo = async id => {
    try {
      await axios.delete(`${domain}/api/todo/${id}/`);
      gettodo();
    }
    catch (err) {
      console.log(err)

    }
  }


  return (


    <div className="App">
      <Container>
        <Row className="justify-content-center pt-5">
          <Col>
            <Card className="p-5">
              <h1> Simple Todo App</h1>
              <Addtodo addtodo={addtodo} />
              {todos?.map((item, i) => (
                !item.completed &&
                <Todo
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              ))}
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
