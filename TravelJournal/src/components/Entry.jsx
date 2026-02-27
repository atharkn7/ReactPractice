import marker from '../assets/marker.png'

export default function Entry(props) {
    return (
        <main>
            <article>
                <div className="main-image-container">
                    <img src={props.entry.img.src} alt={props.entry.img.alt} />
                </div>
                <div className='entry'>
                    <div className='entry-location'>
                        <img src={marker} alt="Marker Logo" />
                        <span>{props.entry.country}</span>
                        <a href={props.entry.googleMapsLink}>View of Google Maps</a>
                    </div>
                    <h1>{props.entry.title}</h1>
                    <p className='date'>{props.entry.dates}</p>
                    <p className='text'>{props.entry.text}</p>
                </div>
            </article>

        </main>
    )
}