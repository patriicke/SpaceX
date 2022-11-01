import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { calculateDate } from "../hooks";
import { api } from "./../api";
import Up from "./../assets/up.png";
const CommentComponent = () => {
    const [comments, setComments] = useState([]);
    const [count, setCount] = useState(50);
    const [prevCount, setPrevCount] = useState(0);
    const getComments = async () => {
        try {
            const request = await api.get("/comment");
            const respose = request.data;
            setComments(respose);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getComments();
    }, []);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [count, prevCount]);
    return (
        <div className="w-full">
            <div className="w-full flex flex-col p-2 min-h-[calc(100vh_-_3em)] bg-yellow-100  bg-opacity-20 gap-3">
                {comments
                    .sort((a, b) => b.time - a.time)
                    .slice(prevCount, count)
                    .map((comment) => {
                        return (
                            <div
                                className="min-h-10 break-words  flex gap-2 text-[0.9em] border-b-[1px] max-w-full"
                                key={comment.id}
                            >
                                <span className="w-8 p-1">
                                    <img src={Up} alt="up" className="w-full" />
                                </span>
                                <div className="w-4/5 flex flex-col gap-1 break-words">
                                    <div className="flex gap-2 font-medium">
                                        <span className="cursor-pointer hover:underline underline-offset-2">
                                            <a
                                                href={`https://news.ycombinator.com/user?id=${comment.by}`}
                                            >
                                                {comment.by}
                                            </a>
                                        </span>
                                        <span className="cursor-pointer hover:underline underline-offset-2">
                                            <a
                                                href={`https://news.ycombinator.com/item?id=${comment.id}`}
                                            >
                                                {calculateDate(comment.time)}{" "}
                                                ago
                                            </a>
                                        </span>
                                        |
                                        <span className="hover:underline underline-offset-2">
                                            <a
                                                href={`https://news.ycombinator.com/newcomments?next=${comment.parent}`}
                                            >
                                                parent
                                            </a>
                                        </span>
                                        |
                                        <span className="hover:underline underline-offset-2">
                                            <a
                                                href={`https://news.ycombinator.com/item?id=${comment.parent}#${comment.id}`}
                                            >
                                                context
                                            </a>
                                        </span>
                                        |
                                        <span className="hover:underline underline-offset-2">
                                            <a
                                                href={`https://news.ycombinator.com/newcomments?next=${comment.id}`}
                                            >
                                                next
                                            </a>
                                        </span>
                                        |
                                        {comment?.title && (
                                            <span>
                                                on:{" "}
                                                <a
                                                    className="hover:underline"
                                                    href={`https://news.ycombinator.com/item?id=${comment.id}`}
                                                >
                                                    {" "}
                                                    {comment?.title}
                                                </a>
                                            </span>
                                        )}
                                    </div>
                                    <div className="break-all">
                                        {comment.text}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                <div className="flex">
                    <button
                        className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        disabled={count <= 50}
                        onClick={() => {
                            setCount((cu) => cu - 50);
                            setPrevCount((cu) => cu - 50);
                        }}
                    >
                        <svg
                            aria-hidden="true"
                            className="mr-2 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        Previous
                    </button>
                    <button
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        disabled={count >= 500}
                        onClick={() => {
                            setCount((cu) => cu + 50);
                            setPrevCount((cu) => cu + 50);
                        }}
                    >
                        Next
                        <svg
                            aria-hidden="true"
                            className="ml-2 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="border-t-2 border-orange-500 h-[10em] w-full p-2 flex items-center justify-center flex-col">
                    <h1>Hacker News Clone </h1>
                    <a
                        href="https://github.com/patriicke/hacker-news-assessment"
                        className="text-blue-500"
                    >
                        @patriicke
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CommentComponent;
