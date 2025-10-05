import "./styles.css";


interface MainBackgroundTextProps {
    title: string;
    description: string;
    firstButtonText?: string;
    secondButtonText?: string;
    firstButtonLink?: string;
    secondButtonLink?: string;
}

export default function MainBackgroundText({ title, description, firstButtonText, secondButtonText, firstButtonLink, secondButtonLink }: Partial<MainBackgroundTextProps>) {
    return (
        <div className="main-background-text">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="buttons">
                {firstButtonLink && firstButtonText && (
                    <a href={firstButtonLink}><button>{firstButtonText}</button></a>
                )}
                {secondButtonLink && secondButtonText && (
                    <a href={secondButtonLink}><button className="transparent-button">{secondButtonText}</button></a>
                )}
            </div>
        </div>
    );
}