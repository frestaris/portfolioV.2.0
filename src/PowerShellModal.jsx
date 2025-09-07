import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import psLogo from "./assets/powershell.png";

export default function PowerShellModal({ onClose }) {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();

    if (name.length < 2 || name.length > 50) {
      toast.error("Name must be between 2 and 50 characters.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (message.length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return;
    }
    if (message.length > 500) {
      toast.error("Message cannot exceed 500 characters.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setIsSending(false);
          onClose();
        },
        (error) => {
          console.error("Email error:", error.text);
          toast.error("❌ Failed to send message, please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl mx-2 rounded-md overflow-hidden shadow-lg border border-gray-700">
        {/* Title bar */}
        <div
          className="bg-white/10 backdrop-blur-md border-b border-white/20
                        text-gray-200 flex justify-between items-center px-3 py-2 text-xs font-sans"
        >
          <div className="flex items-center gap-2">
            <img src={psLogo} alt="PowerShell Logo" className="w-4 h-4" />
            <span>PowerShell</span>
          </div>
          <button
            onClick={onClose}
            className="hover:text-[#4ec9b0] hover:cursor-pointer transition"
          >
            ✕
          </button>
        </div>

        {/* Console area */}
        <div className="bg-[#1a0000] text-[#ff5555] p-4 font-mono text-sm">
          <form
            ref={formRef}
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
                name="user_name"
                placeholder="Enter your name"
                required
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
                name="user_email"
                placeholder="Enter your email"
                required
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
                required
                className="w-full bg-transparent border border-green-600 
                           focus:outline-none focus:border-green-400 
                           text-green-400 p-2 rounded caret-green-400"
              />
            </label>

            {/* Send button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSending}
                className="px-6 py-2 rounded font-bold border border-green-400 
             text-green-400 bg-black hover:bg-green-400 hover:text-black 
             transition hover:cursor-pointer flex items-center gap-2 
             disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending && (
                  <span className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></span>
                )}
                {isSending ? "Sending..." : "Send Email"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
