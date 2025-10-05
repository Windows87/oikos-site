import WhiteSection from "../WhiteSection";
import './styles.css';

interface TextSectionProps {
    title: string;
    text: string;
    id?: string;
    textSize?: string;
    firstButtonText?: string;
    secondButtonText?: string;
    firstButtonLink?: string;
    secondButtonLink?: string;
}

export default function TextSection({ title, text, id, textSize, firstButtonText, secondButtonText, firstButtonLink, secondButtonLink }: TextSectionProps) {
    return (
        <WhiteSection id={id} className="text-section">
            <h3>{title}</h3>
            <p style={{ fontSize: textSize }}>{text}</p>
            <div className="buttons">
                {firstButtonLink && firstButtonText && (
                    <a href={firstButtonLink}><button className="black-button">{firstButtonText}</button></a>
                )}
                {secondButtonLink && secondButtonText && (
                    <a href={secondButtonLink}><button className="transparent-black-button">{secondButtonText}</button></a>
                )}
            </div>
        </WhiteSection>
    );
}