const handleSort = (req,res,db) => {
   db('users').returning('*').whereNotNull('commentedon').orderBy('commentedon', 'desc')
    .then(users => res.json(users))
      .catch(err => res.status(400).json('error'))
}
module.exports={
	handleSort:handleSort
}