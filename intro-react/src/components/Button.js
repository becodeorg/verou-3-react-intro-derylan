const Button = ({ btnName, onClick }) => {
    return (
        <button className="border-2 m-2 p-2 rounded-xl bg-sky-500 hover:bg-sky-700" onClick={onClick}>{ btnName }</button>
    )
}

export default Button