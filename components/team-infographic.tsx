import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUpRight, Trophy, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

interface TeamInfographicProps {
  rank: number
  teamName: string
  university: string
  points: number
  ratingPoints: number
  ctfTimeUrl: string
  totalTeams: number
}

export function TeamInfographic({
  rank,
  teamName,
  university,
  points,
  ratingPoints,
  ctfTimeUrl,
  totalTeams,
}: TeamInfographicProps) {
  const medalColors = {
    1: { bg: 'from-yellow-500/20 to-yellow-600/20', border: 'border-yellow-500', text: 'text-yellow-400' },
    2: { bg: 'from-gray-400/20 to-gray-500/20', border: 'border-gray-400', text: 'text-gray-300' },
    3: { bg: 'from-orange-600/20 to-orange-700/20', border: 'border-orange-600', text: 'text-orange-400' },
  }

  const colors = medalColors[rank as keyof typeof medalColors] || {
    bg: 'from-accent/20 to-accent/10',
    border: 'border-accent',
    text: 'text-accent',
  }

  const percentile = ((totalTeams - rank) / totalTeams) * 100

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className={`relative overflow-hidden rounded-2xl border-2 ${colors.border} bg-gradient-to-br ${colors.bg} p-8 md:p-12`}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,127,0.2)_0%,transparent_100%)]" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <Trophy className={`w-12 h-12 ${colors.text}`} />
            <Badge className={`${colors.text} border ${colors.border} text-lg px-4 py-2 bg-transparent`}>
              RANK #{rank}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{teamName}</h1>
          {university && (
            <p className="text-lg text-muted-foreground font-mono">
              🏫 {university}
            </p>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Points Card */}
        <Card className="border-2 border-accent/50 bg-card hover:border-accent transition-all">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-mono text-muted-foreground">CTF POINTS</span>
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <div className="text-4xl font-bold text-accent font-mono">{points.toFixed(0)}</div>
            <div className="mt-4 pt-4 border-t border-accent/20">
              <p className="text-xs text-muted-foreground">Total points secured in competition</p>
            </div>
          </div>
        </Card>

        {/* Rating Points Card */}
        <Card className="border-2 border-accent/50 bg-card hover:border-accent transition-all">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-mono text-muted-foreground">RATING POINTS</span>
              <ArrowUpRight className="w-5 h-5 text-accent" />
            </div>
            <div className="text-4xl font-bold text-accent font-mono">{ratingPoints.toFixed(3)}</div>
            <div className="mt-4 pt-4 border-t border-accent/20">
              <p className="text-xs text-muted-foreground">CTFTime rating score earned</p>
            </div>
          </div>
        </Card>

        {/* Percentile Card */}
        <Card className="border-2 border-accent/50 bg-card hover:border-accent transition-all">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-mono text-muted-foreground">PERCENTILE</span>
              <Globe className="w-5 h-5 text-accent" />
            </div>
            <div className="text-4xl font-bold text-accent font-mono">{percentile.toFixed(1)}%</div>
            <div className="mt-4 pt-4 border-t border-accent/20">
              <p className="text-xs text-muted-foreground">Top {percentile.toFixed(1)}% of {totalTeams} teams</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Appreciation Message */}
      <Card className="border-2 border-accent bg-gradient-to-r from-accent/5 to-accent/10 p-8 md:p-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-accent">Congratulations! 🎯</h2>
          <p className="text-lg text-foreground leading-relaxed">
            {teamName} has demonstrated exceptional cybersecurity expertise and secured{' '}
            <span className="font-bold text-accent">position #{rank} out of {totalTeams} teams</span> in CryptoNite CTF 2026!
          </p>
          <p className="text-base text-muted-foreground">
            Your remarkable performance, strategic approach to challenges, and technical prowess have set you apart. 
            Thank you for representing the spirit of competitive cybersecurity and inspiring the community. 🚀
          </p>
        </div>
      </Card>

      {/* CTA Button */}
      <div className="flex gap-4 flex-col md:flex-row">
        <Button
          asChild
          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 font-bold"
        >
          <a href={ctfTimeUrl} target="_blank" rel="noopener noreferrer">
            View on CTFTime →
          </a>
        </Button>
        <Link href="/" className="flex-1">
          <Button
            variant="outline"
            className="w-full border-accent text-accent hover:bg-accent/10 text-lg py-6 font-bold"
          >
            Back to Leaderboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
