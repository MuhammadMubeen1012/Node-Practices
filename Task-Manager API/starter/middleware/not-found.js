//This file helps use to set custom responses for routes not found or for other. 
const notFound = (req,res) => res.status(404).send("Route doesn't exist")

module.exports = notFound