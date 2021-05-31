import {Button, Flex, Input, Text } from '@theme-ui/components';
import {useSetRecoilState, atom, selector, useRecoilState, useRecoilValue} from 'recoil';
import Style from './Style';
import {todoListState} from './TodoList';

const textState = atom({
  key: 'textState',
  default: '', 
});

const charCountState = selector({
  key: 'charCountState', 
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  },
});

const TodoItemCreator = () => {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
      fetch(`https://gorest.co.in/public-api/users/2586/todos`, {
        method:'POST',
        body: JSON.stringify({user: 1446, title: text, completed: false}),
        headers: {
          "content-type": 'application/json',
          "Authorization": 'Bearer '//brak tokena
        }
      })
      .then(response => response.json())
      .then((data)=>{
        console.log(data)
        return (
          setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
              id: data.id,
              text: text,
              isComplete: false,
            },
          ])
        )
      })   
      setText('');
    };
  
    const onChange = ({target: {value}}) => {
      setText(value);
    };
  
    return (
      <Flex sx={{flexDirection:'column', alignItems:'center', width: '60%'}}>
        <Flex sx={{minWidth: '80%',justifyContent:'center'}}>
          <Input type="text" value={text} onChange={onChange} placeholder='Dodaj zadanie' sx={Style.creatorInput}/>
          <Button variant='primary' onClick={addItem} sx={Style.creatorButton}>Add</Button>
        </Flex>
        <Text sx={Style.creatorText}>Character Count: {count}</Text>
      </Flex>
    );
}

export default TodoItemCreator;
