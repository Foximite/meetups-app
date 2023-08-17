import MeetupList from "./components/meetups/MeetupList"
import { MongoClient } from 'mongodb';

interface MeetupsData{
  id: string,
  title: string,
  image: string,
  address: string,
  description: string
}

export const revalidate = 1

export default async function HomePage() {

  const client = MongoClient.connect("mongodb+srv://shaquil999:puQ0pI4nBZw03s2H@cluster0.ooaxods.mongodb.net/meetups?retryWrites=true&w=majority");

  const db = (await client).db();

  const meetupsCollection = db.collection('meetups');

  const meetupData = await meetupsCollection.find().toArray();

  const meetups: MeetupsData[] = meetupData.map(meetup => ({
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
    description: meetup.description,
  }));

  (await client).close();
  return (
    <div>
      <h1>Home Page</h1>
      <MeetupList meetups={meetups} />
    </div>
  );
}