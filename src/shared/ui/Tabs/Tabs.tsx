import clsx from 'clsx'

import s from './Tabs.module.scss'

type Props = {
  className?: string
  onOptionClick: (option: string) => void
  options: string[]
  selected?: string
}

export const Tabs = ({ className, onOptionClick, options, selected }: Props) => {
  return (
    <div className={s.tabs}>
      {options.map(option => {
        const onClick = () => {
          onOptionClick(option)
        }

        return (
          <div
            className={clsx(s.option, selected === option && s.selected, className)}
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
