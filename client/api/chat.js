{
  "version": 2,
  "builds": [
    { "src": "client/api/**/*.js", "use": "@vercel/node" },
    { "src": "client/package.json", "use": "@vercel/next" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/client/api/chat.js" },
    { "src": "/(.*)", "dest": "/client/$1" }
  ]
}
