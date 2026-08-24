const readings = {
  Mateus: 'マテウス',
  Souza: 'ソウザ',
} as const

type Word = keyof typeof readings

export function Furigana({ word }: { word: Word }) {
  return (
    <ruby>
      {word}
      <rt className="text-[0.5em] font-normal">{readings[word]}</rt>
    </ruby>
  )
}
