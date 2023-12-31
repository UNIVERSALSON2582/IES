import React, { useState } from 'react';

function Contact() {
  const [isChatboxOpen, setChatboxOpen] = useState(false);

  const chatboxToggleHandler = () => {
    setChatboxOpen(!isChatboxOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="w-full">
          <div className="formbold-form-wrapper mx-auto hidden w-full max-w-[550px] rounded-lg border border-[#e0e0e0] bg-white">
            <div className="flex items-center justify-between rounded-t-lg bg-[#6A64F1] py-4 px-9">
              <h3 className="text-xl font-bold text-white">Let's chat? - Online</h3>
              <button onClick="chatboxToggleHandler()" className="text-white">
                {/* Your button content here */}
              </button>
            </div>
            {/* Rest of your code */}
          </div>
          <div className="mx-auto mt-12 flex max-w-[550px] items-center justify-end space-x-5">
            <button
              className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#6A64F1] text-white"
              onClick={chatboxToggleHandler}
            >
              {/* Your button content here */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
