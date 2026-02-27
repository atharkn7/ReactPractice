import marker from '../assets/marker.png'

export default function Entry(props) {
    return (
        <main>
            <article>
                <div className="main-image-container">
                    <img src={props.img} alt={props.alt} />
                </div>
                <div className='entry'>
                    <div className='entry-location'>
                        <img src={marker} alt="Marker Logo" />
                        <span>{props.country}</span>
                        <a href={props.googleMapsLink}>View of Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <p className='date'>{props.dates}</p>
                    <p className='text'>{props.text}</p>
                </div>
            </article>

        </main>
    )
}