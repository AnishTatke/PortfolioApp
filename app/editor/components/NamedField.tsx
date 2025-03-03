import { capitalize, removeUnderScores } from "@/lib/services";

type NamedFieldProps = {
    name: string,
    value: string
}

type NamedFormFieldProps = {
    name: string,
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const NamedField: React.FC<NamedFieldProps> = ({ name, value }) => {
    return (
        <div className='flex flex-row gap-2 mt-1'>
            <p className='text-lg font-bold'>{name}:</p>
            <p className='text-lg h-full'>{value}</p>
        </div>
    );
};

export const NamedFormField: React.FC<NamedFormFieldProps> = ({ name, value, handleChange }) => {
    return (
        <div className="flex flex-row gap-2">
            <p className='text-white mt-2'>{capitalize(removeUnderScores(name))}: </p>
            <input
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                className="w-fit min-w-96 p-2 border-themeopacque border-[1px] bg-transparent text-white rounded" />
        </div>
    )
}

export const NamedFormTextArea: React.FC<NamedFormFieldProps> = ({ name, value, handleChange }) => {
    return (
        <div className="flex flex-col gap-2 h-full">
            <p className='text-white mt-2'>{capitalize(removeUnderScores(name))}: </p>
            <textarea
                name={name}
                value={value}
                onChange={handleChange}
                className="w-full h-full p-2 border-themeopacque border-[1px] bg-transparent text-white rounded" />
        </div>
    )
}



