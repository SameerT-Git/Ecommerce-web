"use client"
import Link from "next/link"

import { FormEvent, useState } from "react";

export default function ResgisterForm(){
    const [Username, setUsername] = useState("");
    const [ Phone, setPhone] = useState("");
    const [email, setemail] = useState("");
    const [checkbox, setcheckbox] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsLoading(true);

    }
}