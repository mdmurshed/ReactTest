import React from 'react'

function ErrorBoundary({hero}) {
    if(hero === 'joker'){
        throw new Error("Not a hero")
    }
  
    return (
        <div>
            {hero}
        </div>
    )
}

export default ErrorBoundary
