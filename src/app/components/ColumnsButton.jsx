import React from "react";

export const ColumnsButton = ({setUser, user}) => {
    const tokenLaunched = (event) => {
        console.log(event.target.outerText)
        setUser(!user)
    }
	return (
            <section className="columns-button">
                {[...Array(7)].map((e, i) => {
                    return <button className="paper-btn btn-primary-outline" key={i} onClick={(i) =>tokenLaunched(i)}>Columna {i}</button>
                })}
                
            </section>
	);
};

export default ColumnsButton;