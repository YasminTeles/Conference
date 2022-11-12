import type { NextApiRequest } from "next"

import { NextApiResponseServerIO } from "../../types"

export default function handler(
  request: NextApiRequest,
  response: NextApiResponseServerIO
) {
  if (request.method === "POST") {
    const message = request.body

    response?.socket?.server?.io?.emit("message", message)

    response.status(201).json(message)
  }
}
