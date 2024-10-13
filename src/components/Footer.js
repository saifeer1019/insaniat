import Link from "next/link";

const Footer = () => {
  return (
  
    <footer className="bg-green-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Insaniat Tourism</h3>
          <p>Discover the beauty of the world's largest mangrove forest with our expert-guided tours.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-green-200">Home</Link></li>
            <li><Link href="#" className="hover:text-green-200">Tours</Link></li>
            <li><Link href="#" className="hover:text-green-200">About Us</Link></li>
            <li><Link href="#" className="hover:text-green-200">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Khalishpur, Khulna, Bangladesh</p>
          <p>Phone: 01921512040</p>
          <p>Email: insaniattourism@gmail.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © 2024 Insaniat Tourism. All rights reserved.
      </div>
    </div>
  </footer>
  );
};

export default Footer;