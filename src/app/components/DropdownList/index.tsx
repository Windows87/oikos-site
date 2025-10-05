import './styles.css';

export interface DropdownItem {
    label: string;
    content: string;
}

interface DropdownProps {
    items: DropdownItem[];
}

export default function DropdownList({ items }: DropdownProps) {
    return (
        <div className="dropdown-list">
            {items.map((item, index) => (
                <details key={index} className="dropdown-item">
                    <summary className="dropdown-label">
                        {item.label}
                        <span className="dropdown-arrow">▼</span>
                    </summary>
                    <div className="dropdown-content">
                        <p>{item.content}</p>
                    </div>
                </details>
            ))}
        </div>
    );
}