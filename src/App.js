import React from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';
import logo from './logo.svg';
import './App.css';
import DeleteModal from './components/DeleteModal';

class App extends React.Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Reading a Book',
			},
			{
				id: 2,
				title: 'Ngoding',
			},
		],
		isEdit: false,
		editData: {
			id: '',
			title: '',
		},
		isDelete: false,
		delData: {
			id: '',
		},
	};

	// Update Section
	openModal = (id, data) => {
		this.setState({
			isEdit: true,
			editData: {
				id,
				title: data,
			},
		});
	};

	setTitle = (e) => {
		this.setState({
			editData: {
				...this.state.editData,
				title: e.target.value,
			},
		});
	};

	update = () => {
		const { id, title } = this.state.editData;
		const newData = { id, title };
		const newTodos = this.state.todos;
		newTodos.splice(id - 1, 1, newData);
		this.setState({
			todos: newTodos,
			isEdit: false,
			editData: {
				id: '',
				title: '',
			},
		});
	};

	// Delete Section
	confirmModal = (id) => {
		this.setState({
			isDelete: true,
			delData: {
				id,
			},
		});
	};

	deleteTask = () => {
		const id = this.state.delData.id;
		this.setState({
			todos: this.state.todos.filter((item) => item.id !== id),
			isDelete: false,
		});
	};

	// close Modal
	closeModal = () => {
		this.setState({
			isEdit: false,
			isDelete: false,
		});
	};

	// Add Section
	addTask = (data) => {
		const id = this.state.todos.length;
		const newData = {
			id: id + 1,
			title: data,
		};
		this.setState({
			todos: [...this.state.todos, newData],
		});
	};
	render() {
		const { todos } = this.state;
		return (
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
							del={this.confirmModal}
							open={this.openModal}
						/>
					))}
				</div>
				<div className="input-form">
					<FormInput add={this.addTask} />
				</div>
				<EditModal
					edit={this.state.isEdit}
					close={this.closeModal}
					change={this.setTitle}
					data={this.state.editData}
					update={this.update}
				/>
				<DeleteModal
					isDelete={this.state.isDelete}
					close={this.closeModal}
					commit={this.deleteTask}
				/>
			</div>
		);
	}
}

export default App;
