export const Card = ({ author, title, url, desc }) => {
    const handleClick = (url) => {
        return window.open(url)
    }
    return (
        <div className="shadow-md mt-3 mb-3 cursor-pointer" onClick={() => handleClick(url)}>
            <div className="p-3">
                <h1 className="font-bold text-md  ">{author}</h1>
                <h2 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{title}</h2>
                <p className="font-sans text-base leading-relaxed break-words">{desc}</p>
            </div>

        </div>

    )
}