"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'

export const dynamic = "force-dynamic";

export default function AddProduct() {

    const router = useRouter();
    const { data: session, status } = useSession();
    const user_email = session?.user?.email;

    // console.log(user_email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const category = form.category.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const payload = { name, description, category, brand, price, quantity, user_email }

        // console.log(payload);

        // const {} = process.env;

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const result = await res.json();

        // console.log(result);
        // {acknowledged: true, insertedId: '68aaf7c39e637bc94e29e097'}

        if (result.acknowledged && result.insertedId) {

            Swal.fire({
                title: "New product has been added successfully!",
                text: "Do you want to add more product ?",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#615fff",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push("/dashboard/addproduct");
                    form.reset();
                } else {
                    router.push("/products");
                }

            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Insert failed !",
                showConfirmButton: false,
                timer: 1500
            });
        }
        // form.reset();
    }

    return (
        <div>
            <h1 className="text-5xl font-bold my-8 text-center">Add New Product !</h1>

            <div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <div className="card-body">

                        <form onSubmit={handleSubmit} className="fieldset">

                            <label className="label">Product Name</label>
                            <input type="text" name="name" className="input" placeholder="Product Name" required />

                            <label className="label"> Description</label>
                            <textarea type="text" name="description" className="textarea h-24" placeholder="Description" required></textarea>

                            <label className="label">Category</label>
                            <input type="text" name="category" className="input" placeholder="Category" required />

                            <label className="label">Brand</label>
                            <input type="text" name="brand" className="input" placeholder="Brand" required />

                            <label className="label">Price</label>
                            <input type="text" name="price" className="input" placeholder="Price" required />

                            <label className="label">Quantity</label>
                            <input type="text" name="quantity" className="input" placeholder="Quantity" required />

                            <label className="label">User Email</label>
                            <input type="text" name="user_email" className="input" defaultValue={user_email} disabled />

                            <button type="submit" className="btn btn-primary mt-4">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}