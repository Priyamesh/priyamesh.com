import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-3xl text-center">Not Found</h2>
      <Link href="/" className="underline">
        Return Home
      </Link>
    </div>
  );
}
