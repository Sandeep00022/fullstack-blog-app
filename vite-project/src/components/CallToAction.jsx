import { Button } from "flowbite-react";
import React from "react";

export const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">want to learn about JavaScript?</h2>
        <p className="text-gray-500 my-2">Checkout these resourse with 100 Javascript Projects</p>
        <Button
          className="rounded-t-xl rounded-bl-none rounded-tr-none"
          gradientDuoTone={"purpleToPink"}
        >
          <a href="https://my-portfolio-delta-neon.vercel.app/" target="_blank">
            Learn more about the developer
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://th.bing.com/th/id/R.3833d4b070ca7c198ebc5a2ba765a32e?rik=z7tex%2bOSycssNQ&riu=http%3a%2f%2fwww.techsors.com%2fwp-content%2fuploads%2f2016%2f02%2fJavascript.jpg&ehk=fkH4BtxJ97Ge0Aq%2fgaP4JpBqsY1Al2XSQxLVbl9UWUE%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
    </div>
  );
};
