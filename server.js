const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const register = require('./controllers/register');
const comment = require('./controllers/comment');
const sortRecent = require('./controllers/sortRecent')

const db=knex({
  client: 'pg',
  version: '7.2',
  connection: {
    connectionString : process.env.DATABASE_URL,
    ssl:true,
  }
});


                     
app.get('/', (req,res)=> {
	db.select('*').from('users')
    .then(users => res.json(users))
     
});

app.post('/register',(req,res)=> { register.handleRegister(req,res,db)
	});


app.post('/comment/:id',(req,res)=> {comment.handleComment(req,res,db)
// select('*').from('users')  
});


app.get('/sortRecent', (req,res)=> { sortRecent.handleSort(req,res,db)
});

app.listen(process.env.PORT || 3000,()=> {
	console.log(`app is running on port ${process.env.PORT}`);
});
