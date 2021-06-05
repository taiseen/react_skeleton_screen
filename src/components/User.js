import { useEffect, useState } from "react";
import SkeletonUser from '../skeleton/SkeletonUser';

const User = ({ theme }) => {

    const [user, setUser] = useState(null);

    let userName, photo, userEmail, phoneNumber;

    if (user) {
        const { name, phone, email, picture } = user[0];
        const { first, last, title } = name;
        const { large } = picture;

        userName = `${title} ${first} ${last}`;
        photo = large;
        userEmail = email;
        phoneNumber = phone;
        console.log(`Loading Compete...`);
    } else {
        console.log(`Can't Loading...`);
    }

    useEffect(() => {
        setTimeout(async () => {
            const url = 'https://randomuser.me/api/';
            const res = await fetch(url);
            const data = await res.json();
            setUser(data?.results);
        }, 5000);

    }, []);

    return (
        <div className="user">
            <h2>User Info</h2>

            {/* {!user && (<div>Loading... </div>)} */}
            {!user && <SkeletonUser theme={theme} />}

            <div className="userInfo">
                <div>
                    <img src={photo} alt="" />
                </div>
                <div className="info">
                    <h3>{userName}</h3>
                    <h4>{phoneNumber}</h4>
                    <p>{userEmail}</p>
                </div>
            </div>
        </div>
    );
};

export default User;