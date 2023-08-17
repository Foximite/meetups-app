import './globals.css'
import type { Metadata } from 'next'
import MainNavigation from './components/layout/MainNavigation'
import classes from './components/layout/Layout.module.css'

export const metadata: Metadata = {
  title: 'Meetups',
  description: 'Browse a huge list of highly frequented meetup places',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
        </body>
    </html>
  )
}
