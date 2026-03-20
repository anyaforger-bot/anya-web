import { execFileSync } from 'child_process'

export type Commit = { hash: string; message: string }

export function getCommits(): Commit[] {
  try {
    const raw = execFileSync(
      'git',
      ['log', '-5', '--pretty=format:%h|%s'],
      { cwd: process.cwd(), encoding: 'utf8' }
    ).trim()

    return raw
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const idx = line.indexOf('|')
        return {
          hash: line.slice(0, idx).trim(),
          message: line.slice(idx + 1).trim(),
        }
      })
  } catch {
    return []
  }
}
