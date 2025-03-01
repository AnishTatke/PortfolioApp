"use client";
import { motion } from 'framer-motion';
export const FormSubmitButton = () => {
    return (
        <motion.button
            type='submit'
            className='w-1/4 p-1 my-2 mx-auto bg-themecolor text-bboard text-xl font-semibold rounded-md'
            whileHover={{
                color: '#fb923c',
                backgroundColor: "#ac896830"
            }}
            whileTap={{
                color: '#fb923c',
                backgroundColor: "#ac896830",
                scale: 1.05
            }}
        >Submit</motion.button>
    );
};