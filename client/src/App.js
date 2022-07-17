import './App.css';
import CommandButton from './components/CommandButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Test
        <div style={{display: 'flex'}}>
        <CommandButton name={"fa fa-plus"}/>
        <CommandButton name={"fa fa-trash"}/>
        <CommandButton name={"fa fa-edit"}/>
        </div>
      </header>
    </div>
  );
}

export default App;
