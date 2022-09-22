import React from "react";

export const Cell = ({element}) => {
	return (
            <article className={ element === 'X' ? 'card background-secondary': element === 'O' ? 'card background-danger' : 'card' }>
            </article>
	);
};

export default Cell;