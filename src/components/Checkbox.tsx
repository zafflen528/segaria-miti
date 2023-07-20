import React from "react";

interface Props {
    label: string;
    value: boolean;
    onChange: React.ChangeEventHandler;
}

const Checkbox = ({ value, onChange, label }: Props) => {
    return (
        <div className="mb-1">
            <label>
                <input type="checkbox" checked={value} onChange={onChange} className='mr-2 h-4 w-4'/>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
