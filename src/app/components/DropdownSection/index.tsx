import DropdownList, { DropdownItem } from "../DropdownList";
import WhiteSection from "../WhiteSection";
import './styles.css';

interface DropdownSectionProps {
    title: string;
    list: DropdownItem[];
    id?: string;
}

export default function DropdownSection({ title, list, id }: DropdownSectionProps) {
    return (
        <WhiteSection id={id} color="#F1F1F1" className="dropdown-section">
            <h3>{title}</h3>
            <DropdownList items={list} />
        </WhiteSection>
    );
}