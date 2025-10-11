"use client";
import { useState, useEffect } from "react";
import { Heart, MessageCircle, Sparkles, ArrowRight, Lock, Zap, Smile } from "lucide-react";
import PageRoutes from "./pageRoutes";
import { useRouter } from "next/navigation";

export default function Root() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full relative overflow-y-auto overflow-x-hidden bg-background text-on-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              opacity: 0.08
            }}
          >
            <Heart size={20 + Math.random() * 30} className="fill-accent" />
          </div>
        ))}
      </div>

      <div className="relative w-full min-h-full flex items-center justify-center z-0">
        <div className="w-full px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto">
          
          <div className="mb-8 relative flex justify-center">
            <div className="absolute inset-0 blur-3xl opacity-20 rounded-full bg-primary"></div>
            <div className="relative p-6 rounded-full bg-surface">
              <MessageCircle size={64} className="text-primary" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-h1 mb-4 text-center relative">
            <span className="inline-block">WebChat</span>
            <Sparkles 
              size={32} 
              className="inline-block ml-2 animate-pulse text-accent" 
            />
          </h1>

          <p className="text-h3 mb-3 text-center opacity-80 text-nowrap mx-auto">
            Our Private Space
          </p>
          
          <p className="text-body mb-10 text-center opacity-60 text-nowrap mx-auto">
            A special place built with love, where every conversation brings us closer together
          </p>

          <div className="flex justify-center mb-16">
            <button className="cursor-pointer group relative px-8 py-4 rounded-full text-button transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 bg-primary text-on-primary hover:bg-primary-hover" onClick={() => router.push(PageRoutes.HOME)}>
              Start Chatting
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl mx-auto mb-12">
            <div className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 bg-surface">
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-primary/15">
                  <Lock size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-h3 mb-3">Just for Us</h3>
              <p className="text-body opacity-70">Your private conversations, safe and secure</p>
            </div>

            <div className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 bg-surface">
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-primary/15">
                  <Zap size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-h3 mb-3">Real-time</h3>
              <p className="text-body opacity-70">Instant messages, bringing us closer</p>
            </div>

            <div className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 bg-surface">
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-primary/15">
                  <Smile size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-h3 mb-3">Made with Love</h3>
              <p className="text-body opacity-70">Built especially for you</p>
            </div>
          </div>

          <div className="text-center pb-8">
            <p className="text-caption opacity-50 flex items-center justify-center gap-2">
              Created with <Heart size={14} className="fill-accent" /> for my love
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-30px) rotate(3deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}