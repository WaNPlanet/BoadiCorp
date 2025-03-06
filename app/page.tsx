import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen bg-gray-100 font-[Source Sans Pro] flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Boadi Corp.</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <Link href="./login" className="px-4 py-2 bg-black text-white rounded-lg text-sm">
          Login/SignUp
  </Link>
  </div>
</div>


      
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row  justify-between flex-1 px-6 pt-3">
        {/* Left Section - Header */}
        <div className="lg:w-1/2 lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-snug">
            Let's Move Your <br /> Business Forward
          </h1>
        </div>

        {/* Right Section - Text & Button */}
        <div className="lg:w-1/3">
          <p className="text-base lg:text-lg text-gray-600">
            At Boadi Corp., we believe in pushing boundaries. From cutting-edge technology to seamless user experiences, our mission is to build solutions that inspire and drive progress.
          </p>
          <Link href="./login" className="mt-4 inline-block px-5 py-2 bg-black text-white text-sm lg:text-base rounded-lg">
            Learn More
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mb-5">
        <Image
          src="/p4.jpg"
          alt="Business Growth"
          width={650}
          height={850}
          className="rounded-xl max-h-80 object-cover"
        />
      </div>


{/* LEARN MORE */}
{/* SECTION 2 */}
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 lg:px-8">

      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10">
        <div className="lg:w-1/2">
          <p className="text-gray-500 uppercase tracking-wide text-sm">/Industries We Serve</p>
          <h1 className="text-4xl lg:text-6xl font-bold mt-2 leading-tight">
            Tailored Logistics for Every Business
          </h1>
        </div>
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <p className="text-gray-600">
            At /Boadi Corp., we understand that every industry has unique logistics challenges. That’s why we offer customized solutions for a wide range of sectors.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <button className="p-2 border rounded-full hover:bg-gray-200">←</button>
            <button className="p-2 border rounded-full hover:bg-gray-200">→</button>
          </div>
        </div>
      </div>

      {/* Industry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center h-72">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4">📦</div>
          <h3 className="font-semibold text-lg">Retail & E-commerce</h3>
          <p className="text-gray-600 text-sm mt-auto">
            Streamline your fulfillment process, reduce delivery times, and improve customer satisfaction.
          </p>
        </div>


        {/* Card 2 - Active Card */}
        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center h-72">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4">🏭</div>
          <h3 className="font-semibold text-lg">Manufacturing</h3>
          <p className="text-gray-600 text-sm mt-auto">
            Optimize your supply chain, from raw materials to finished goods, with efficient transportation and services.
          </p>
        </div>


        {/* Card 3 */}
        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center h-72">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4">💊</div>
          <h3 className="font-semibold text-lg">Healthcare & Pharmacy</h3>
          <p className="text-gray-600 text-sm mt-auto">
            Ensure the safe, timely delivery of temperature-sensitive products and critical shipments.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center h-72">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4">🔧</div>
          <h3 className="font-semibold text-lg">Technology & Electronics</h3>
          <p className="text-gray-600 text-sm mt-auto">
            Handle high-value, sensitive products with care, ensuring fast, secure delivery across global markets.
          </p>
        </div>
      </div>
    </div>


    </div>

    
  );
}
