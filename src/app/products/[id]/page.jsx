import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({ params }) {

    const id = params.id;

    // const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/items/${id}`);
    const data = await res.json();

    return (
        <div>
            <h1 className="text-5xl my-8">Product Detail Page</h1>
            <div>
                {data && <div className="card bg-base-100 shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{data.name}</h2>
                        <p className="max-w-2xs">{data.description}</p>
                        <p className="text-gray-500 text-sm">
                            <span className="font-medium">Category:</span> {data.category}
                        </p>
                        <p className="text-gray-500 text-sm">
                            <span className="font-medium">Brand:</span> {data.brand}
                        </p>
                        <p className="font-bold mt-2">Price: ${data.price}</p>
                        <p className="text-gray-700 text-sm">In stock: {data.quantity}</p>
                        <p className="text-gray-700 text-sm">Seller Email: {data.user_email}</p>

                        <div className="card-actions">
                            <Link href={`/products`}>
                                <button className="btn btn-primary">All Products Page</button>
                            </Link>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}