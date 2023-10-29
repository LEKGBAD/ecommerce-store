import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps 

extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button=forwardRef<HTMLButtonElement,ButtonProps>(({
    className,
    children,
    disabled,
    type="button",
    ...props
},ref)=>{
    return (
        <button
        ref={ref}
        disabled={disabled}
        className={cn(
            `
            w-auto
            rounded-full
            bg-black
            border-transparent
            px-5
            py-3
            disabled:cursor-not-allowed
            disabled:opacity-50
            text-white
            font-semibold
            hover:opacity-70
            transition
            `,
            className
        )}
        {...props}
        >
            {children}
        </button>
    )
})

Button.displayName="Button"
export default Button;