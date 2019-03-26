const handleComment =(req,res,db) =>{
     const {id}=req.params;
	const {comment}=req.body;

	db('users').returning('*').where('id','=',id).update({
		comment:comment,
	    commentedon:new Date()
	})
	.then(user => { console.log(user[0])
		res.json(user[0])})
    .catch(err => res.status(400).json('unable to joinn'))

}
module.exports = {
	handleComment : handleComment
}