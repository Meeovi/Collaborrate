import { eventHandler } from 'h3'

// Return all session data to the frontend
export default eventHandler(event => event.context.session)