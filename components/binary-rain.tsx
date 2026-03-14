'use client'

import { useEffect, useState } from 'react'

export function BinaryRain() {
  const [chars, setChars] = useState<Array<{ id: number; char: string; left: number; delay: number }>>([])

  useEffect(() => {
    const binaryChars = ['0', '1']
    const newChars = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      char: binaryChars[Math.floor(Math.random() * 2)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setChars(newChars)
  }, [])

  return (
    <div className="binary-rain">
      {chars.map((char) => (
        <div
          key={char.id}
          className="binary-char"
          style={{
            left: `${char.left}%`,
            animationDelay: `${char.delay}s`,
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  )
}
