import WhiteSection from "../WhiteSection";
import './styles.css';

interface YoutubeVideoSectionProps {
    title: string;
    videoUrl: string;
    id?: string;
}

export default function YoutubeVideoSection({ title, videoUrl, id }: YoutubeVideoSectionProps) {
    return (
        <WhiteSection id={id} className="youtube-video-section">
            <h3>{title}</h3>
            <div className="video-container">
                <iframe
                    src={videoUrl}
                    title={title}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </WhiteSection>
    );
}