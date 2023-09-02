import classes from './../../Login/Login.module.css';
import React ,{useRef, useEffect, useImperativeHandle} from 'react';

const Input = React.forwardRef((props,ref) => {

    const inputRef = useRef();

    // current is Input field object and focus is a DOM part
    const activate = () =>{
        inputRef.current.focus();
    }

    useImperativeHandle(ref,()=>{
        // return an object that make outside world access this internal functionality
        return {
            focus:activate
        }
    })

    return(
        <div
            className={`${classes.control} ${props.state.isValid === false ? classes.invalid : ''
                }`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.state.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;
