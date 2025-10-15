type LabelInputProps = {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    inputType?: string;
}

const LabelInput = ({ label, placeholder, value, onChange, className, inputType }: LabelInputProps) => {
    return (
        <div className={`flex flex-col gap-sm ${className}`}>
            <label htmlFor="input" className="text-caption text-input-label">
                {label}
            </label>
            <input
                id="input"
                type={inputType}
                className="text-caption px-3 py-2 border-3 border-input-border rounded-md focus:outline-none focus:border-3 focus:border-primary placeholder:text-input-placeholder"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default LabelInput;