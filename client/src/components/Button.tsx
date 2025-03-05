interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  fullWidth = false 
}: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 focus:ring-primary-500 dark:focus:ring-primary-400',
    secondary: 'bg-secondary-600 dark:bg-secondary-500 text-white hover:bg-secondary-700 dark:hover:bg-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-400'
  };
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${
        disabled ? 'opacity-50 cursor-not-allowed transform-none hover:scale-100' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;