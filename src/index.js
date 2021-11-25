import http from 'http'
import api from './api'
import dotenv from 'dotenv'

dotenv.config()
const { API_PORT } = process.env

const server = http.createServer(api())

server.listen(API_PORT, () => console.log(`Server running on ${API_PORT}`))
