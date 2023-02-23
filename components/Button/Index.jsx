import './index.css'

const Button=(props)=>{

    return<button   className={props.class}type={props.type} onClick={props.onClick} style={props.style}>{props.text}</button>
}
export {Button}