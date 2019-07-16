import React from 'react';

export default (props) => {
    const { color = 'danger', text = 'Loading...' } = props
    return (
        <div className={`spinner-grow text-${color}`} role="status">
            <span className="sr-only">{text}</span>
        </div>
    )
}