import React from "react";

function NewsPost({
    title = "Title",
    description = "Description",
    author = "Author",
    noOfComments = 0,
    noOfPoints = 0,
    postDate = "Date",
    postImage = "assets/images/news-post-bg.jpg",
    postUrl = "",
    hideDesc = false,
}) {
    const handlePostUrl = () => {
        if (postUrl !== "") {
            window.open(postUrl, "_blank");
        }
    };

    return (
        <div className="w-full md:w-1/2 lg:w-1/4 p-3 cursor-pointer" onClick={handlePostUrl}>
            <div className="rounded-lg border shadow-md hover:shadow-lg">
                <div className="relative overflow-y-hidden" style={{ minHeight: "210px", maxHeight: "210px" }}>
                    <img
                        src={postImage}
                        onError={(ev) => {
                            ev.target.src = "assets/images/news-post-bg.jpg";
                        }}
                        className="rounded-tl-lg rounded-tr-lg"
                        style={{ minHeight: "210px" }}
                    />
                    <span className="absolute top-2 bg-green-400 text-white py-1 px-2 text-xs rounded-tr-sm rounded-br-md">
                        {noOfPoints} Points
                    </span>
                </div>
                <div className="p-5 rounded-bl-lg rounded-br-lg bg-white">
                    <div className="flex justify-between">
                        <span className="text-xs text-red-400 font-bold">{postDate.replace("T", " ").substr(0, postDate.length - 5)}</span>
                        <span className="text-xs text-gray-600 font-semibold">{noOfComments} Comments</span>
                    </div>
                    <h1 className="mt-1 text-sm text-right text-gray-800 font-medium">{author}</h1>
                    <h1 className="mt-2 text-black font-bold">{title}</h1>
                    {!hideDesc && (
                        <p className="text-gray-500 text-sm mt-3">
                            {description.length < 150 ? description : description.substr(0, 150) + "..."}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewsPost;