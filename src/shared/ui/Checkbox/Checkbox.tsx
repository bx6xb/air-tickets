import { ChangeEvent } from 'react'

import s from './Checkbox.module.scss'

type Props = {
  checked: boolean
  label: string
  onCheckedChange: (checked: boolean) => void
}

export const Checkbox = ({ checked, label, onCheckedChange }: Props) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCheckedChange(e.currentTarget.checked)
  }

  return (
    <label className={s.checkbox}>
      <input checked={checked} className={s.input} onChange={onChange} type={'checkbox'} />
      {label}
    </label>
  )
}
