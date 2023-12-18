require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
app.listen(PORT,() => {
    console.log("server listing on",PORT)
})

app.get('/',(req,res) => {
    res.send("Hello world")
})

const gitData = {
    "login": "Vatsal-Jain",
    "id": 54972853,
    "node_id": "MDQ6VXNlcjU0OTcyODUz",
    "avatar_url": "https://avatars.githubusercontent.com/u/54972853?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Vatsal-Jain",
    "html_url": "https://github.com/Vatsal-Jain",
    "followers_url": "https://api.github.com/users/Vatsal-Jain/followers",
    "following_url": "https://api.github.com/users/Vatsal-Jain/following{/other_user}",
    "gists_url": "https://api.github.com/users/Vatsal-Jain/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Vatsal-Jain/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Vatsal-Jain/subscriptions",
    "organizations_url": "https://api.github.com/users/Vatsal-Jain/orgs",
    "repos_url": "https://api.github.com/users/Vatsal-Jain/repos",
    "events_url": "https://api.github.com/users/Vatsal-Jain/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Vatsal-Jain/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vatsal Jain",
    "company": null,
    "blog": "https://vatsaljain.co.in",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "vatsaljain000",
    "public_repos": 22,
    "public_gists": 0,
    "followers": 4,
    "following": 6,
    "created_at": "2019-09-06T05:00:29Z",
    "updated_at": "2023-12-12T12:46:36Z"
  }

app.get('/github',(req,res) => {
    res.json(gitData)
})


app.get('/twitter',(req,res) => {
    res.send("Hello Twiiter")
})