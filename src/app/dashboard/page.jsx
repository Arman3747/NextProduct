import Link from "next/link";

export default function Dashboard() {
    return (
        <div>
            <h1 className="text-5xl my-8">
                Dashboard
            </h1>

            <Link href="/">
                <button className="btn btn-primary mb-2"> Home </button>
            </Link>

            <br />

            <Link href="/dashboard/addproduct">
                <button className="btn btn-primary"> Add New Product</button>
            </Link>
        </div>
    );
}