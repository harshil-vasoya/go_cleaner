"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type AnimateOnScrollProps = {
  children: React.ReactNode
  animation: "fade-in" | "slide-up" | "slide-in-right" | "slide-in-left" | "scale-in"
  delay?: number
  threshold?: number
  className?: string
}

export default function AnimateOnScroll({
  children,
  animation,
  delay = 0,
  threshold = 0.1,
  className,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Slightly before element enters viewport
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      className={cn(isVisible ? animation : "opacity-0", delay > 0 && `animation-delay-${delay}`, className)}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      {children}
    </div>
  )
}

