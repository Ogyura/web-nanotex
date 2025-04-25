"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface Atom {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export function AnimatedAtoms() {
  const [atoms, setAtoms] = useState<Atom[]>([])
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Update the atom colors to be more distinct between themes
  useEffect(() => {
    setMounted(true)

    // Create initial atoms
    const initialAtoms: Atom[] = []
    for (let i = 0; i < 15; i++) {
      initialAtoms.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 5,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: theme === "dark" ? "#3b82f6" : "#60a5fa",
      })
    }
    setAtoms(initialAtoms)

    // Animation loop
    const animateAtoms = () => {
      setAtoms((prevAtoms) =>
        prevAtoms.map((atom) => {
          let newX = atom.x + atom.speedX
          let newY = atom.y + atom.speedY

          // Bounce off walls
          if (newX <= 0 || newX >= window.innerWidth) {
            atom.speedX *= -1
            newX = atom.x + atom.speedX
          }

          if (newY <= 0 || newY >= window.innerHeight) {
            atom.speedY *= -1
            newY = atom.y + atom.speedY
          }

          return {
            ...atom,
            x: newX,
            y: newY,
            color: theme === "dark" ? "#3b82f6" : "#60a5fa",
          }
        }),
      )
    }

    const intervalId = setInterval(animateAtoms, 50)

    // Handle window resize
    const handleResize = () => {
      setAtoms((prevAtoms) =>
        prevAtoms.map((atom) => ({
          ...atom,
          x: Math.min(atom.x, window.innerWidth),
          y: Math.min(atom.y, window.innerHeight),
        })),
      )
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(intervalId)
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {atoms.map((atom) => (
        <div
          key={atom.id}
          className="absolute rounded-full opacity-30"
          style={{
            left: `${atom.x}px`,
            top: `${atom.y}px`,
            width: `${atom.size}px`,
            height: `${atom.size}px`,
            backgroundColor: atom.color,
            transition: "background-color 0.3s ease",
          }}
        />
      ))}
    </div>
  )
}
