import {atom, useRecoilValue, useSetRecoilState} from 'recoil';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters ';
import {filteredTodoListState} from './TodoListFilters '
import {Flex, Grid, Heading } from '@theme-ui/components';
import Style from './Style';
import { useEffect } from 'react';

const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

const Todolist = () =>{
    const todoList = useRecoilValue(filteredTodoListState);
    const setTodoList = useSetRecoilState(todoListState);
    useEffect(()=>{
      fetch(`https://gorest.co.in/public-api/users/2586/todos`)
      .then(re => re.json())
      .then((data) => {
        console.log(data)
        let task = data.data.map((e)=> {
          console.log(e)
          return {
            id: e.id,
            text: e.title,
            isComplete: e.completed
          }
        })
        return setTodoList(task)
      })
    },[])

    return (
        <>
          <Flex sx={Style.header}>
            <Heading as='h1' margin={4} color='#a7bbc7' sx={Style.h1}>TodoList</Heading>
            <TodoItemCreator />
            <TodoListStats />
          </Flex>   
          <Flex  sx={{flexDirection:'column', alignItems:'center'}}>
            <TodoListFilters/>
            <Grid  sx={Style.itemGrid}>
              {todoList.map((todoItem, index) => (
                <TodoItem key={index} item={todoItem} />
              ))}
            </Grid>
          </Flex>
        </>
      );
}
export {todoListState};
export default Todolist;
