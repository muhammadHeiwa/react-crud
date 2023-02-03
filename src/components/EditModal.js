import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import '../styles/EditModal.css';

class EditModal extends React.Component {
	render() {
		const { edit, close, data, change, update } = this.props;
		if (edit) {
			return (
				<div className="modal-container">
					<div className="modal-box">
						<h3>Edit Task</h3>
						<div className="input">
							<input
								type="text"
								value={data.title}
								onChange={change}
							></input>
						</div>
						<div className="btn-group">
							<Button
								text="Submit"
								variant="primary"
								action={update}
							/>
							<Button
								text="Cancel"
								variant="warning"
								action={close}
							/>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

EditModal.propTypes = {
	edit: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	change: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
	update: PropTypes.func.isRequired,
};

export default EditModal;
