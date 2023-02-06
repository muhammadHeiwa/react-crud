import React, { useState } from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';
import logo from './logo.svg';
import './App.css';
import DeleteModal from './components/DeleteModal';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Reading a Book"
        },
        {
            id: 2,
            title: "Sleep"
        }
    ]);
    
    const [isEdit, SetIsEdit] = useState(false);
    const [isDelete, SetIsDelete] = useState(false);
    const [editData, setEditData] = useState({
        id: '',
        title: ''
    });
    const [delData, setDelData] = useState({
        id: ''
    });

    // Add Section
    const addTask = (data) => {
        const id = todos.length;
        const newData = {
            id: id + 1,
            title: data
        };
        setTodos([...todos, newData])
    }

    // Close Modal
    const closeModal = () => {
        SetIsEdit(false)
        SetIsDelete(false)
    }

    // Update Section
    const openModal = (id, data) => {
        SetIsEdit(true);
        setEditData({
            id: id,
            title: data
        })
    };

    const setTitle = (e) => {
        setEditData({
            ...editData,
            title: e.target.value
        })
    };

    const update = () => {
        const {id, title} = editData;
        const newData = {id, title}
        const newTodos = todos;
        newTodos.splice(id - 1, 1, newData);
        setTodos(newTodos);
        SetIsEdit(false);
        setEditData({
            id: '',
            title: ''
        });
    }

    // delete section
    const confirmModal = (id) => {
        SetIsDelete(true);
        setDelData({id: id});
    };

    const deleteTask = () => {
        const id = delData.id;
        setTodos(todos.filter((item) => item.id !== id))
        SetIsDelete(false);
    }

    return(
        <div className="app">
            <div className="logo">
                <img
                    src={logo}
                    alt="Logo"
                />
                <h3>Task List</h3>
            </div>
            <div className="list">
                {todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        todo={item}
                        open={openModal}
                        del={confirmModal}
                    />
                ))}
            </div>
            <div className="input-form">
                <FormInput add={addTask} />
            </div>
            <EditModal
                edit={isEdit}
                close={closeModal}
                change={setTitle}
                data={editData}
                update={update}
            />
            <DeleteModal
                isDelete={isDelete}
                close={closeModal}
                commit={deleteTask}
            />
        </div>
    )
}

export default App;
