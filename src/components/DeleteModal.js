import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import '../styles/DeleteModal.css';

class DeleteModal extends React.Component {
	render() {
		const { isDelete, close, commit } = this.props;
		if (isDelete) {
			return (
				<div className="modal-container">
					<div className="modal-box">
						<h3>Are You Sure Want Delete this Task ?</h3>
						<div className="btn-group">
							<Button
								text="Submit"
								variant="primary"
								action={commit}
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

DeleteModal.propTypes = {
	isDelete: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	commit: PropTypes.func.isRequired,
};

export default DeleteModal;
