import Card from "../context/Card"
import { FlyOutAction } from "./FlyOutAction"

export const CardContact = ({
  title,
  description,
  onClick,
}: {
  title: string
  description: string
  onClick: () => void
}) => {
  const btnText = "Click me"
  return (
    <Card className="relative w-full h-full p-4 bg-red-900 rounded-lg shadow-lg">
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
      <Card.Button onClick={onClick} text={btnText}>
        {(text: string) => <span>{text}</span>}
      </Card.Button>
      <FlyOutAction />
    </Card>
  )
}
