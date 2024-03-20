import { useLoaderData } from "react-router-dom";
import PostDetails from "./PostDetails";

const Post = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <div>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic voluptas quis maiores, recusandae assumenda earum fugit a numquam veritatis accusamus non cum voluptate eos debitis nesciunt. Sint consectetur sequi quo?</h1>
            <div className="grid grid-cols-3 gap-10 ">
            {
                data.map(d => <PostDetails key={d.id} data={d}></PostDetails>)
            }
            </div>
        </div>
    );
};

export default Post;