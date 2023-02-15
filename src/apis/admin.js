import axios from 'axios'
import {ADMIN_API_PATH} from '../config'

export default axios.create({
    baseURL: ADMIN_API_PATH
})