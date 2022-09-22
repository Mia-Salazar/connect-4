import React, { useEffect, useState } from "react";

import Cell from "./Cell";
import ColumnsButton from "./ColumnsButton";

export const Container = () => {
    const [user, setUser] = useState(true)
    const [grid, setGrid] = useState([])

    const createGrid = () => {
        let newArray = [];
        for(let i = 0; i < 6; i++) {
            newArray.push(new Array(7));
        }
        setGrid(newArray);
    }

    useEffect(() => {
        createGrid();
    }, [])
	return (
		<main className="paper container connect">
            {user && <div className="alert alert-secondary">Player 1 turn</div>}
            {!user && <div className="alert alert-danger">Player 2 turn</div>}
            <section className="board">
                {[...Array(42)].map((e, i) => {
                    return <Cell key={i} index={i} />
                })}
            </section>
            <ColumnsButton setUser={setUser} user={user}/>
        </main>
	);
};

export default Container;