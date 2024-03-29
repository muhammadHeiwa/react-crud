import React, { useState } from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';
import logo from './logo.svg';
import './App.css';
import DeleteModal from './components/DeleteModal';
import { useDispatch, useSelector } from 'react-redux';
import { add, del, update } from './store/actions/task';

const App = () => {

    const { todos } = useSelector(state => state.task);
    const dispatch = useDispatch();
    
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
        const title = data
        dispatch(add(title))
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

    const handleUpdate = () => {
        const {id, title} = editData;
        const newData = {id, title}
        const newTodos = todos;
        newTodos.splice(id - 1, 1, newData);
        dispatch(update(newTodos));
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
        dispatch(del(id));
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
                update={handleUpdate}
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
