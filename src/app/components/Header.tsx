import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="bg-[#090908] text-white">
        <header className="max-w-6xl mx-4 py-5">
          <div className="flex justify-between">
            <Link
              className=""
              href={"/"}
            >
              E-Commerce
            </Link>
            <nav className="flex gap-4">
              <Link
                className="text-gray-300"
                href={"/"}
              >
                Home
              </Link>
              <Link href={"/products"}>Al products</Link>
              <Link href={"/categories"}>Categories</Link>
              <Link href={"/account"}>Account</Link>
              <Link href={"/cart"}>Cart (0)</Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
