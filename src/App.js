import { HashRouter, Route } from 'react-router-dom';
import {Box} from 'theme-ui';
import TodoForm from './TodoForm';
import Task from './Task';


const App = ()  => {
  return (
    <Box className='App'>
      <HashRouter>
        <Route exact path='/' component={TodoForm}></Route>
        <Route path='/task' component={Task}></Route>
      </HashRouter> 
    </Box>
  )
}

export default App;
