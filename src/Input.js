export const Input = ({
    icon,
    inputProps,
    wrapperClassName
}) => <div className={`flexy row ${wrapperClassName||''}`} style={{marginTop: '2%'}}>
    <input {...inputProps} />
    {
        icon
        ? <span style={{marginLeft: '-3%'}}>{ icon || null }</span>
        : null
    }
</div>