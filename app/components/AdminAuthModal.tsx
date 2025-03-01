"use client"
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useAuthStore } from "@/store/authStore";
import { useRouter } from 'next/navigation';

const AdminAuthModal: React.FC = () => {
    const router = useRouter();
    const { isOpen, closeModal, login } = useAuthStore();
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (password === 'admin123') {
            login();
            router.push('/editor');
        } else {
            alert('Incorrect password');
        }
    }

    return (
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        {/* Background overlay */}
            <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
            {/* Modal content */}
            <div className="bg-bboard p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold">Admin Login</h2>
                <input
                    type="password"
                    placeholder="Enter Admin Password"
                    className="w-full border p-2 rounded mt-4 bg-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="mt-4 flex justify-between">
                    <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={closeModal}>Cancel</button>
                    <button className="px-4 py-2 bg-themecolor text-white rounded" onClick={handleLogin}>Login</button>
                </div>
            </div>
            </div>
      </Dialog>
    );
}

export { AdminAuthModal };