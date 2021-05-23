import {Checkbox, Button, Label, Flex, Heading, Text} from 'theme-ui';
import {useRecoilState} from 'recoil';
import {todoListState} from './TodoList';
import { Link } from 'react-router-dom';
import Style from './Style';

let data = {
  text: '',
  id: 0,
}

const TodoItem = ({item}) =>{
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);
  
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete,
      });
  
      setTodoList(newList);
    };
  
    const deleteItem = () => {
      const newList = removeItemAtIndex(todoList, index);
      setTodoList(newList);
      fetch(`https://gorest.co.in/public-api/users/${index}`, {
        method: 'DELETE',
      })
      .then(text => console.log(text.status))
      .catch(err => console.log(err))
    };
    const sendData = () => {
      data = {text: item.text, id: item.id+1}
    }
    return (
      <Flex sx={Style.itemPosition}>
        <Heading as='h2' sx={Style.itemHeading}>Zadanie {item.id+1}</Heading>
        <Text sx={Style.itemText}>{item.text}</Text>
        <Label sx={Style.itemLabel}>
            <Checkbox
              type="checkbox"
              checked={item.isComplete}
              onChange={toggleItemCompletion}
              sx={{color: '#a7bbc7'}}
            /> Gotowe
        </Label>
        <Button sx={Style.itemButton} onClick={deleteItem}>Usuń</Button>
        <Link to='/task' onClick={sendData} style={Style.itemLink}>Pokaż całe zadanie</Link>
      </Flex>
    );
  }
  
  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  export {data}
  export default TodoItem;
