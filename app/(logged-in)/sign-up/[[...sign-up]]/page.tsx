import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      <div
        className="absolute animate-pulse"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(43,234,250,0.7) 0%, rgba(54,240,250,0.2) 100%)",
          filter: "blur(100px)",
        }}
      />
      <div className="flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
}
