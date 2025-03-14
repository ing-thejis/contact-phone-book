import { createContext, PropsWithChildren, useContext } from "react"

interface CardContextI {
  className?: string
}

interface CardProps extends PropsWithChildren {
  className?: string
}

interface ButtonProps {
  onClick?: () => void
  text?: string
  children: (text: string) => React.ReactNode
}

const CardContext = createContext<CardContextI | null>(null)

export const useCard = () => {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error("useCard must be used within a CardProvider")
  }
  return context
}

export const Card: React.FC<CardProps> & {
  Title: React.FC<PropsWithChildren>
  Description: React.FC<PropsWithChildren>
  Button: React.FC<ButtonProps>
} = ({ children, className }) => {
  return (
    <CardContext.Provider value={{ className }}>
      <div className={className}>{children}</div>
    </CardContext.Provider>
  )
}

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <h3>{children}</h3>
}

const Description: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className="">{children}</p>
}

// implement render prop pattern using children prop as a function
const Button: React.FC<ButtonProps> = ({ children, text = "", onClick }) => {
  return (
    <button
      className="w-fit flex items-center justify-center px-3 py-1 border border-neutral-700 rounded-sm bg-blue-400"
      onClick={onClick}
    >
      {children(text)}
    </button>
  )
}

Card.Title = Title
Card.Description = Description
Card.Button = Button

export default Card
