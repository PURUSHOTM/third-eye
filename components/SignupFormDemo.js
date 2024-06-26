// src/components/SignupFormDemo.js

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Import Firestore
import Link from "next/link";

export function SignupFormDemo() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        const db = getFirestore(app); // Initialize Firestore
        const { firstname, lastname, email, password, confirmpassword } = formData;

        if (password !== confirmpassword) {
            console.error("Passwords do not match");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store user information in Firestore
            await setDoc(doc(db, "users", user.uid), {
                firstname: firstname,
                lastname: lastname,
                email: email,
            });

            toast.success("Signed up successfully!");
            router.push("/");
        } catch (error) {
            console.error("Error signing up:", error);
            toast.error("Error signing up!");
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 justify-center text-center">
                Welcome
            </h2>


            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input
                            id="firstname"
                            placeholder="Tyler"
                            type="text"
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input
                            id="lastname"
                            placeholder="Durden"
                            type="text"
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="confirmpassword">Confirm password</Label>
                    <Input
                        id="confirmpassword"
                        placeholder="••••••••"
                        type="password"
                        value={formData.confirmpassword}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Sign up &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <Link className="flex flex-col space-y-4" href={"/auth/sign-in"}>
                    <span className="justify-center flex">If you already have an account</span>
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="button"
                    >
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Sign-in
                        </span>
                        <BottomGradient />
                    </button>
                </Link>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
