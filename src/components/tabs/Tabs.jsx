import { useState } from "react";

const Tabs = () => {

    const [tabId, setTabId] = useState(1);

    return (
        <div className="w-[600px] bg-red-400 mx-auto p-4 mt-52">

            <div
                className="mt-4 mx-auto bg-gray-100 flex items-center text-center"
            >
                <div
                    className={`p-2 w-[200px] border border-black border-r-0 cursor-pointer ${tabId === 1 ? 'bg-gray-300' : ''}`}
                    onClick={() => setTabId(1)}
                >
                    HTML
                </div>

                <div
                    className={`p-2 w-[200px] border border-black cursor-pointer ${tabId === 2 ? 'bg-gray-300' : ''}`}
                    onClick={() => setTabId(2)}
                >
                    CSS
                </div>

                <div
                    className={`p-2 w-[200px] border border-black border-l-0 cursor-pointer ${tabId === 3 ? 'bg-gray-300' : ''}`}
                    onClick={() => setTabId(3)}
                >
                    JS
                </div>
            </div>

            <div className="tabContent bg-slate-300 p-2">

                <div className={`py-2 space-y-2 ${tabId === 1 ? 'block' : 'hidden'}`}>
                    <h2 className="text-xl font-semibold">Content: HTML</h2>
                    <div className="flex gap-2">
                        <p>HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>

                        <img
                            alt="html"
                            className="size-36"
                            src="https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png?f=webp"
                        />
                    </div>
                </div>

                <div className={`py-2 space-y-2 ${tabId === 2 ? 'block' : 'hidden'}`}>
                    <h2 className="text-xl font-semibold">Content: CSS</h2>
                    <div className="flex gap-2">
                        <p>Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. </p>

                        <img
                            alt="css"
                            className="size-36"
                            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png"
                        />
                    </div>
                </div>

                <div className={`py-2 space-y-2  ${tabId === 3 ? 'block' : 'hidden'}`}>
                    <h2 className="text-xl font-semibold">Content: JS</h2>
                    <div className="flex gap-2">
                        <p>JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>

                        <img
                            alt="js"
                            src="https://assets-global.website-files.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg"
                            className="size-36"
                        />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tabs