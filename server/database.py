import pymongo

# uri db connection
uri = "mongodb+srv://1:1@cluster0.1mtdyxs.mongodb.net/?retryWrites=true&w=majority"


# Connect to MongoDB
def main():
    # Send a ping to confirm a successful connection
    try:
        client = pymongo.MongoClient(uri)
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)


if __name__ == '__main__':
    main()
