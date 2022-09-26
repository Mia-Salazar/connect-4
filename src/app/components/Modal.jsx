import React from "react";

export const Modal = ({user, setWinner}) => {
	return (
        <article className="modal">
            <label className="modal-bg" htmlFor="modal-1"></label>
            <div className="modal-body">
                <button className="btn-close" htmlFor="modal-1"  onClick={() => setWinner(false)}>X</button>
                <h4 className="modal-title">Player {user ? 2 : 1} has won!</h4>
                <h5 className="modal-subtitle">Well done</h5>
            </div>
        </article>
	);
};

export default Modal;