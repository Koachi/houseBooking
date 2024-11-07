import Image from "next/image";
import Link from 'next/link';
import NotFoundImage from "../assets/notFound.svg"

export default function NotFound() {
    return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 bg-white dark:bg-dark">
    {/* Centered Image */}
    <div className="mb-6">
      <Image
        src={NotFoundImage}
        alt="404 Image"
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
    </div>

    {/* Side-by-side text */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl">
      <p className="text-xl text-gray-600 dark:text-white">Sorry, the page you are looking for does not exist.</p>
    </div>

    {/* Link to go back to home */}
    <Link href="/" className="mt-8 text-orange-300 hover:underline text-lg">
        Go back Home
     </Link>
  </div>
    )
}