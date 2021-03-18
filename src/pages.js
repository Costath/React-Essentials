import React from "react"
import { Link, useLocation } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link><br/>
                <Link to="events">Events</Link><br/>
                <Link to="contact">Contact</Link><br/>
            </nav>
        </div>
    )
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    )
}

export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    )
}

export function Whoops404() {
    let location = useLocation();
    return (
        <div>
            <h1>The page '{location.pathname}' does not exist!</h1>
        </div>
    );
}