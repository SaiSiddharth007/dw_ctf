import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy } from 'lucide-react'

interface TeamCardProps {
  rank: number
  teamName: string
  university: string
  points: number
  ratingPoints: number
  teamId: string
}

export function TeamCard({
  rank,
  teamName,
  university,
  points,
  ratingPoints,
  teamId,
}: TeamCardProps) {
  const medalColors = {
    1: 'border-yellow-500 bg-yellow-500/10',
    2: 'border-gray-400 bg-gray-400/10',
    3: 'border-orange-600 bg-orange-600/10',
  }

  const medalBgColor = medalColors[rank as keyof typeof medalColors] || 'border-accent bg-accent/10'

  return (
    <Link href={`/team/${teamId}`}>
      <Card
        className={`group relative overflow-hidden border-2 ${medalBgColor} cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:scale-105`}
      >
        {/* Glowing border effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/0 group-hover:from-accent/20 group-hover:to-accent/20 transition-all duration-300" />

        <div className="relative z-10 p-6">
          {/* Rank Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-accent" />
              <span className="text-3xl font-bold text-accent">#{rank}</span>
            </div>
            <Badge className="bg-accent text-accent-foreground text-lg px-3 py-1">
              RANK {rank}
            </Badge>
          </div>

          {/* Team Name */}
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
            {teamName}
          </h3>

          {/* University */}
          {university && (
            <p className="text-sm text-muted-foreground mb-4 font-mono">
              📍 {university}
            </p>
          )}

          {/* Stats */}
          <div className="space-y-3 border-t border-accent/30 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">CTF Points</span>
              <span className="text-lg font-bold text-accent font-mono">{points.toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Rating Points</span>
              <span className="text-lg font-bold text-accent font-mono">{ratingPoints.toFixed(3)}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 pt-4 border-t border-accent/30">
            <p className="text-sm text-accent group-hover:text-accent/80 transition-colors font-mono">
              VIEW PROFILE → 
            </p>
          </div>
        </div>

        {/* Subtle animated border */}
        <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-colors duration-300 rounded-lg" />
      </Card>
    </Link>
  )
}
