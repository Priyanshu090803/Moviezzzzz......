export const LOGO="https://tse3.mm.bing.net/th?id=OIP.4k-jkIKgOmEI4iRSOUn0-QAAAA&pid=Api&P=0&h=180"
export const USER_IMG=  "https://imgs.search.brave.com/_1YhWGfJE_pbpg5x-rNvmWKanuf0TuNM8vjby3XCJhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLXFv/OWg4MjEzNHQ5bnYw/ajAuanBn"
export const BG_IMG='https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg'

export const API_OPTIONS =  {
method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: 'Bearer '+import.meta.env.VITE_TMDB_KEY
}
}

export const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500/"


export const SUPPORTED_LANGUAGES=[
    {indentifier:"english",name:"English"},
    {indentifier:"hindi",name:"Hindi"}
    
]

export const GEMINI_API_KEY=import.meta.env.VITE_GEMINI_API_KEY