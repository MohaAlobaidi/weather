import React from 'react'

 const Form =(props)=> {
     const {getWether}=props
        return (
            <form onSubmit={getWether}>
                <div>
                <input type='text' name='city' placeholder='city...' />
                </div>

                <div>
                <input type='text' name='country' placeholder='country...' />
                </div>
                <button>Get Weather</button>
            </form>
        )
}

export default Form
