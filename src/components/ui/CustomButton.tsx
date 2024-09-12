"use client"
import Link from "next/link"

export type CustomButtonProps = {
  buttonType?: 'link' | 'button'
  action: string | ((e: React.MouseEvent<HTMLButtonElement>) => void)
  children: React.ReactNode
  theme?: 'dark' | 'light'
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>


const CustomButton = ({ buttonType = 'button', action, children, theme = 'dark', className = "", ...props }: CustomButtonProps) => {
  return (
    <>
      {buttonType === "button" && typeof action === "function" ? (
        <button {...props} onClick={action} className={`btn disabled:text-secondary border-secondary rounded-md border-solid h-10 min-h-0 ${theme === 'dark' ? 'bg-primary text-secondary hover:bg-secondary hover:text-primary' : 'bg-secondary text-primary hover:bg-primary hover:text-secondary'}  text-normal font-bold shadow-md ${className}`}>
          {children}
        </button >
      ) : buttonType === "link" && typeof action === "string" ? (
        <Link href={action} className={`btn border-secondary rounded-md h-10 min-h-0 ${theme === 'dark' ? 'bg-primary text-secondary hover:bg-secondary hover:text-primary' : 'bg-secondary text-primary hover:bg-primary hover:text-secondary'}  text-normal font-bold shadow-md ${className}`}>
          {children}
        </Link>
      ) : null}
    </>
  )
}

export default CustomButton
