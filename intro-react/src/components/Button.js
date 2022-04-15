const Button = ({ btnName, onClick }) => {
    return (
        <button className="border-2 m-2 radius-2" onClick={onClick}>{ btnName }</button>
    )
}

export default Button