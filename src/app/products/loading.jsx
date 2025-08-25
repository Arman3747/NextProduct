import Image from "next/image";

export default function loading() {
    return (
        <div className="min-h-screen flex items-center justify-center my-16">
            <Image src="https://i.ibb.co/3mgpyXC7/loading.gif" width={630} height={637} alt="loading" ></Image>
        </div>
    );
}