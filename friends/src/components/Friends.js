import React from 'react'
import axios from 'axios'



    axios
      .get('http://localhost:5000')
      .then(res => {
        console.log({res})
      })
      .catch(err => console.log({ err }));


export const Friends = () => {
    return (
        <div>
            <h3>List of friends appears here</h3>
        </div>
    )
}
