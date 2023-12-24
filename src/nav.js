import React from "react";
import { NavLink } from "react-router-dom";

const nav=()=>{
    return(
        <div>
            <>
                <nav>
                <NavLink to='/home'>
                        home
                    </NavLink>
                    <NavLink to='/test'>
                        test
                    </NavLink>
                </nav>

            </>
        </div>
    )
}
export default nav