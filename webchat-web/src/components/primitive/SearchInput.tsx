import { Search } from "lucide-react";

type SearchInputProps = {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
}
const SearchInput = ({ placeholder, value, onChange, className }: SearchInputProps) => {
    return (
        <div className={`flex flex-row ${className} border-b-2 border-input-border focus-within:border-primary-hover py-sm`}>
            <input type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="w-full focus:outline-none text-caption"/>
            <Search size={20} />
        </div>
    );
}

export default SearchInput;