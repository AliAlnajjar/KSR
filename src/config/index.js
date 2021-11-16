const dev = process.env.NODE_ENV !== 'production'

//TODO
//change the production url 
export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'
