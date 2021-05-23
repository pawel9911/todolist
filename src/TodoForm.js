import { Container} from 'theme-ui';
import { RecoilRoot } from "recoil";
import TodoList from "./TodoList";

const TodoForm = () =>{
    return (
        <Container bg="#faf3f3">
          <RecoilRoot>
            <TodoList/>
          </RecoilRoot>
        </Container>
    )
}

export default TodoForm;