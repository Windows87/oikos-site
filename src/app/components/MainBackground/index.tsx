import MainBackgroundText from '../MainBackgroundText';
import TopMenu from '../TopMenu';
import './styles.css';

interface MainBackgroundProps {
    backgroundImage: string;
    title: string;
    description: string;
    firstButtonText?: string;
    secondButtonText?: string;
    firstButtonLink?: string;
    secondButtonLink?: string;
}

export default function MainBackground({ backgroundImage, title, description, firstButtonText, secondButtonText, firstButtonLink, secondButtonLink }: MainBackgroundProps) {
    return (
        <div className='main-background' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='overlay'>
                <TopMenu />
                <div className="text-container">
                <MainBackgroundText
                    title={title}
                    description={description}
                    firstButtonText={firstButtonText}
                    secondButtonText={secondButtonText}
                    firstButtonLink={firstButtonLink}
                    secondButtonLink={secondButtonLink}
                />
                </div>
            </div>
        </div>
    );
}