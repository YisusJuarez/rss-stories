import { NavLink } from "react-router-dom"

export const HomeLink = ({ blogName, url, desc }) => {
    const link = "/view/" + url
    return (
        <NavLink to={"/view?url=" + url}>
            <div className="shadow-lg p-4 cursor-pointer">
                <h1 className="text-transparent text-2xl font-bold bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400">{blogName}</h1>
                <p className="text-xl text-gray-600">{desc}</p>
            </div>
        </NavLink>

    )
}