"use client"
import Link from "next/link"
import { ButtonProps } from "./button"

export type CustomButtonProps = {
  componentType: "button" | "link"
  type?: 'submit' | 'button' | 'reset'
  action: string | ((e: React.MouseEvent<HTMLButtonElement>) => void)
  children: React.ReactNode
  theme?: 'dark' | 'light'
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>


const CustomButton = ({ componentType, action, children, theme = 'dark', className = "", type = 'button', ...props }: CustomButtonProps) => {
  return (
    <>
      {componentType === "button" && typeof action === "function" ? (
        <button {...props} type={type} onClick={action} className={`btn disabled:text-secondary border-secondary rounded-md border-solid h-10 min-h-0 ${theme === 'dark' ? 'bg-primary text-secondary hover:bg-secondary hover:text-primary' : 'bg-secondary text-primary hover:bg-primary hover:text-secondary'}  text-normal font-bold shadow-md ${className}`}>
          {children}
        </button >
      ) : componentType === "link" && typeof action === "string" ? (
        <Link href={action} className={`btn border-secondary rounded-md h-10 min-h-0 ${theme === 'dark' ? 'bg-primary text-secondary hover:bg-secondary hover:text-primary' : 'bg-secondary text-primary hover:bg-primary hover:text-secondary'}  text-normal font-bold shadow-md ${className}`}>
          {children}
        </Link>
      ) : null}
    </>
  )
}

export default CustomButton
