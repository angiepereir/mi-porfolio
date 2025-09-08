import React from 'react'

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false)
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch {
          setCopied(false)
        }
      }}
      type="button"
      className="rounded-full px-5 py-2 text-sm font-medium text-white shadow transition 
                 bg-[var(--lav-700)] hover:bg-[var(--lav-900)]"
    >
      {copied ? '¡Copiado!' : 'Copiar email'}
    </button>
  )
}
