import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { IoTrash } from "react-icons/io5";


export const AddButton: React.FC<{ title: string, onClick: any, isEditing?: boolean }> = ({ title, onClick, isEditing }) => {
    return (
        <div className='flex flex-row justify-end gap-4 mt-2'>
            <button 
                onClick={onClick}
                className='flex flex-row gap-2 items-center p-2 bg-themeopacque rounded'
                disabled={isEditing || false}
            >
                <IoMdAdd />
                <p>Add {title}</p>
            </button>
        </div>
    );
};

export const DeletePoint: React.FC<{ del: (index: number) => void, index: number }> = ({ del, index }) => {
    return (
        <button onClick={() => del(index)} className='text-white'><IoTrash /></button>
    );
}

export const DeleteButton: React.FC<{onClick: any}> = ({onClick}) => {
    return (
        <button onClick={onClick} className='flex flex-row gap-2 items-center px-2 bg-themeopacque rounded'>
            <IoTrash />
            <p>Delete</p>
        </button>
    );
}