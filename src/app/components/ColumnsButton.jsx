import React from "react";

export const ColumnsButton = ({setUser, user, grid, setGrid, setLastToken}) => {
    const tokenLaunched = (event) => {
        let column = event.target.outerText - 1;
        let newGrid = [...grid];
        for(let i = 5; i >= 0; i--) {
            if(newGrid[i][column] === "") {
                newGrid[i][column] = user ? 'X' : 'O';
                setLastToken([i, column, user ? 'X' : 'O']);
                break;
            }
        }
        setGrid(newGrid);
        setUser(!user);
        
    }
	return (
            <section className="columns-button">
                {[...Array(7)].map((e, i) => {
                    return (
                        <button className="paper-btn btn-primary-outline" key={i} onClick={(i) =>tokenLaunched(i)}>{i + 1}</button>
                    )
                })}
            </section>
	);
};

export default ColumnsButton;