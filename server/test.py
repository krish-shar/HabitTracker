import pymongo
uri = "mongodb+srv://1:1@cluster0.1mtdyxs.mongodb.net/?retryWrites=true&w=majority"



# Create a new client and connect to the server


# Send a ping to confirm a successful connection
try:
    client = pymongo.MongoClient(uri)
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print("Unable to connect to the server.")
    print(e)
