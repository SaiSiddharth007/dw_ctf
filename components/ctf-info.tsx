import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Calendar, Users, Zap } from 'lucide-react'

export function CTFInfo() {
  return (
    <Card className="border-2 border-accent/30 bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm p-8 md:p-10 mb-12">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Code2 className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">CryptoNite CTF 2026</h2>
          </div>
          <p className="text-muted-foreground font-mono text-sm">
            The ultimate cybersecurity proving ground
          </p>
        </div>

        {/* Event Details Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-accent/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-sm font-mono text-muted-foreground">EVENT DATE</span>
            </div>
            <p className="text-lg font-bold text-foreground">
              Mar 6-7, 2026
            </p>
          </div>

          <div className="border border-accent/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-mono text-muted-foreground">FORMAT</span>
            </div>
            <p className="text-lg font-bold text-foreground">
              Jeopardy Style
            </p>
          </div>

          <div className="border border-accent/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm font-mono text-muted-foreground">DIFFICULTY</span>
            </div>
            <p className="text-lg font-bold text-foreground">
              Easy-Medium
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="border-l-2 border-accent/50 pl-4 py-2">
          <p className="text-foreground leading-relaxed">
            A 30-hour Jeopardy-style CTF event hosted by <span className="text-accent font-bold">Digital Wizards</span> — 
            the coding club of <span className="text-accent font-bold">IIT Tirupati</span>. This premier competition challenges 
            participants across cryptography, forensics, OSINT, reverse engineering, and more, designed for beginner to 
            intermediate level security enthusiasts.
          </p>
        </div>

        {/* Categories */}
        <div>
          <p className="text-sm font-mono text-muted-foreground mb-3">CHALLENGE CATEGORIES</p>
          <div className="flex flex-wrap gap-2">
            {['Cryptography', 'Forensics', 'OSINT', 'Reverse Engineering', 'Web Exploitation'].map((category) => (
              <Badge
                key={category}
                className="bg-accent/20 text-accent border border-accent/50 hover:bg-accent/30 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
