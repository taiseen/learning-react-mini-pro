import { useEffect, useState } from "react";
import EditPost from "./EditPost";
import AddPost from "./AddPost";
import Posts from "./Posts";
import api from "./api/api";

const AxiosCrud = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null); // post I am editing
    const [error, setError] = useState(null);

    const handleAddPost = async (newPost) => {
        try {
            const id = posts.length
                ? Number(posts[posts.length - 1].id) + 1
                : 1;

            const finalPost = { id: id.toString(), ...newPost };

            // 🌐🌐🌐 backend ==> user input -> data creation...
            const response = await api.post("/posts", finalPost);

            // 💻💻💻 frontend ==> ui sync with newly crated data...
            setPosts([...posts, response.data]);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDeletePost = async (postId) => {
        const id = postId;

        if (confirm("Are you sure you want to delete the post?")) {
            try {
                // 🌐🌐🌐 backend ==> Delete
                await api.delete(`/posts/${id}`);

                // 💻💻💻 frontend ==> Delete & update ui
                const newPosts = posts.filter((post) => post.id !== id);
                setPosts(newPosts);

            } catch (err) {
                setError(err.message);
            }
        } else {
            console.log("You chose not to delete the post!");
        }
    };

    const handleEditPost = async (updatedPost) => {
        try {
            // 🌐🌐🌐 backend ==> user input -> data edit...
            const response = await api.patch(`/posts/${updatedPost.id}`, updatedPost);

            // 💻💻💻 frontend ==> ui sync with edited data...
            const updatedPosts = posts.map((post) =>
                post.id === response.data.id ? response.data : post
            );

            setPosts(updatedPosts);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // 🌐🌐🌐 backend ==> data get/read process...
                const response = await api.get("/posts");

                if (response && response.data) {
                    // 💻💻💻 frontend ==> ui sync with get data...
                    setPosts(response.data);
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPosts(); // call function for fetch data from 🌐 backend...
    }, []);

    return (
        <div className="bg-gray-400 w-[900px] rounded mx-auto mt-2 p-4">
            <div>
                <h1 className="font-semibold text-center mb-4">API Request with Axios</h1>

                <hr />

                <div>
                    <Posts
                        posts={posts}
                        onEditClick={setPost}
                        onDeletePost={handleDeletePost}
                    />

                    <hr />

                    {
                        !post
                            ? <AddPost onAddPost={handleAddPost} />
                            : <EditPost post={post} onEditPost={handleEditPost} />
                    }

                    {
                        error && (
                            <>
                                <hr />
                                <div className="bg-red-500 rounded mt-4 text-center text-gray-800">{error}</div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AxiosCrud