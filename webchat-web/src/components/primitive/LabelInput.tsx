type LabelInputProps = {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = ({ label, placeholder, value, onChange }: LabelInputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="input" className="text-sm font-medium text-on-background/70">
                {label}
            </label>
            <input
                id="input"
                type="text"
                className="px-3 py-2 border border-on-background/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default LabelInput;