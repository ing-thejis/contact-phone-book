import { Ellipsis } from "lucide-react"
import React, { PropsWithChildren, useCallback, useMemo } from "react"
/**
 * FlyOut component
 * @param children
 * @returns function component
 * implements compound components pattern using context api
 */

interface FlyOutProps extends PropsWithChildren {}

interface FlyOutItemProps extends PropsWithChildren {
  onClick?: () => void
}

type FlyOutContextType = {
  open: boolean
  toogle: () => void
}

const FlyOutContext = React.createContext<FlyOutContextType | undefined>(
  undefined
)

export const useFlyOut = () => {
  const context = React.useContext(FlyOutContext)
  if (!context) {
    throw new Error("useFlyOut must be used within a FlyOutProvider")
  }
  return context
}

export const FlyOut: React.FC<FlyOutProps> & {
  Toggle: React.FC<PropsWithChildren>
  List: React.FC<PropsWithChildren>
  Item: React.FC<FlyOutItemProps>
} = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  // implement optimized toogle function and memoize it using useCallback+useMemo hooks to prevent re-render
  const toogle = useCallback(() => setOpen((prev) => !prev), [])
  const valueState = useMemo(() => ({ open, toogle }), [open])

  return (
    <FlyOutContext.Provider value={valueState}>
      {children}
    </FlyOutContext.Provider>
  )
}

const Toggle: React.FC = () => {
  const { toogle } = useFlyOut()
  return (
    <button
      onClick={toogle}
      className="absolute top-3 right-3 w-fit h-fit p-1 rounded-full bg-neutral-500 cursor-pointer"
    >
      <Ellipsis className="w-full text-white" />
    </button>
  )
}

const List: React.FC<PropsWithChildren> = ({ children }) => {
  const { open } = useFlyOut()
  return (
    open && (
      <ul className="absolute top-11 right-0 p-0 w-[150px] bg-white text-neutral-900 shadow rounded-2xl">
        {children}
      </ul>
    )
  )
}

const Item: React.FC<FlyOutItemProps> = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="p-3 cursor-pointer list-none hover:bg-neutral-600 hover:text-neutral-100 rounded-2xl"
    >
      {children}
    </li>
  )
}

FlyOut.Toggle = Toggle
FlyOut.List = List
FlyOut.Item = Item

export default FlyOut
