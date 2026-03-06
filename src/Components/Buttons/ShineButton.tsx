import React from "react"

interface ShineButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

export const ShineButton = ({ text, onClick, className }: ShineButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`}
      relative
      overflow-hidden
      px-6 py-4
      rounded-full
      font-medium
      text-black
      bg-prim
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-2xl
      hover:text-white
      group
      ${className}
      `}
    >
      {/* 
      * El ángulo lo da el linear-gradient 120deg y el brillo el paso de transp -> blanco -> transp 
      * Inicialmente el brillo esta fuera de la pantalla (-translate-x-full) y al pasar el ratón se mueve a la derecha (translate-x-full)
      */}
      <span
        className="
        absolute
        inset-0
        -translate-x-full
        bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)] 
        transition-transform
        duration-700
        group-hover:translate-x-full
        "
      />

      <span className="relative z-10">
        {text}
      </span>
    </button>
  )
}