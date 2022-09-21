import React, { useState } from "react";
import Cell from "./Cell";

export const Container = () => {
    const [user, setUser] = useState(true)
	return (
		<main className="paper container connect">
            {user && <div className="alert alert-secondary">Player 1 turn</div>}
            {!user && <div className="alert alert-danger">Player 2 turn</div>}
            <section className="board">
                {[...Array(42)].map((e, i) => {
                    return <Cell key={i} />
                })}
            </section>
        </main>
	);
};

export default Container;