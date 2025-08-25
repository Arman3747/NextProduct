"use client";

import { useSession } from "next-auth/react";

export default function UserInfo() {

    const session = useSession();

    return (
        <div>
            user info : {JSON.stringify(session)}
        </div>
    );
}