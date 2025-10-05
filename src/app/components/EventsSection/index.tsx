'use client';

import { useState, useEffect } from 'react';
import EventItem from "../EventItem";
import WhiteSection from "../WhiteSection";
import { fetchEventsFromGoogleSheets, type EventData } from '../../lib/googleSheets';
import './styles.css';

export default function EventsSection() {
    const [events, setEvents] = useState<EventData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                setLoading(true);
                const eventsData = await fetchEventsFromGoogleSheets();
                setEvents(eventsData);
                setError(null);
            } catch (err) {
                console.error('Erro ao buscar eventos do Google Sheets:', err);
                setError('Erro ao carregar Eventos');
            } finally {
                setLoading(false);
            }
        };

        loadEvents();
    }, []);

    if (loading) {
        return (
            <WhiteSection id="eventos-e-cursos" className="events-section" color="#F1F1F1">
                <h3>Eventos e Cursos</h3>
                <p className="events-description">Carregando eventos...</p>
            </WhiteSection>
        );
    }

    return (
        <WhiteSection id="eventos-e-cursos" className="events-section" color="#F1F1F1">
            <h3>Eventos e Cursos</h3>
            <p className="events-description">Veja o que você pode participar em nossa comunidade!</p>
            {error && (
                <p className="events-error" style={{ color: 'red', fontSize: '14px', marginBottom: '20px' }}>
                    {error} - Exibindo eventos padrão
                </p>
            )}
            <div className="events-list">
                {events.map((event, index) => (
                    <EventItem
                        key={index}
                        day={event.day}
                        month={event.month}
                        title={event.title}
                        time={event.time}
                        location={event.location}
                        imageUrl={event.imageUrl}
                        subscriptionDate={event.subscriptionDate}
                        link={event.link}
                    />
                ))}
            </div>
        </WhiteSection>
    );
}