import Link from "next/link"

type CustomButtonProps = {
  type: "button" | "link"
  action: string | ((e: React.MouseEvent<HTMLButtonElement>) => void)
  children: React.ReactNode
  theme?: 'dark' | 'light'
  className?: string
  buttonType?: "button" | "submit" | "reset"
};


const CustomButton = ({ type, action, children, theme = 'dark', className = "", buttonType }: CustomButtonProps) => {
  return (
    <>
      {type === "button" && typeof action === "function" ? (
        <button type={buttonType} onClick={action} className={`btn h-10 min-h-0 ${theme === 'dark' ? 'bg-primary text-secondary hover:bg-secondary hover:text-primary' : 'bg-secondary text-primary hover:bg-primary hover:text-secondary'}  text-normal font-bold shadow-md ${className}`}>
          {children}
        </button >
      ) : type === "link" && typeof action === "string" ? (
        <Link href={action} className={`btn h-10 min-h-0 ${theme === 'dark' ? 'bg-primary text-secondary hover:bg-secondary hover:text-primary' : 'bg-secondary text-primary hover:bg-primary hover:text-secondary'}  text-normal font-bold shadow-md ${className}`}>
          {children}
        </Link>
      ) : null}
    </>
  )
}

export default CustomButton
