import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Hearder'
import  {Todos} from './myComponents/Todos';
import { TodoList } from './myComponents/TodoList';
import { Fotter } from './myComponents/Fotter';

function App() {
  
  return (
    <>
      <Header/>
      <Todos/>
      <TodoList/>
      <Fotter/>
    </>
  );
}

export default App;
