import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()
    const [userData,setUserData] = useState();

    const AboutPage = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
             setUserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            // navigate("/login", { replace: true });
        }
    }

    useEffect(() => {
        AboutPage();
    }, [])
    
    return (
        <div>
            about
        </div>
    )
}

export default About
