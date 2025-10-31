"use client";

import axios from "@/lib/axios";
import { Turnstile } from "@marsidev/react-turnstile";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
const images = [
  "/assets/illustrations/mockup_insta.png",
  "/assets/illustrations/mockup_facebook.png",
  "/assets/illustrations/mockup_linkedin.png",
];
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const [success, setSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isTurnstileVerified, setIsTurnstileVerified] = useState(false);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const turnstileRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const sendEmail = async (data: FormData) => {
    if (!isTurnstileVerified || !turnstileToken) {
      setTurnstileError("Veuillez compléter la vérification Turnstile");
      return;
    }

    try {
      setIsSent(true);
      setTurnstileError(null);
      await axios.post("/api/message/", {
        name: data.name,
        email: data.email,
        message: data.message,
        turnstile_token: turnstileToken,
      });
      reset();
      setIsTurnstileVerified(false);
      setTurnstileToken(null);
    } catch (error: any) {
      console.error("Error sending message:", error);
      setIsSent(false);
      // Reset Turnstile on error so user can retry
      setIsTurnstileVerified(false);
      setTurnstileToken(null);
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
      setTurnstileError(
        error.response?.data?.message ||
          "Une erreur est survenue. Veuillez réessayer."
      );
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center items-end flex-1">
      <div className="relative w-full md:w-1/3 h-96">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="réseau social"
            className={`absolute w-full object-cover z-10 transition-opacity duration-700 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="flex flex-col flex-1 w-full p-4 md:p-16 md:max-w-[50%] backdrop-blur-xl bg-opacity-30 my-8 rounded-3xl overflow-hidden border-2 border-purple-350">
        <h2 className="text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
          CONTACT
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit(sendEmail)}>
          <div className="py-2">
            <label className="text-purple-750 font-bold text-sm tracking-widest">
              E-mail
            </label>
            <input
              type="email"
              className={`bg-transparent w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350 border ${
                errors.email ? "border-red-500" : "border-purple-350"
              }`}
              {...register("email", {
                required: "L'email est requis",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Format d'email invalide",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="py-2">
            <label className="text-purple-750 font-bold text-sm tracking-widest">
              Nom
            </label>
            <input
              type="text"
              className={`bg-transparent w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350 border ${
                errors.name ? "border-red-500" : "border-purple-350"
              }`}
              {...register("name", {
                required: "Le nom est requis",
                minLength: {
                  value: 2,
                  message: "Le nom doit contenir au moins 2 caractères",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="py-2">
            <label className="text-purple-750 font-bold text-sm tracking-widest">
              Message
            </label>
            <textarea
              className={`bg-transparent w-full py-2 px-4 my-2 rounded-md outline-none text-purple-750 focus:bg-purple-350 h-36 border ${
                errors.message ? "border-red-500" : "border-purple-350"
              }`}
              {...register("message", {
                required: "Le message est requis",
                minLength: {
                  value: 5,
                  message: "Le message doit contenir au moins 5 caractères",
                },
              })}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="py-2">
            <Turnstile
              ref={turnstileRef}
              options={{
                theme: "light",
              }}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
              onSuccess={(token) => {
                setTurnstileToken(token);
                setIsTurnstileVerified(true);
                setTurnstileError(null);
              }}
              onError={() => {
                setIsTurnstileVerified(false);
                setTurnstileToken(null);
                setTurnstileError(
                  "La vérification Cloudflare a échoué. Veuillez réessayer."
                );
              }}
              onExpire={() => {
                setIsTurnstileVerified(false);
                setTurnstileToken(null);
                setTurnstileError(
                  "La vérification a expiré. Veuillez la refaire."
                );
              }}
            />
            {turnstileError && (
              <p className="text-red-500 text-xs mt-1">{turnstileError}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={!isTurnstileVerified || isSent}
            className={`bg-transparent w-3/4 py-4 cursor-pointer rounded-md self-center my-4 disabled:opacity-50 disabled:cursor-not-allowed border-purple-750 border hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 group hover:border-opacity-0 ${
              isSent
                ? "bg-gradient-to-r from-purple-400 to-blue-500 border-opacity-0"
                : ""
            }`}
          >
            {isSent ? (
              <Lottie
                animationData={require("../../../content/space_mail.json")}
                className="h-8"
                onComplete={() => {
                  setIsSent(false);
                  setSuccess(true);
                  // Reset Turnstile widget after successful submission
                  if (turnstileRef.current) {
                    turnstileRef.current.reset();
                  }
                  // Reset success message after 5 seconds to allow form reuse
                  setTimeout(() => {
                    setSuccess(false);
                  }, 5000);
                }}
                loop={false}
              />
            ) : success ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-green-500 font-semibold text-md">
                  Message envoyé
                </span>
              </div>
            ) : (
              <span className="text-purple-750 font-semibold text-md group-hover:text-white">
                Envoyer
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
