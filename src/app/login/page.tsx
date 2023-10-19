'use client'
import { useState } from 'react';

const login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login on the client side
        console.log('Logging in with username:', username, 'and password:', password);
        // You can add your client-side login logic here.
    };

    return (
        <div className='bg-gray-100 flex items-center justify-center h-screen'>
            <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Login</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter your username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin} className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 rounded-full">Login</button>
            </div>
        </div>
    );
}

export default login;
