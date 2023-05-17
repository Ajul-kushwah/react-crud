import './App.css';
import Create from './components/Create';
import CreateStylish from './components/CreateStylish';
import { Routes, Route } from 'react-router-dom';
import Read from './components/Read';
import ReadStylish from './components/ReadStylish';
import Edit from './components/Edit';
import EditStylish from './components/EditStylish';

function App() {
  return (
    <div className="container">
      <Routes>
        {/*
        <Route exact path='/' element={<Read/>}></Route>
         */}
        <Route exact path='/' element={<ReadStylish/>}></Route>
        {/*
        <Route exact path='/create' element={<Create/>}></Route>
        */}
        <Route exact path='/create' element={<CreateStylish/>}></Route>
        <Route exact path='/edit' element={<EditStylish/>}></Route>
        {/*
        <Route exact path='/edit' element={<Edit/>}></Route>
        */}
      </Routes>
    </div>
  );
}

export default App;
