import s from './AirlineImage.module.scss'

import { useAirlineImage } from './hooks'

type Props = {
  airline: string
}

export const AirlineImage = ({ airline }: Props) => {
  const imagePath = useAirlineImage(airline)

  return <img alt={airline} className={s.airlineImage} src={imagePath} />
}
