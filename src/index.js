import http from 'http'
import api from './api'

const server = http.createServer(api())

server.listen(3000, () => console.log('Server running on 3000'))
