import psLogo from "./assets/powershell.png";

export default function PowerShellModal({ onClose, handleSubmit }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl mx-2 rounded-md overflow-hidden shadow-lg border border-gray-700">
        {/* Title bar (classic style) */}
        <div className="bg-[#0c0c0c] text-gray-200 flex justify-between items-center px-3 py-1 text-xs font-sans border-b border-gray-700">
          <div className="flex items-center gap-2">
            <img src={psLogo} alt="PowerShell Logo" className="w-4 h-4" />
            <span>PowerShell</span>
          </div>
          <button onClick={onClose} className="hover:cursor-pointer">
            ✕
          </button>
        </div>
        {/* Console area */}
        <div className="bg-black text-green-400 p-4 font-mono text-sm">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 h-full"
          >
            {/* Name */}
            <label className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="text-green-400 mb-1 sm:mb-0">
                PS C:\Users\Visitor\Name&gt;
              </span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="flex-1 bg-transparent border-b border-green-600 
                   focus:outline-none focus:border-green-400 
                   text-green-400 caret-green-400"
              />
            </label>

            {/* Email */}
            <label className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="text-green-400 mb-1 sm:mb-0">
                PS C:\Users\Visitor\Email&gt;
              </span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-b border-green-600 
                   focus:outline-none focus:border-green-400 
                   text-green-400 caret-green-400"
              />
            </label>

            {/* Message */}
            <label className="block">
              <span className="text-green-400 block mb-1">
                PS C:\Users\Visitor\Message&gt;
              </span>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                className="w-full bg-transparent border border-green-600 
                   focus:outline-none focus:border-green-400 
                   text-green-400 p-2 rounded caret-green-400"
              />
            </label>

            {/* Send button */}
            <div className="pt-4">
              <button
                type="submit"
                className="px-6 py-2 rounded font-bold border border-green-400 
                   text-green-400 bg-black hover:bg-green-400 hover:text-black 
                   transition hover:cursor-pointer"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
