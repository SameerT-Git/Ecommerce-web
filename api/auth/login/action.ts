"use server";

export type LoginState = {
    status: "idle" | "error" | "success";
    message?: string;
    fieldErrors?:{
        identifier?: string;
        password?: string;
    };
};

const PHONE_REGEX = /^(?:\+?977)?9\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function loginAction(
    _prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    //Read the values the user typed trim() means remove extra space from text
    const identifier = String(formData.get("identifier") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const rememberMe = formData.get("rememberMe") === "on";

    // validate. collect field errors instead of alert().
    const fieldErrors: LoginState["fieldErrors"] = {};
    if (!identifier) {
        fieldErrors.identifier = "Enter your phone number or email.";
    } else if (!PHONE_REGEX.test(identifier) && !EMAIL_REGEX.test(identifier)) {
        fieldErrors.identifier = "Enter a valid phone number or email."
    }

    if (!password) {
        fieldErrors.password = "Enter your password.";
    } else if (password.length < 6) {
        fieldErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(fieldErrors).length > 0){
        return { status: "error", message: "Please fix the errors below.", fieldErrors}
    }

    //Pretend to talk to a database / API.
    // Replace this wiht your real login (see step 7)
    await new Promise((resolve) => setTimeout(resolve, 900));

    if (password === "wrongpassword") {
        return { status: "error", message: "Invalid username or password."};
    }

    // Success: return a friendly message.
    return {
        status: "success",
        message: "Welcome back! You are now signed in."
    }
}

