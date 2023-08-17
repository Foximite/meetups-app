'use client';
import React from "react"
import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useRouter } from "next/navigation";
import type { Metadata } from 'next'


interface MeetupData {
    title: string;
    image: string;
    address: string;
    description: string;
  }

    const router = useRouter();
export default function newMeetup(){
    
    async function addMeetupHandler(enteredMeetupData: MeetupData){
        const response = await fetch('new-meetup/api/',{
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        });


        const data = await response.json();

        console.log(data)
        router.push('/')
        
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}
