import { redirect } from "react-router-dom";
import { deleteContact } from "../Contact";

export async function action({ params }) {
    const result = await deleteContact(params.contactId);
    if (!result) {
        throw new Error("oh dang!");
    }
    return redirect("/");
}