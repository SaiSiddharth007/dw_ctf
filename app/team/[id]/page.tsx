'use client'

import { use } from 'react'
import Link from 'next/link'
import { BinaryRain } from '@/components/binary-rain'
import { TeamInfographic } from '@/components/team-infographic'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function TeamPage({ params }: PageProps) {
  const { id } = use(params)

  const teamsData: Record<string, any> = {
    milworms: {
      rank: 1,
      teamName: 'milworms',
      university: 'KPI',
      points: 3506.0,
      ratingPoints: 44.22,
      ctfTimeUrl: 'https://ctftime.org/team/287651',
      totalTeams: 382,
    },
    ehax: {
      rank: 2,
      teamName: 'EHAX',
      university: 'Delhi Technological University',
      points: 3506.0,
      ratingPoints: 33.165,
      ctfTimeUrl: 'https://ctftime.org/team/270643',
      totalTeams: 382,
    },
    '814ckm4n': {
      rank: 3,
      teamName: '814ckm4n_790',
      university: '',
      points: 3506.0,
      ratingPoints: 29.48,
      ctfTimeUrl: 'https://ctftime.org/team/426849',
      totalTeams: 382,
    },
  }

  const team = teamsData[id]

  if (!team) {
    return (
      <main className="relative min-h-screen bg-background overflow-hidden">
        <BinaryRain />
        <div className="content-wrapper">
          <div className="container mx-auto px-4 py-20 max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Team Not Found</h1>
            <p className="text-muted-foreground mb-8">The team you're looking for doesn't exist.</p>
            <Link href="/">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Back to Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Binary Rain Background */}
      <BinaryRain />

      {/* Content */}
      <div className="content-wrapper">
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
          {/* Back Button */}
          <Link href="/" className="inline-block mb-8">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Leaderboard
            </Button>
          </Link>

          {/* Team Infographic */}
          <TeamInfographic
            rank={team.rank}
            teamName={team.teamName}
            university={team.university}
            points={team.points}
            ratingPoints={team.ratingPoints}
            ctfTimeUrl={team.ctfTimeUrl}
            totalTeams={team.totalTeams}
          />

          {/* Footer */}
          <div className="mt-20 pt-12 border-t border-accent/20 text-center">
            <p className="text-muted-foreground font-mono text-sm">
              {'// CryptoNite CTF 2026 - Celebrating Excellence in Cybersecurity'}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
