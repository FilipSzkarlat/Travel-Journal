import { HiMapPin } from "react-icons/hi2";

export default function Entry(props) {
    console.log(props)
    return (
        <div className="entry">
            <div className='image-container'>
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="entry--details">
                <HiMapPin />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                </a>
                <h2>{props.title}</h2>
                <p className="dates">{props.dates}</p>
                <p className="description">{props.text}</p>
            </div>
         </div>
    )
}