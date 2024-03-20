import { useLoaderData } from "react-router-dom";
import SingleUsers from "./SingleUsers";

const Users = () => {
    const users = useLoaderData()
    // console.log(users);
    return (
        <div className="grid grid-cols-3 gap-10 ">
            {
                users.map( us => <SingleUsers key={us.id} usersi={us}></SingleUsers> )
            }
        </div>
    );
};

export default Users;