import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

// import { TodoList } from './Todo/TodoList';
// import { Menu } from 'antd';

const App = () => {
	// Data
	const usersData = []

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<React.Fragment>
			<div className="container">
				<div className="">
					<div className="flex-large">
						{editing ? (
							<Fragment>
								<h2>Edit user</h2>
								<EditUserForm
									editing={editing}
									setEditing={setEditing}
									currentUser={currentUser}
									updateUser={updateUser}
								/>
							</Fragment>
						) : (
								<Fragment>
									<AddUserForm addUser={addUser} />
								</Fragment>
							)}
					</div>
					<div className="flex-large">
						<h2>View users</h2>
						<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default App
