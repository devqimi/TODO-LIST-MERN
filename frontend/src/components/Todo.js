import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';

function Todo(){
    const [todoList, setTodoList] = useState([]);
    const [editableId,  setEditableId] = useState(null);
    const [editedTask, setEditedTask] = useState("");
    const [editedStatus, setEditedStatus] = useState("");
    const [newTask, setNewTask] = useState("");
    const [newStatus, setNewStatus] = useState("");
    const [newDeadline, setNewDeadline] = useState("");
    const [editedDeadline, setEditedDeadline] = useState("");

    // fetch tasks from db
    useEffect(() => {
        axios.get('http://localhost:3001/getTodoList')
        .then(result => {
            setTodoList(result.data)
        })
        .catch(err => console.log(err))
    }, [])

    // function to toggle editable for specific row
    const toggleEditable = (id) => {
        const rowData = todoList.find((data) => data._id === id);
        if (rowData) {
            setEditableId(id);
            setEditedTask(rowData.task);
            setEditedStatus(rowData.status);
            setEditedDeadline(rowData.deadline || "");
        } else {
            setEditableId(null);
            setEditedTask("");
            setEditedStatus("");
            setEditedDeadline("");
        }
    }

    // function to add new task to db
    const addTask = (e) => {
        e.preventDefault();
        if(!newTask || !newStatus || !newDeadline){
            alert("All fields must be filled out!");
            return;
        }

        axios.post('http://127.0.0.1:3001/addTodoList', { task: newTask, status: newStatus, deadline: newDeadline })
        .then(res => {
            console.log(res);
            window.location.reload(err);
        })
    }

    // function to save edited data to db
    const saveEditedTask = (id) => {
        const editedData = {
            task: editedTask,
            status: editedStatus,
            deadline: editedDeadline,
        };

        // if the fields are empty
        if(!editedTask || !editedStatus || !editedDeadline){
            alert("All fields must be filled out!");
            return;
        }
    }
    // 
}