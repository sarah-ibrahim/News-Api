const request =require('request')
const myDate = new Date()
const day = myDate.getDate()
console.log(day)

const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-01-'+day+'&sortBy=publishedAt&apiKey=c98f9be9a2134c9fa580f36e7a9a07c6'

const express = require('express')
const app = express()
const port = 3000

//node src/app.js

const path = require ('path')
const publicDir = path.join(__dirname,'/public')
app.use(express.static(publicDir))


request({url,json:true},(error,response)=>{
    

app.set('view engine','hbs')
    app.get('/',(req,res)=>{
            res.render('index',{
                articles:response.body.articles,
                urlToImage:response.body.articles.urlToImage,
                 title:response.body.articles.title,
                 author:response.body.articles.author,
                 description:response.body.articles.description
            })
        })
    })

app.listen(port,()=>{
    console.log('good')
})
