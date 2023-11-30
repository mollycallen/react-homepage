import { useState, useEffect } from "react";

const RandomUser = () => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://randomuser.me/api/");
                if (!res.ok) {
                    throw new Error(`HTTP error status: ${res.status}`);
                }
                const jsonData = await res.json();
                setUserData(jsonData.results[0]);
                console.log(userData)
            } catch (error) {
                console.log("fetch error: ", error);
            }
        };
        fetchData();
    }, [userData]);

    return (
        <div className="container">
            <h2>Random User Data</h2>
            {userData && (
                <div className="d-flex flex-column g-2">
                    <div className="d-flex py-2 fs-3">{userData.name.title} {userData.name.first} {userData.name.last}</div>
                    <div className="d-flex align-items-center">
                        <img alt="user picture" style={{ width: "125px" }} className="img-thumbnail me-2" src={userData.picture.thumbnail}></img>
                        <div>
                            <div>Location: {userData.location.city}, {userData.location.state} {userData.location.country}</div>
                            <div>Cell: {userData.cell}</div>
                            <div>Phone: {userData.phone}</div>
                            <div>Email: {userData.email}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RandomUser;