import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import { GetUserData } from '../DataServices/DataServices';
import UserContext from '../UserContext/UserContext';

const HomePageComponent = () => {
    const [userInfo, setUserInfo] = useState({});
    const [newPerson, setNewPerson] = useState(true);

    let data = useContext(UserContext) // usecontext takes in the parameter of contect (usercontext) and were storing the values inside of data


    const navigate = useNavigate(); //Reacts-router-dom method for cahngeing url
    const handlePageChange = () => {
        navigate('./profile')
    }

    //everytime the component is re-rendered or a state is changed the useEffect hook fires.
    useEffect(() => {
        const getData = async () => {
            const fetchedData = await GetUserData();
            console.log(fetchedData)
            setUserInfo(fetchedData);

            // were passing in fecteddata through our setter function to set the value of user to our fetched data
            data.setUser(fetchedData)
        }

        getData();

    }, [newPerson])//dependancy array determines when the useEffect fires

    const handleNewPerson = () => {
        setNewPerson(!newPerson);
    }

    return (
        <div>
            <h1>Hello this is our home page</h1>

            {/* if left side is truthy the right is returned */}
            <h2>{userInfo.name && userInfo.name.title} {userInfo.name && userInfo.name.first} {userInfo.name && userInfo.name.last}</h2>
            <Button variant="secondary" onClick={handlePageChange}>Change to Profile Page</Button>{' '}
            <Button variant="warning" onClick={handleNewPerson}>Get New Person</Button>{' '}


        </div>
    )
}

export default HomePageComponent
