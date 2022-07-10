import './snackbar.css';

export const Snackbar = props => {
    const {
        closeSnack,         // *REQUIRED* function cancelling the received `children` prop
        type,               // success, warning, error
        children,
        delay
    } = props;


    if (children) {
        setTimeout(closeSnack, (delay || 5000))
    }

    return <div key='app-snackbar' className={`snackbar${children ? ' active' : ''}${type ? ` snack-${type}` : ''}`}>
        { children}
    </div>
}
