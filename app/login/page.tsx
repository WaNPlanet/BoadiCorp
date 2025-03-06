import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CloseButton from './closebtn';

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center px-4" style={{ background: "oklch(0.932 0.032 255.585)" }}>
      <div className="w-full max-w-5xl min-h-[500px] max-h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-sm rounded-3xl overflow-auto">
        
        {/* Left side - Content */}
        <div className="card-body flex items-center justify-center p-4">
          <div className="w-full max-w-lg overflow-auto">
            <h2 className="flex justify-center card-title text-2xl">Register With Us!</h2>
            <p className="flex justify-center">
              Welcome to your home of all things. We are glad you are here.
            </p>

            <div className="space-y-4"> {/* Adds spacing between fields */}
              <fieldset className="fieldset p-3 border rounded-lg">
                <legend className="fieldset-legend text-lg font-semibold">Your name?</legend>
                <input type="text" className="input input-bordered w-full p-3 text-lg" placeholder="Type here" />
              </fieldset>

              <fieldset className="fieldset p-3 border rounded-lg">
                <legend className="fieldset-legend text-lg font-semibold">Your mail?</legend>
                <input type="mail" className="input input-bordered w-full p-3 text-lg" placeholder="Type here" />
              </fieldset>

              <fieldset className="fieldset p-3 border rounded-lg">
                <legend className="fieldset-legend text-lg font-semibold">Your contact?</legend>
                <input type="number" className="input input-bordered w-full p-3 text-lg" placeholder="Type here" />
              </fieldset>
<br />
              <div className="flex justify-center">
                <button className="btn btn-wide btn-info">Submit</button>
              </div>



              <div className='mt-3'>
                <p>Already a Member?<Link href="./signup"> SignIn</Link></p> 
              </div>
              <CloseButton/>
            </div>

          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative order-first lg:order-first p-4 rounded-2xl">
             {/* Close button positioned inside */}
          

            {/* Image container */}
            <figure className="w-full max-h-130 flex justify-center">
              <img
                src="/p2.jpg"
                alt="Album"
                className="w-auto object-cover rounded-2xl"
              />
            </figure>
        </div>


      </div>
    </div>
  );
};

export default Login;
