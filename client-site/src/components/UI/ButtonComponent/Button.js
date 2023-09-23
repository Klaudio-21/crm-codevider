import "./Button.css";
const Button = ({ type, children, ...buttonProps }) => {
    return (
        <button className="btn-btn" {...buttonProps}>
            {children}
        </button>
    );
};
export default Button;