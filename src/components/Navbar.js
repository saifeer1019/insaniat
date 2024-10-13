import Link from "next/link";
import { Ship } from "lucide-react";
import { Button } from "@/components/ui/button"
const Navbar = () => {
  return (
    <header className="bg-green-800 text-white py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">Insaniat Tourism</Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="/packages" className="hover:text-green-200">Our Packages</Link>
        <Link href="/track" className="hover:text-green-200">Track Your Booking</Link>
        <Link href="/about" className="hover:text-green-200">About</Link>
        <Link href="/contact" className="hover:text-green-200">Contact</Link>
      </nav>
      <Button className="md:hidden">Menu</Button>
    </div>
  </header>

  );
};

export default Navbar;