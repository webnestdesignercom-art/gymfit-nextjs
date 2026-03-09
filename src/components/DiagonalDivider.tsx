
export function DiagonalDivider({
  bgColor = 'bg-white',
  fillColor = 'text-gym-navy',
  position = 'bottom',
  flip = false,
}: {
  bgColor?: string
  fillColor?: string
  position?: 'top' | 'bottom'
  flip?: boolean
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${bgColor} ${position === 'top' ? 'rotate-180' : ''}`}
    >
      <svg
        className={`block w-full h-12 md:h-24 ${flip ? 'scale-x-[-1]' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48V0h1200v120z"
          className={`fill-current ${fillColor}`}
        />
      </svg>
    </div>
  )
}
