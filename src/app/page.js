import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  const data = await res.json();

  return (
    <div>
      <div className="hero my-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="https://i.ibb.co/sdL93MNj/nextproduct-herosection-image.png"
            width={512}
            height={512}
            className="max-w-sm rounded-lg"
            alt="Hero"
          />
          <div>
            <h1 className="text-5xl font-bold">NextProduct !</h1>
            <p className="py-6">
              NextProduct makes it easy for users to add products while allowing
              everyone to browse, view, and explore countless new items.
            </p>
            <Link href="/products">
              <button className="btn btn-primary">All Products</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h1 className="my-8 text-5xl font-medium">Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.slice(-6).map((product) => (
            <div key={product._id} className="card bg-base-100 shadow-sm">
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p className="max-w-2xs">{product.description}</p>

                {/* <p className="text-gray-500 text-sm">
                                <span className="font-medium">Category:</span> {product.category}
                            </p>
                            <p className="text-gray-500 text-sm">
                                <span className="font-medium">Brand:</span> {product.brand}
                            </p>
                            <p className="font-bold mt-2">Price: ${product.price}</p>
                            <p className="text-gray-700 text-sm">In stock: {product.quantity}</p> */}

                <div className="card-actions">
                  <Link href={`/products/${product._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 mb-8 flex justify-center items-center">
          <Link href="/products">
            <button className="btn btn-primary px-16">All Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
