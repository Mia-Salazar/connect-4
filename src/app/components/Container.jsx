import React, { useEffect, useState } from "react";

import Cell from "./Cell";
import ColumnsButton from "./ColumnsButton";
import Modal from "./Modal";

export const Container = () => {
    const [lastToken, setLastToken] = useState(null);
    const [user, setUser] = useState(true);
    const [grid, setGrid] = useState([]);
    const [winner, setWinner] = useState(false);
    const checkSurrounding = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [-1, 1], [0, -1], [-1, -1]];

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

    const calculateScore = () => {
        const currentPlayer = lastToken[2];
        const column = lastToken[1];
        const row = lastToken[0];
        let counter = 1;

        for(let directionIndex = 0; directionIndex < checkSurrounding.length; directionIndex++) {
            counter = loopCheck(currentPlayer, column, row, directionIndex, counter )
            if(counter >= 4) {
                setWinner(true);
                break;
            }
        }
    }

    const loopCheck = (currentPlayer, column, row, directionIndex, counter) => {
        if(counter >= 4) return 1;
        if(column + checkSurrounding[directionIndex][1] < 7 && column + checkSurrounding[directionIndex][1] >= 0
            && row + checkSurrounding[directionIndex][0] >= 0 && row + checkSurrounding[directionIndex][0] < 6) {
            if(grid[row + checkSurrounding[directionIndex][0]][column + checkSurrounding[directionIndex][1]] === currentPlayer) {
                return loopCheck(currentPlayer, column + checkSurrounding[directionIndex][1]
                    , row + checkSurrounding[directionIndex][0], directionIndex, counter + 1) + 1;
            }
        }
        return 1;
    }

    useEffect(() => {
        if(lastToken){
            calculateScore();
        }
    }, [grid])

    useEffect(() => {
        createGrid();
    }, [])
	return (
		<main className="paper container connect">
            {winner && <Modal user={user} setWinner={setWinner} createGrid={createGrid} setUser={setUser}/>}
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
            <ColumnsButton setUser={setUser} user={user} grid={grid} setGrid={setGrid} setLastToken={setLastToken}/>
        </main>
	);
};

export default Container;