"use client";
import { useState, useEffect, useRef, use } from "react";
import { motion } from "framer-motion";
import Logo from '@/app/assets/logo_with_hex.png';
import { MotionComponent } from "../sections/Header";
import { IoClose, IoSendOutline } from "react-icons/io5";
import { RiChatSmileAiLine } from "react-icons/ri";
import { Message } from "@/lib/interfaces";
import { MessageCard } from "./Cards";

const SlidingPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleMessageSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try{
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userMessage),
      });

      const data = await res.json();
      const botMessage: Message = {
        sender: data.sender,
        text: data.text,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <motion.button
        className="z-30 fixed top-3/4 right-0 -translate-y-1/2 bg-themecolor text-bboard p-3 rounded-l-lg shadow-lg"
        onClick={() => setIsOpen(true)}
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <RiChatSmileAiLine size={24} />
      </motion.button>

      <motion.div
        className="z-40 fixed top-0 right-0 h-full w-3/5 bg-bboard text-white shadow-lg flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* hidden h-[200px] sticky w-screen top-0 left-0 bg-gradient-to-b from-bboard from-30% via-bboard/50 via-70% */}
        <div className="h-[75px] flex flex-row items-center justify-between">
          <div></div>
          <MotionComponent
              src={Logo}
              alt='Logo'
              width={64}
              height={64}
              className='p-1 mx-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
          />
          <button className="p-2 text-themecolor" onClick={() => setIsOpen(false)}>
            <IoClose size={24} />
          </button>
        </div>

        <div className="px-5 overflow-x-hidden overflow-y-auto flex flex-col flex-1">
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, index) => (
              <MessageCard key={index} index={index} msg={msg} />
            ))}
            <div ref={chatEndRef} />
          </div>
          
          <div className="p-3 z-50 flex flex-row items-center pt-8">
            <textarea
              className="flex-1 p-2 rounded-md bg-themeopacque text-white focus:outline-none resize-y field-sizing-content overflow-y-auto"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleMessageSend()}
            />
            <motion.button
              onClick={handleMessageSend}
              className="ml-2 p-2 rounded-full text-themecolor border-[1px] border-themecolor"
              whileHover={{ scale: 1.1, backgroundColor: '#fb923c', color: '#1A1918' }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <IoSendOutline size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>


      {isOpen && (
        <motion.div
          className="z-30 fixed inset-0 bg-bboard bg-opacity-60"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </>
  );
};

export default SlidingPanel;