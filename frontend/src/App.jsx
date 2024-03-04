import UserStats from "./component/UserStats";
import { TodoWrapper } from "./component/TodoWrapper";
import './App.css';

const App = () => {
  return (  
    <div className="Home">
      <div className="Container">
          <UserStats />
          <TodoWrapper />
      </div>
    </div>
    );
}

export default App;