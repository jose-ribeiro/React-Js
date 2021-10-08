import React from "react";
import DiretaFilho from "./diretaFilho";

export default props =>{
    return(
        <div>
            <DiretaFilho nome="Jose " idade={27} bool={true}></DiretaFilho>
            <DiretaFilho nome="CAssiano " idade={26} bool={true}></DiretaFilho>
            
        </div>
    )
}