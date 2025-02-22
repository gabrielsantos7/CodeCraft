import { getRanking } from '@/http/api';
import Image from 'next/image';
import cooper from '../../../assets/Medal-cooper.svg';
import gold from '../../../assets/Medal-gold.svg';
import silver from '../../../assets/Medal-silver.svg';

export async function Ranking() {
  const {
    data: { ranking },
  } = await getRanking();
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((rank, index) => {
          const rankingPosition = index + 1;

          return (
            <div
              key={rank.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none ">
                {index + 1}º | {rank.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {rank.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={gold}
                  alt="gold medal"
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 2 && (
                <Image
                  src={silver}
                  alt="silver medal"
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 3 && (
                <Image
                  src={cooper}
                  alt="cooper medal"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          );
        })}

        {ranking.length === 0 && (
          <p className="text-gray-300">Nenhuma indicação registrada</p>
        )}
      </div>
    </div>
  );
}
