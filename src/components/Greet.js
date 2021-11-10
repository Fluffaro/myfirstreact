const Greet =(props)=>{
    return (
        <div>
            {props.children}
            <h1>Hello {props.name} {props.name2}</h1>
        </div>
    ) 
}

export default Greet