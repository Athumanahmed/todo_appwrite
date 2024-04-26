import {Client, Account, Databases,ID} from 'appwrite'

const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('662b7bc5e5b5605e798a')

export const account = new Account(client)

// databases

export const databases = new Databases(client , '662b7dda7ca335ad09c8')