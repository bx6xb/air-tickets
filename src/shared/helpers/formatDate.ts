export const formatDate = (date: string) => {
  const locale = 'ru-RU'

  const parts = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
    year: 'numeric',
  }).formatToParts(new Date(date))

  const day = parts.find(part => part.type === 'day')?.value!
  const dayOfWeek = parts.find(part => part.type === 'weekday')?.value!
  const month = parts.find(part => part.type === 'month')?.value!
  const year = parts.find(part => part.type === 'year')?.value!

  return `${day} ${month} ${year}, ${dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1)}`.replace(
    '.',
    ''
  )
}
