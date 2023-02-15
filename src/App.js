
import './App.css';
import Header from './myComponents/Hearder'
import  {Todos} from './myComponents/Todos';
import { TodoList } from './myComponents/TodoList';
import { Fotter } from './myComponents/Fotter';

function App() {
  
  return (
    <>
      <Header Title="TODOS" searchBar="{false}"/>
      <Todos/>
      <TodoList/>
      <Fotter/>
    </>
  );
}

export default App;

