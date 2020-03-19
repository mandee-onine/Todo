import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<React.Fragment>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Create User
			</button><br /><br />
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">User Details</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form
								onSubmit={event => {
									event.preventDefault()
									if (!user.name || !user.username) return

									props.addUser(user)
									setUser(initialFormState)
								}}
							>
								<label>Name</label>
								<input type="text" name="name" placeholder="Name" value={user.name} onChange={handleInputChange} />
								<label>Email</label>
								<input type="email" name="username" placeholder="abc@gmail.com" value={user.username} onChange={handleInputChange} />
								<div class="modal-footer">
									<button>Add</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default AddUserForm
