import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="bg-[#090908] dark:bg-white text-white dark:text-gray-900">
        <header className="max-w-6xl mx-auto pl-4">
          <Link
            className=""
            href={"/"}
          >
            e-commerce
          </Link>
          <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Al products</Link>
            <Link href={"/categories"}>Categories</Link>
            <Link href={"/account"}>Account</Link>
            <Link href={"/cart"}>Cart (0)</Link>
          </nav>
        </header>
      </div>
    </>
  );
}
