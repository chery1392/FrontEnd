type ButtonVariant = "primary" | "secondary" | "outline" | "danger";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
