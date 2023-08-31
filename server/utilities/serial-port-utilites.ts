import {CompareArray} from "../types/serial-port.types";

export const compareArrays: CompareArray = ({
    prevArray,
    newArray
}) => {

    if( prevArray.length > newArray.length ){

        const prevCopy = [...prevArray];

        return prevCopy.reduce((accum, current) => {

            if(!newArray.includes(current)){
                const currentIndex = prevArray.indexOf(current);
                accum.splice(currentIndex, 1);
                return accum;
            } else {
                return accum;
            }

        },prevArray);

    } else if( prevArray.length < newArray.length ) {

        return  newArray.reduce((accum, current)=>{
            if(!prevArray.includes(current)){
                return [...accum, current];
            } else {
                return accum;
            }
        },prevArray);

    } else {

        return prevArray;

    }

};