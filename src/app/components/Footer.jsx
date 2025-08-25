"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Footer() {

    const { data: session, status } = useSession();
    const user_email = session?.user?.email;


    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Pages</h6>
                    <Link className="link link-hover" href="/">Home</Link>
                    <Link className="link link-hover" href="/products">Products</Link>

                    {
                        user_email && <Link className="link link-hover" href="/dashboard">Dashboard</Link>
                    }

                </nav>
            </footer>
        </div>
    );
}