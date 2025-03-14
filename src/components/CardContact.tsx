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
  return (
    <Card className="relative w-full h-full p-4 bg-red-500 rounded-lg shadow-lg">
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
      <Card.Button onClick={onClick}>action</Card.Button>
      <FlyOutAction />
    </Card>
  )
}
