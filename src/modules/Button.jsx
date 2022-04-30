import './Button.css'

function Button(props){
    let classes= 'button'
    classes += props.operation ? ' operation' : ''
    classes += props.triple ? ' triple' : ''
    classes += props.double ? ' double' : ''  
    return <button onClick={()=> props.click(props.label)} className={classes}>{props.label}</button>
}

export default Button