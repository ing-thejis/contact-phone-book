import { createContext, PropsWithChildren, useContext } from "react"

interface CardContextI {
  className?: string
}

interface CardProps extends PropsWithChildren {
  className?: string
}

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void
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

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="" onClick={onClick}>
      {children}
    </button>
  )
}

Card.Title = Title
Card.Description = Description
Card.Button = Button

export default Card
