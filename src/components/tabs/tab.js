import React from 'react';

export default (props) =>  {
    const onClick = () => {
        props.onClick(props.label);
    }
    const { active, label } = props;
    const className = active ? 'tab-list-item tab-list-active' : 'tab-list-item' ;
    return (
        <li
        className={className}
        onClick={onClick}
        >
        {label}
        </li>
    );
}