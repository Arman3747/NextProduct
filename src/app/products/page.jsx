import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Products() {

    // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
    const data = await res.json();

    return (
        <div className="my-8">
            <h1 className="my-8 text-5xl">All Products Page</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.map((product) => (
                    <div key={product._id} className="card bg-base-100 shadow-sm">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="max-w-2xs">{product.description}</p>

                            {/* <p className="text-gray-500 text-sm">
                                <span className="font-medium">Category:</span> {product.category}
                            </p>
                            <p className="text-gray-500 text-sm">
                                <span className="font-medium">Brand:</span> {product.brand}
                            </p> */}
                            <p className="font-bold mt-2">Price: ${product.price}</p>
                            {/* <p className="text-gray-700 text-sm">In stock: {product.quantity}</p> */}

                            <div className="card-actions">
                                <Link href={`/products/${product._id}`}>
                                    <button className="btn btn-primary">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}