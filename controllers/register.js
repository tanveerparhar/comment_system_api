const handleRegister = (req,res,db) =>{
	if(req.body.username){
				
			    db('users').returning('*').insert({

			    	              name:req.body.username,
					              comment:"",
					              //commentedon:new Date(),
				                  joined:new Date()
				              })
			    .then(user => {
			    	res.json(user[0])
			    })
			    .catch(err => res.status(400).json('unable to register'))
			   // res.status(200).json();
			}
			else{
				res.status(400).json("enter valid name");
			}
}
module.exports = {
	handleRegister : handleRegister
}