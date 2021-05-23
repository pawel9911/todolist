import {todoListState} from './TodoList';
import {selector, useRecoilValue} from 'recoil'
import { Box, Paragraph } from '@theme-ui/components';
import Style from './Style';

const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
      const todoList = get(todoListState);
      
      const totalNum = todoList.length;
      const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;  
      return {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
      };
    },
  });

const TodoListStats = () => {
    const {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    } = useRecoilValue(todoListStatsState);
  
    return (
      <Box sx={Style.stats}>
        <Paragraph>Total items: {totalNum}</Paragraph>
        <Paragraph>Items completed: {totalCompletedNum}</Paragraph>
        <Paragraph>Items not completed: {totalUncompletedNum}</Paragraph>
      </Box>
    );
  }

export default TodoListStats;
