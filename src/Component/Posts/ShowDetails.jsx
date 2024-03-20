import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
    const detil = useLoaderData();
    console.log(detil);
    const {body, id}= detil;
    return (
        <div className="w-96 bg-pink-500">
            <h1>{id}</h1>
            <h1>{body}</h1>
        </div>
    );
};

export default ShowDetails;