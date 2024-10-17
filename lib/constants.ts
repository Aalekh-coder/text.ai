export const plansMap = [
    {
      id: "basic",
      name: "Basic",
      description: "Get started with SpeakEasy!",
      price: "10",
      items: ["3 Blog Posts", "3 Transcription"],
      paymentLink: "https://buy.stripe.com/test_aEUfZhbQy2sbcA8cMM",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1QAn4PRp3enRPkCo2Qy4MUOu"
          : "",
    },
    {
      id: "pro",
      name: "Pro",
      description: "All Blog Posts, let’s go!",
      price: "19.99",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_5kA9AT5sa8Qz0Rq145",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1QAn4sRp3enRPkCow2Wayajk"
          : "",
    },
  ];
  
  export const ORIGIN_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://speakeasyai-demo.vercel.app";




