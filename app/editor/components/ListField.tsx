type ListFieldProps = {
  name: string,
  values: string[]
}

export const ListField: React.FC<ListFieldProps> = ({ name, values }) => {
    return (
        <div className='space-y-2'>
        <h3 className='text-lg font-bold'>{name}:</h3>
        <ul className='list-disc list-inside'>
            {values.map((value:any, index:any ) => (
                <li key={index}>{value}</li>
            ))}
        </ul>
        </div>
    );
};

export default ListField;