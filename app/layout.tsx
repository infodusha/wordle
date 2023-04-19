import './globals.css'

export const metadata = {
  title: 'Wordle App',
  description: 'Trendy game',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
