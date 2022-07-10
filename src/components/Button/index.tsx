const Button = (props:React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return <button 
    className="rounded-md 
        bg-blue-600
        px-4 
        py-2 
        mb-2
        text-sm 
        font-medium 
        text-white 
        hover:bg-opacity-30 
        focus:outline-none 
        focus-visible:ring-2 
        focus-visible:ring-white 
        focus-visible:ring-opacity-75"
    type='submit'
    {...props}
    >
        {props.children}
    </button>
}

export default Button;