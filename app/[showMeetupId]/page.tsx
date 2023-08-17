import MeetupDetail from "../components/meetups/MeetUpDetail";
import { MongoClient, ObjectId } from "mongodb";

interface MeetupsData{
  _id: string,
  id: string,
  title: string,
  image: string,
  address: string,
  description: string
}

export default async function showMeetup({ params }: { params: { showMeetupId: string } }){

  const client = MongoClient.connect("mongodb+srv://shaquil999:puQ0pI4nBZw03s2H@cluster0.ooaxods.mongodb.net/meetups?retryWrites=true&w=majority");

  const db = (await client).db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetups = await meetupsCollection.findOne({_id: new ObjectId(params.showMeetupId)});

  return (
    <div>
      {selectedMeetups ? (
        <MeetupDetail
          id={selectedMeetups._id.toString()}
          image={selectedMeetups?.image}
          title={selectedMeetups?.title}
          address={selectedMeetups?.address}
          description={selectedMeetups?.description}
        />
      ) : (
        <p>Loading or not found...</p>
      )}
    </div>
  );

}