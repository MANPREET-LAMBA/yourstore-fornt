import { useNavigate } from "react-router-dom"

export function Card({ image, title, url }) {
    const navigate = useNavigate();
    const navigateHandler = (url) => {
        navigate(url)
    }


    return (
        <div className="w-auto h-auto " onClick={() => { navigateHandler(url) }}>
            <div className="w-40 h-64 text-firstWhite/85 rounded-md md:hover:scale-110 duration-100 bg-slate-600/40 ">
                <div><img className="w-30 h-50 rounded-t-md" src={image} alt=""></img></div>
                <div className="text-center font-mono font-semibold text-xl pt-1  "><h1>{title}</h1></div>

            </div>
        </div>
    )
}