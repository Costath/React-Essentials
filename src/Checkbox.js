import React, { useReducer } from "react";

export function Checkbox() {
    const [checked, toggle] = useReducer(
        checked => !checked, // reducer function, called here 'toggle' (taking the current value and returning it inverted)
        false // initial value
    );
    return(
        <>
            <label htmlFor="checkbox">
                {checked ? "checked" : "not checked"}
            </label>
            <input 
                id="checkbox"
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
        </>
    )
}