import './styles.css';

interface WhiteSectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    color?: string;
}

export default function WhiteSection({ children, id, className, color }: WhiteSectionProps) {
    return (
        <section id={id} className={`white-section`} style={{ backgroundColor: color ? color : 'white' }}>
            <div className={`white-section-content ${className ? className : ''}`}>
                {children}
            </div>
        </section>
    );
}