export default props => {

    const {
        title,
        onClick,
        inverted,   // anthracite bg, white txt (iso default white bg, anthracite text)
        link,       // simple version showed as text
        className,
        active,     // distribute the active-button class
        buttonStyle,
        icon
    } = props||{};

    const buttonProps = {
        //className: `app-button ${inverted ? ' inverted-button' : ''}${link ? ' link-button' : ''}${className ? ` ${className}` : ''}${active ? ` active-button` : ''}`,
        className: `${link ? 'link-button' : 'app-button'}${className ? ` ${className}` : ''}${active ? ` active-button` : ''}${inverted ? ' inverted-button' : ''}`,  /// TODO ! (App.scss)
        ...( typeof onClick === 'function' ? { onClick } : {} ),
        style: {...( buttonStyle || {} )}
    }

    return (
        <button {...buttonProps}>
            <div className="button-container flex row">
                <span className="allwidth">{ title }</span>
                
                {
                    icon
                    ? <>&nbsp;{icon}</>
                    : null
                }
            </div>
        </button>
    )
}