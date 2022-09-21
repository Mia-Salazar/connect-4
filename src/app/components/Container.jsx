import React, { useState } from "react";

export const Container = () => {
    const [user, setUser] = useState(true)
	return (
		<main class="paper container margin-bottom-large connect">
            {user && <div class="alert alert-secondary">Player 1 turn</div>}
            {!user && <div class="alert alert-danger">Player 2 turn</div>}
        </main>
	);
};

export default Container;