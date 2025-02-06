import React from 'react'

const Weather = ({temp}) => {
    // let temp = 100
    if(temp <15){
        return <h1>Too Cold Outside</h1>
    }else if(temp >= 15 && temp <=25){
        return <h1>Its Nice Outside</h1>
    }else if(temp >25){
        return <h1>Its Hoot Outside</h1>
    };
}
export default Weather