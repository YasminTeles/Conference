import { Server as NetServer } from "http"
import type { NextApiRequest } from "next"
import { Server as ServerIO } from "socket.io"

import { NextApiResponseServerIO } from "../../types"

export default function handler(
  request: NextApiRequest,
  response: NextApiResponseServerIO
) {

  if (!response.socket.server.io) {
    console.log("Socket is initializing...")

    const httpServer: NetServer = response.socket.server as any

    response.socket.server.io = new ServerIO(httpServer, {
      path: "/api/socket",
    })
  }

  response.end()
}
