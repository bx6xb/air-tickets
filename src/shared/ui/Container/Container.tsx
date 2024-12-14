import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './Container.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Container = ({ className, ...rest }: Props) => {
  return <div className={clsx(s.container, className)} {...rest} />
}
