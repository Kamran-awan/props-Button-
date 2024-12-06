const Button=(props:any)=>{
    return(
        <div className="flex justify-center items-center mb-4 mt-4">
    <button className={`${props.bgColor} text-white rounded-md py-2 px-4`}>
            
            {props.btnText}
            </button>
        </div>
    )
}
export default Button;