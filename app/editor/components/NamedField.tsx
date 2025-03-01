type NamedFieldProps = {
    name: string,
    value: string
}

export const NamedField: React.FC<NamedFieldProps> = ({ name, value }) => {
    return (
        <div className='flex flex-row gap-2'>
            <p className='text-lg font-bold'>{name}:</p>
            <p className='text-lg'>{value}</p>
        </div>
    );
};

export default NamedField;