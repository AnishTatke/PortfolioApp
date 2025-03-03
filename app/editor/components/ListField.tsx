import React, { useState, useEffect } from "react";
import { AddButton, DeletePoint } from "./FormButtons";
import { capitalize, removeUnderScores } from "@/lib/services";
import { IoTrash } from "react-icons/io5";

type ListFieldProps = {
    name: string,
    values: string[]
}

type ListFormFieldProps = {
    name: string,
    values: string[],
    handleChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
    isEditing?: boolean
}

export const ListField: React.FC<ListFieldProps> = ({ name, values }) => {
    return (
        <div className='space-y-2'>
            <h3 className='text-lg font-bold'>{name}:</h3>
            <ul className='list-disc list-inside'>
                {values.map((value: any, index: any) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
};

export const ListFieldSpanned: React.FC<ListFieldProps> = ({ name, values }) => {
    return (
        <div className='space-y-2'>
            <h3 className='text-lg font-bold'>{name}:</h3>
            <ul className='list-disc list-inside'>
                {values.map((value: any, index: any) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
};

export const ListFormField: React.FC<ListFormFieldProps> = ({ name, values, handleChange }) => {
    return (
        <div className='flex flex-row gap-10'>
            <p className='text-white mt-2'>{capitalize(removeUnderScores(name))}:</p>
            <>
                {values.map((value: any, index: any) => (
                    <input
                        type="text"
                        name={name}
                        value={value}
                        onChange={handleChange}
                        className="p-2 border-themeopacque border-[1px] bg-transparent text-white rounded" />
                ))}
            </>
        </div>
    );
}

export const ListFormFieldSpanned: React.FC<ListFormFieldProps> = ({ name, values, handleChange }) => {
    const [points, setPoints] = useState<string[]>(values);
    const [isEditingPoints, setIsEditingPoints] = useState<boolean>(false);
    const [newPoint, setNewPoint] = useState<string>('');

    useEffect(() => {
        if (points.length < 1){
            setPoints(['']);
        }
    }, [values]);

    const addPoint = () => {
        setPoints([...points, '']);
        setIsEditingPoints(true);
    }

    const delPoint = (index: number) => {
        setPoints(points.splice(index, 1));
    }

    const handlePointChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value, id } = e.target;
        const newPoints = [...points];
        newPoints[parseInt(id)] = value;
        setPoints(newPoints);
    }

    const handleNewPointChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPoint(e.target.value);
    }

    const handleOnBlur = () => {
        if (isEditingPoints && newPoint.trim() !== '') {
            setPoints([...points.slice(0, -1), newPoint]);    
        }
        setIsEditingPoints(false);
        setNewPoint('');
        handleChange?.({ target: { name: name, value: points } } as unknown as React.ChangeEvent<HTMLTextAreaElement>);
    }

    return (
        <div className='flex flex-col gap-2'>
            <p className='text-white mt-2'>{capitalize(removeUnderScores(name))}:</p>
            <>
                {points.map((value: any, index: any) => (
                    <div key={index} className='flex flex-row gap-2'>
                        <textarea
                            id={index.toString()}
                            name={name}
                            value={value}
                            onChange={handlePointChange}
                            onBlur={handleOnBlur}
                            className="w-[95%] ml-3 p-2 border-themeopacque border-[1px] bg-transparent text-white rounded" />
                        <DeletePoint del={delPoint} index={index} />
                    </div>
                ))}
            </>
            {isEditingPoints &&
                (<div className='flex flex-row gap-2'>
                    <textarea
                        id={points.length.toString()}
                        name={name}
                        value={newPoint}
                        onChange={handleNewPointChange}
                        onBlur={handleOnBlur}
                        className="w-[95%] ml-3 p-2 border-themeopacque border-[1px] bg-transparent text-white rounded" />
                    <DeletePoint del={delPoint} index={points.length} />
                </div>) 
            }
            <AddButton title={capitalize(name)} onClick={addPoint} />
        </div>
    );
}