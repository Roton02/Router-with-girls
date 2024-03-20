import { Link } from "react-router-dom";

const SingleUsers = ({usersi}) => {
    console.log(usersi);
    const {name, id, email,phone} = usersi;
    return (
        <div className=" p-10 text-xl font-semibold bg-pink-600 space-y-2 rounded-xl">
            <h1> user id: {id} </h1>
            <h1> Name: {name} </h1>
            <h1> Email: {email} </h1>
            <h1> Phone: {phone} </h1>
             <Link to={`/users/${id}`} >   <button className= " rounded-lg bg-gray-300 px-2">Show more</button> </Link>
        </div>
    );
};

export default SingleUsers;