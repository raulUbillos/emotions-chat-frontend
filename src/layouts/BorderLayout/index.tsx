const BorderLayout = (props:React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return <div className='
    p-2 
    md:p-3 
    border-2 
    border-solid 
    rounded-sm 
    md:rounded-md 
    border-gray-400'>
        {props.children}
    </div>
}

export default BorderLayout;