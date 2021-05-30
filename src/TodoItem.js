import {Checkbox, Button, Label, Flex, Heading, Text} from 'theme-ui';
import {useRecoilState} from 'recoil';
import {todoListState} from './TodoList';
import { Link } from 'react-router-dom';
import Style from './Style';

let text = '';

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
      console.log(newList)



      fetch(`https://gorest.co.in/public-api/users/1446/todos?id=${item.id}`, {
        method:'POST',
        body: JSON.stringify(newList),
        headers: {
          "content-type": 'application/json',
          "Authorization": 'Bearer 735645577eefaa56b1d0f0097bb74e4911b4206b0bf3c39cadd6c8009df66521'
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
      // Usunięcie zadania z API 
      };










    const sendData = () => {
      text = item.text
    }
    return (
      <Flex sx={Style.itemPosition}>
        <Heading as='h2' sx={Style.itemHeading}>Zadanie</Heading>
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

  export {text}
  export default TodoItem;
