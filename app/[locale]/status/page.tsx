import { setRequestLocale } from 'next-intl/server'
import StarField from '@/components/StarField'
import Navbar from '@/components/Navbar'
import StatusDashboard from '@/components/StatusDashboard'
import { getCommits } from '@/lib/getCommits'

export default async function StatusPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const commits = getCommits()

  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarField />
      <Navbar />
      <StatusDashboard commits={commits} />
    </main>
  )
}
