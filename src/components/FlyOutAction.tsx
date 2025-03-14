import FlyOut from "../context/FlyOut"

export const FlyOutAction = () => {
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.List>
        <FlyOut.Item onClick={() => console.log("edit")}>Edit</FlyOut.Item>
        <FlyOut.Item onClick={() => console.log("delete")}>Delete</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  )
}
