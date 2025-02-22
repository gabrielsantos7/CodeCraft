import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api';
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react';

interface StatsProps {
  subscriberId: string;
}

export async function Stats({ subscriberId }: StatsProps) {
  const {
    data: { count: accessCount },
  } = await getSubscriberInviteClicks(subscriberId);
  const {
    data: { count: inviteCount },
  } = await getSubscriberInviteCount(subscriberId);
  const {
    data: { position: rankingPosition },
  } = await getSubscriberRankingPosition(subscriberId);

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex items-center justify-center flex-col gap-1 rounded-xl">
        <span className="font-heading text-gray-200 font-semibold text-2xl leading-none">
          {accessCount ?? '-'}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>
        <MousePointerClick className="metric-icon" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex items-center justify-center flex-col gap-1 rounded-xl">
        <span className="font-heading text-gray-200 font-semibold text-2xl leading-none">
          {inviteCount ?? '-'}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>
        <BadgeCheck className="metric-icon" />
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex items-center justify-center flex-col gap-1 rounded-xl">
        <span className="font-heading text-gray-200 font-semibold text-2xl leading-none">
          {rankingPosition ? <>{rankingPosition}&ordm;</> : '-'}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>
        <Medal className="metric-icon" />
      </div>
    </div>
  );
}
