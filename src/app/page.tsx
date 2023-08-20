'use client'

import { Button } from '@mui/material'
import { good } from '@/app/actions'

export default function Home() {
  const handleOnClick = async () => {
    await good()
  }
  return (
    <main>
      good
      <Button onClick={handleOnClick}>good</Button>
    </main>
  )
}
