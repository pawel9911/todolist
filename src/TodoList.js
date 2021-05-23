import {atom, useRecoilValue,} from 'recoil';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters ';
import {filteredTodoListState} from './TodoListFilters '
import {Flex, Grid, Heading } from '@theme-ui/components';
import Style from './Style';

const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

const Todolist = () =>{
    const todoList = useRecoilValue(filteredTodoListState);
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
              {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
              ))}
            </Grid>
          </Flex>
        </>
      );
}
export {todoListState};
export default Todolist;
