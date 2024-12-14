import clsx from 'clsx'

import s from './Tabs.module.scss'

type Props = {
  onOptionClick: (option: string) => void
  options: string[]
  selected?: string
}

export const Tabs = ({ onOptionClick, options, selected }: Props) => {
  return (
    <div className={s.tabs}>
      {options.map(option => {
        const onClick = () => {
          onOptionClick(option)
        }

        return (
          <div
            className={clsx(s.option, selected === option && s.selected)}
            key={option}
            onClick={onClick}
          >
            {option}
          </div>
        )
      })}
    </div>
  )
}
