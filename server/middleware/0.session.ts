import type { Session } from 'next-auth'
import { getServerSession } from '#auth'

declare module 'h3' {
  interface H3EventContext {
    session: Session
  }
}

export default eventHandler(async (event) => {
  const session = await getServerSession(event)

  event.context.session = session!
})
