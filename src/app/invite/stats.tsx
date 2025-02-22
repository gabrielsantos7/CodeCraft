import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export function Stats() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {[
        {
          metric: 'Acessos ao link',
          value: 1042,
          icon: <MousePointerClick className="metric-icon" />,
        },
        {
          metric: 'Inscrições feitas',
          value: 203,
          icon: <BadgeCheck className="metric-icon" />,
        },
        {
          metric: 'Posição no ranking',
          value: '3°',
          icon: <Medal className="metric-icon" />,
        },
      ].map(({ metric, value, icon }) => (
        <div
          key={metric}
          className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex items-center justify-center flex-col gap-1 rounded-xl"
        >
          <span className="font-heading text-gray-200 font-semibold text-2xl leading-none">
            {value}
          </span>
          <span className="text-sm text-gray-300 leading-none text-center">
            {metric}
          </span>

          {icon}
        </div>
      ))}
    </div>
  )
}
