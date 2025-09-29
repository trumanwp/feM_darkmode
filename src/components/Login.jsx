// src/Login.jsx
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate(); // <-- get the navigate function



    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in:", userCredential.user);
            alert(`Logged in as ${userCredential.user.email}`);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Registered:", userCredential.user);
            alert(`Registered as ${userCredential.user.email}`);
            navigate("/dashboard"); // redirect after signup
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="loginPage flex flex-col items-center justify-center mt-50">
            <form className="loginForm flex flex-col items-center gap-4" onSubmit={handleLogin}>
                <input
                    className="border-2 border-white rounded-xl p-4"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border-2 border-white rounded-xl p-4"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="border-2 border-white rounded-xl p-2 h-12 w-40 active:h-10 active:w-38 text-blue-600">Login</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
            <button type="button" className="border-2 border-white rounded-xl p-2 mt-2 h-12 w-40 active:h-10 active:w-38 text-red-900" onClick={handleRegister}>Register</button>
        </div>
    );
}
