import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.football-data.org/v4/',
    headers: {
        'X-Auth-Token': '4fe59ff90a504bd08c020acdaf9871aa',
        'X-Unfold-Lineups': 'true', 
        'X-Unfold-Goals': 'true',
        'Content-Type': 'application/json',
    },
})