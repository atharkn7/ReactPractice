import marker from '../assets/marker.png'

export default function Entry() {
    return (
        <main>
            <article>
                <div className="main-image-container">
                    <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Place Image" />
                </div>
                <div className='entry'>
                    <div className='entry-location'>
                        <img src={marker} alt="Marker Logo" />
                        <span>JAPAN</span>
                        <a href="https://www.google.com/">View of Google Maps</a>
                    </div>
                    <h1>Mount Fuji</h1>
                    <p className='date'>12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className='text'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </article>

        </main>
    )
}