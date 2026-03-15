'use client'

import { BinaryRain } from '@/components/binary-rain'
import { TeamCard } from '@/components/team-card'
import { CTFInfo } from '@/components/ctf-info'
import { Badge } from '@/components/ui/badge'
import { Command } from 'lucide-react'

export default function Home() {
  const teams = [
    {
      rank: 1,
      teamName: 'milworms',
      university: 'KPI',
      points: 3506.0,
      ratingPoints: 44.22,
      teamId: 'milworms',
      ctfTimeUrl: 'https://ctftime.org/team/287651',
    },
    {
      rank: 2,
      teamName: 'EHAX',
      university: 'Delhi Technological University',
      points: 3506.0,
      ratingPoints: 33.165,
      teamId: 'ehax',
      ctfTimeUrl: 'https://ctftime.org/team/270643',
    },
    {
      rank: 3,
      teamName: '814ckm4n_790',
      university: '',
      points: 3506.0,
      ratingPoints: 29.48,
      teamId: '814ckm4n',
      ctfTimeUrl: 'https://ctftime.org/team/426849',
    },
  ]

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Binary Rain Background */}
      <BinaryRain />

      {/* Content */}
      <div className="content-wrapper">
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Command className="w-8 h-8 text-accent animate-pulse" />
              <Badge className="bg-accent/20 text-accent border border-accent">
                CryptoNite CTF 2026
              </Badge>
              <Command className="w-8 h-8 text-accent animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-foreground drop-shadow-lg">
              TOP TEAMS
              <span className="block text-accent">G L O B A L</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
              {'> Celebrating the elite cybersecurity teams from CryptoNite CTF 2026'}
            </p>

            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </div>

          {/* CTF Info Section */}
          <CTFInfo />

          {/* Leaderboard Section */}
          <div className="space-y-8">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                🏆 Leaderboard
              </h2>
              <p className="text-muted-foreground font-mono">
                382 Teams Competed • Top 3 Teams Showcased
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {teams.map((team) => (
                <TeamCard
                  key={team.teamId}
                  rank={team.rank}
                  teamName={team.teamName}
                  university={team.university}
                  points={team.points}
                  ratingPoints={team.ratingPoints}
                  teamId={team.teamId}
                />
              ))}
            </div>
          </div> 
         
          <div className="mt-8 flex justify-center">
  <a
    href="https://ctftime.org/event/3185"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg border-2 border-accent hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 font-mono flex items-center gap-2"
  >
    <span>→ View CTF Event Profile</span>
  </a>
</div>

          {/* Footer Info */}
          <div className="mt-20 pt-12 border-t border-accent/20 text-center">
            <p className="text-muted-foreground font-mono text-sm">
              {'// Click on any team to view their complete profile and CTFTime ranking'}
            </p>
            <p className="text-muted-foreground font-mono text-sm mt-2">
              {'// Hosted by Digital Wizards, IIT Tirupati'}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
