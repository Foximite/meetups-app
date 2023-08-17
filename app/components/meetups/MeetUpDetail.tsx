import React, { Fragment } from "react";
import classes from './MeetUpDetail.module.css'

interface MeetupDetails{
    id: string
    image: string
    title: string
    address: string
    description: string
}

export default function MeetupDetail(props: MeetupDetails){
 return (
   <section className={classes.detail}>
      <img src={props.image} alt={props.title}/>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
   </section>
 )
}