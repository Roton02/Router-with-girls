import { useLoaderData } from "react-router-dom";

const DetailsData = () => {
    const data = useLoaderData()
    // console.log(data);
    const { username, email, name, id, phone, website } = data
    return (
        <div className="w-96 bg-pink-500 text-xl font-semibold">
            <h1> {id} </h1>
            <h1> {name} </h1>
            <h1> {email} </h1>
            <h1> {phone} </h1>
            <h1> {username} </h1>
            <h1> {website} </h1>
            
        </div>
    );
};

export default DetailsData;