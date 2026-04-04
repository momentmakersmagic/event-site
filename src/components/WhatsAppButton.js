import { useState } from "react";

function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <>
      {/* BUTTON */}
      <div
        onClick={handleClick}
        className="fixed bottom-5 right-5 z-50 cursor-pointer group"
      >

        {/* BUTTON */}
        <div className="relative bg-green-500 w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 active:scale-95 transition duration-300">

          {/* ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
          >
            <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.89.757 5.708 2.197 8.192L.065 31.935l7.59-2.09A15.944 15.944 0 0016 32c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.172c-2.53 0-4.995-.675-7.143-1.953l-.51-.303-4.503 1.24 1.202-4.394-.33-.54A13.9 13.9 0 012.4 16.396C2.4 8.906 8.51 2.796 16 2.796s13.6 6.11 13.6 13.6-6.11 13.172-13.6 13.172zm7.438-9.856c-.406-.203-2.406-1.188-2.78-1.323-.375-.136-.648-.203-.922.203-.274.406-1.058 1.323-1.297 1.594-.239.27-.479.305-.885.102-.406-.203-1.716-.632-3.27-2.015-1.21-1.08-2.027-2.413-2.266-2.819-.239-.406-.025-.626.18-.829.184-.183.406-.479.609-.719.203-.239.27-.406.406-.677.136-.27.068-.508-.034-.711-.102-.203-.922-2.223-1.263-3.045-.33-.795-.665-.687-.922-.7l-.785-.014c-.27 0-.711.102-1.083.508-.372.406-1.42 1.388-1.42 3.387 0 1.999 1.454 3.928 1.656 4.2.203.27 2.86 4.364 6.93 6.117.969.418 1.724.668 2.312.855.971.309 1.855.265 2.553.161.779-.116 2.406-.983 2.747-1.934.34-.95.34-1.765.238-1.934-.102-.169-.372-.27-.779-.473z" />
          </svg>

        </div>

        {/* TOOLTIP */}
        <div className="absolute right-16 bottom-3 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Chat with us
        </div>

      </div>

      {/* POPUP MESSAGE */}
      {showMessage && (
        <div className="fixed bottom-24 right-4 md:right-5 bg-white text-black px-5 py-4 rounded-xl shadow-xl z-50 text-sm border w-[260px] animate-fadeIn">

          <div className="flex justify-between items-start">
            <p className="font-semibold text-green-600">
              🚧 WhatsApp Coming Soon
            </p>

            <button
              onClick={() => setShowMessage(false)}
              className="text-gray-400 hover:text-black text-sm"
            >
              ✖
            </button>
          </div>

          <p className="text-xs text-gray-600 mt-2 leading-relaxed">
            We’re setting up WhatsApp booking. You’ll soon be able to chat with us instantly!
          </p>

        </div>
      )}

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease;
          }
        `}
      </style>
    </>
  );
}

export default WhatsAppButton;