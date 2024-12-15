import { useTranslation } from 'react-i18next'

import { Checkbox } from '../../../../shared'

type Props = {
  callback: (value: any) => void
  checkboxData: any[]
  condition: (value: any) => boolean
}

export const CheckboxFilter = ({ callback, checkboxData, condition }: Props) => {
  const { t } = useTranslation()

  return (
    <>
      {checkboxData.map(({ label, value }) => (
        <Checkbox
          checked={condition(value)}
          key={value}
          label={t(label)}
          onCheckedChange={() => callback(value)}
        />
      ))}
    </>
  )
}
