import {todoListState} from './TodoList';
import {atom, selector, useRecoilState} from 'recoil';
import { Input } from '@theme-ui/components';
import Style from './Style';


const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: '',
  });

const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);
        const searchWord = () =>{
            let filterList = list;
            filterList = filterList.filter(el => el.text.includes(filter))
            return filterList;
        }
        if(filter === ''){
            return list;
        }
        else{
           return searchWord()
        }
    }
});

const TodoListFilters = () =>{
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({target: {value}}) => {
        setFilter(value);
    };

    return (
            <Input 
                value={filter} 
                onChange={updateFilter} 
                placeholder='Filtrowanie' 
                sx={Style.filterInput}
            />
    );
}

export {filteredTodoListState};
export default TodoListFilters;
