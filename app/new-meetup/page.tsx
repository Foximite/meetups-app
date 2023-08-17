'use client';
import React from "react"
import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useRouter } from "next/navigation";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Add new Meetup',
    description: 'Engage with your comunity'
  }

interface MeetupData {
    title: string;
    image: string;
    address: string;
    description: string;
  }


export default function newMeetup(){

    const router = useRouter();
    
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