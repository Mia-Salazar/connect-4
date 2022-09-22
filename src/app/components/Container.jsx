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
            for(let j = 0; j < 7; j++) {
                newArray[i][j] = "";
            }
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
                {grid[0] && grid[0].map((e, i) => {
                    return <Cell key={i} index={i} element={e} />
                })}
                {grid[1] && grid[1].map((e, i) => {
                    return <Cell key={i} index={i} element={e} />
                })}
                {grid[2] && grid[2].map((e, i) => {
                    return <Cell key={i} index={i} element={e} />
                })}
                {grid[3] && grid[3].map((e, i) => {
                    return <Cell key={i} index={i} element={e} />
                })}
                {grid[4] && grid[4].map((e, i) => {
                    return <Cell key={i} index={i} element={e} />
                })}
                {grid[5] && grid[5].map((e, i) => {
                    return <Cell key={i} index={i} element={e} />
                })}
            </section>
            <ColumnsButton setUser={setUser} user={user} grid={grid} setGrid={setGrid}/>
        </main>
	);
};

export default Container;