// import all libraries and components here for use in Indian News Express
import React from 'react'
import loading from './loading.gif'

// Create a Spinner arrow function for display the spinner while articles is loading with return statement
const Spinner = () => {

    // Return statement
    return (

        // Create a layout of spinner for display the spin while articles is loading in DOM
        <div className="text-center" style={{ height: '100px' }}>
            <img className="my-3" src={loading} alt="loading" />
        </div>
    )
}

//  Export this page for another pages
export default Spinner
