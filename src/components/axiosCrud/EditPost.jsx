import { useState } from "react";

const EditPost = ({ post, onEditPost }) => {

    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedPost = { id: post.id, title, body };
        onEditPost(updatedPost);

        // reset form
        setTitle("");
        setBody("");
    };

    return (
        <div className="my-3">

            <h2 className="font-bold my-2">Edit post</h2>

            <form onSubmit={handleSubmit} className="flex gap-2">

                <input
                    type="text"
                    value={title}
                    placeholder="Post title"
                    className="rounded-sm px-1 w-52"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    value={body}
                    placeholder="Post body"
                    className="rounded-sm px-1 w-80"
                    onChange={(e) => setBody(e.target.value)}
                />

                <input type="submit" className="bg-green-200 px-1 rounded-sm cursor-pointer" value="Submit Editing" />

            </form>
        </div>
    );
}

export default EditPost;