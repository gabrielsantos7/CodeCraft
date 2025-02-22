import Image from 'next/image'
import cooper from '../../assets/Medal-cooper.svg'
import gold from '../../assets/Medal-gold.svg'
import silver from '../../assets/Medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {[
          {
            name: 'Diego Fernandes',
            score: 1030,
            image: gold,
          },
          {
            name: 'Diego Brito',
            score: 1014,
            image: silver,
          },
          {
            name: 'Sarah Lima',
            score: 983,
            image: cooper,
          },
        ].map(({ name, score, image }, index) => (
          <div
            key={index}
            className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
          >
            <span className="text-sm text-gray-300 leading-none ">
              {index + 1}º | {name}
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              {score}
            </span>

            <Image
              src={image}
              alt=" medal cooper"
              className="absolute top-0 right-8"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
