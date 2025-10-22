import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const headStyle ={
        textAlign: "center",
    }

    return (
        <div>
            <h1 style={headStyle}>Todo List</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TodoList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;