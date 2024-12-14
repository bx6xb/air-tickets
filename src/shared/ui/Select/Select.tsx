import { ChangeEvent, ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './Select.module.scss'

type Option = {
  label: string
  value: string
}

type Props = {
  onOptionChange: (option: string) => void
  options: Option[]
} & ComponentPropsWithoutRef<'select'>

export const Select = ({ className, onOptionChange, options, ...rest }: Props) => {
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onOptionChange(e.currentTarget.value)
  }

  const mappedOptions = options.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))

  return (
    <select onChange={onChange} {...rest} className={clsx(s.select, className)}>
      {mappedOptions}
    </select>
  )
}
