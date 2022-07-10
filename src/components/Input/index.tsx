const Input = (props:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    return <input 
    style={{
        borderWidth:'1px'
    }}
    className='
        border-solid 
        rounded-sm 
        md:rounded-md 
        border-gray-300
        px-2
        py-2
        w-1/3
        mb-3
        mt-1
    '
    {...props}
    />
}

export default Input;