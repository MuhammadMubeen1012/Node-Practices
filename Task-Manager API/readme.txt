1. Set up and connect to cloud DB
2. Persist data to the cloud 
3. Applying CRUD operation to the data 

5 routes 
app.get('/api/v1/tasks')
app.get('/api/v1/tasks/:id')
app.post('/api/v1/tasks/:id')
app.delete('/api/v1/tasks/:id')
app.patch('/api/v1/tasks/:id')

v1 is defining version. For any future update you 
may write v2 and direct anyone to that routes

