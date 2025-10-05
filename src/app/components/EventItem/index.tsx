import './styles.css';

interface EventItemProps {
    day: string;
    month: string;
    title: string;
    time: string;
    location: string;
    imageUrl: string;
    subscriptionDate?: string;
    link: string;
}

export default function EventItem({ day, month, title, time, location, imageUrl, subscriptionDate, link }: EventItemProps) {
    return (
        <div className="event-item">
            <div className="event-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="event-date">
                <span className='event-day'>{day}</span>
                <span className='event-month'>{month}</span>
            </div>
            <div className="event-info">
                <h4>{title}</h4>
                <div>{time}</div>
                <div>{location}</div>
                {subscriptionDate && <div>Inscrição até: {subscriptionDate}</div>}
            </div>
            <div className='event-button'>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="black-button">Visualizar</button>
                </a>
            </div>
        </div>
    )
}