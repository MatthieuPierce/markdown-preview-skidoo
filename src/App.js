import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor'
import Preview from './components/Preview'
import ReactFCCtest from 'react-fcctest';


function App() {
  return (
    <div className="App">
      <Editor />
      <Preview />
      <ReactFCCtest />
    </div>
  );
}

export default App;
