import { ThumbsUp, Users } from 'lucide-react'
import Count from './components/Count'

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />,
      value: 13,
      label: 'Years of Experience',
    },
    {
      icon: <ThumbsUp className="w-8 h-8 md:w-12 md:h-12 text-green-500" />,
      value: 1000,
      label: 'Satisfied Clients',
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-8 md:mt-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-4 ">{stat.icon}</div>
          <p className="text-3xl md:text-5xl font-bold">
            <Count start={0} end={stat.value} />
          </p>
          <p className="text-gray-500 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default StatsSection
