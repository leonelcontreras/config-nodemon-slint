import http from 'http'
import api from './api'
import dotenv from 'dotenv'
import path from 'path'
import { setupTranslate } from './providers'

dotenv.config()
const { API_PORT, TRANSLATE_DEFAULT_LOCALE } = process.env
const directory = path.join(__dirname, '../assets/locales')
setupTranslate(directory, TRANSLATE_DEFAULT_LOCALE)

const server = http.createServer(api())

server.listen(API_PORT, () => console.log(`Server running on ${API_PORT}`))
