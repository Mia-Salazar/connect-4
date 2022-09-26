import React from "react";

export const Modal = ({user, setWinner, createGrid, setUser}) => {
    const closeWinner = () => {
        setWinner(false);
        setUser(false);
        createGrid();
    }
	return (
        <article className="modal">
            <label className="modal-bg" htmlFor="modal-1"></label>
            <div className="modal-body">
                <button className="btn-close" htmlFor="modal-1"  onClick={() => closeWinner()}>X</button>
                <h4 className="modal-title">Player {user ? 2 : 1} has won!</h4>
                <h5 className="modal-subtitle">Well done</h5>
                <label htmlFor="modal-1">Nice!</label>
            </div>
        </article>
	);
};

export default Modal;