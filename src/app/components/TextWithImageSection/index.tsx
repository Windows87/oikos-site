/* eslint-disable @next/next/no-img-element */
import WhiteSection from '../WhiteSection';
import './styles.css';

interface TextWithImageProps {
    topTitle: string;
    title: string;
    text: string;
    imageSrc: string;
    id?: string;
    whiteText?: boolean;
    color?: string;
    firstButtonText?: string;
    secondButtonText?: string;
    firstButtonLink?: string;
    secondButtonLink?: string;
}

export default function TextWithImageSection({ topTitle, title, text, id, imageSrc, color, whiteText, firstButtonText, secondButtonText, firstButtonLink, secondButtonLink }: TextWithImageProps) {
    return (
        <WhiteSection id={id} className="text-with-image-section" color={color}>
            <span style={{ color: whiteText ? 'white' : 'black' }}>{topTitle}</span>
            <div className="content">
                <div className="image">
                    <img src={imageSrc} alt={title} />
                </div>
                <div className="text">
                    <h3 style={{ color: whiteText ? 'white' : 'black' }}>{title}</h3>
                    <p style={{ color: whiteText ? 'white' : 'inherit' }}>{text}</p>
                    <div className="buttons">
                        {firstButtonLink && firstButtonText && (
                            <a href={firstButtonLink}><button className={whiteText ? "" : "black-button"}>{firstButtonText}</button></a>
                        )}
                        {secondButtonLink && secondButtonText && (
                            <a href={secondButtonLink}><button className={whiteText ? "transparent-button" : "transparent-black-button"}>{secondButtonText}</button></a>
                        )}
                    </div>
                </div>
            </div>
        </WhiteSection>
    );
}