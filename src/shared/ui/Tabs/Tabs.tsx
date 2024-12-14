import clsx from 'clsx'

import s from './Tabs.module.scss'

type Props = {
  className?: string
  onOptionChange: (option: string) => void
  options: string[]
  selected?: string
}

export const Tabs = ({ className, onOptionChange, options, selected }: Props) => {
  return (
    <div className={s.tabs}>
      {options.map(option => {
        const onClick = () => {
          onOptionChange(option)
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
