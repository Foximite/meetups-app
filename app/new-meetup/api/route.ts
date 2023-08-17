import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server'


export async function POST(request: Request, response: Response) {
    const data  = await request.json()

    const client = MongoClient.connect("mongodb+srv://shaquil999:puQ0pI4nBZw03s2H@cluster0.ooaxods.mongodb.net/meetups?retryWrites=true&w=majority");

    const db = (await client).db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    (await client).close();

    return NextResponse.json({message: 'Meetup inserted!'},{ status: 200 });
}
