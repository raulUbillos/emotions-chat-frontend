const Form = (props:React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) => {
    return <form 
                className='
                    flex 
                    flex-col
                    items-center
                '
                {...props}>
        {props.children}
    </form>
}

export default Form;