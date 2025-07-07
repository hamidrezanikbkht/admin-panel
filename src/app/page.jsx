"use client";
import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [error,seterror]=useState(false)
const router=useRouter()
  const togglePassword = () => {
    setVisible((p) => !p);
  };
  const start = (e) => {
    e.preventDefault()
    if (email ==='hamidrezanikbakht21@gmail.com'&&password==='1234') {
      router.push('/vorood')
    }else{
      seterror(true)
    }
  };
  console.log(error);
  

  return (
    <div>
      <section
        className="w-full flex justify-center items-center h-screen px-4 sm:px-0"
        style={{
          background:
            "linear-gradient(135deg, #dc2626 0%, #ec4899 50%, #8b5cf6 100%)",
        }}
      >
        {error && <Error seterror={seterror}/>}
        <div
          className="fixed top-5  left-4 sm:left-20 px-4 py-2 max-w-[90vw] overflow-x-auto whitespace-nowrap backdrop-blur-md border rounded-xl shadow-lg lg:text-xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.8)",
            borderColor: "#d1d5db",
            color: "#374151",
            fontFamily: "monospace",
          }}
        >
          email: hamidrezanikbakht21@gmail.com
        </div>
        <div
          className="fixed top-22 lg:top-20 left-4 sm:left-20 px-4 py-2 max-w-[90vw] overflow-x-auto whitespace-nowrap backdrop-blur-md border rounded-xl shadow-lg lg:text-xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.8)",
            borderColor: "#d1d5db",
            color: "#374151",
            fontFamily: "monospace",
          }}
        >
          password: 1234
        </div>

        <div
          className="py-10 px-6 sm:px-10 w-full max-w-lg rounded-3xl shadow-2xl border mx-4 sm:mx-0"
          style={{
            backgroundColor: "white",
            borderColor: "#e5e7eb",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            borderRadius: "1.5rem",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h1
              className="text-center mb-2 select-none font-extrabold"
              style={{
                fontSize: "1.875rem", // 3xl
                color: "#1f2937", // gray-800
                fontWeight: "800",
              }}
            >
              Welcome
            </h1>
            <p
              className="text-center font-medium select-none"
              style={{
                fontSize: "1rem", // base
                color: "#6b7280", // gray-500
                fontWeight: "500",
              }}
            >
              Please enter your email to continue
            </p>
          </div>

          <form
            action=""
            method="post"
            className="flex flex-col justify-center gap-6 sm:gap-8"
          >
            {/* ایمیل */}
            <label
              htmlFor="email"
              className="flex items-center rounded-3xl transition-shadow duration-300"
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#d1d5db", // gray-300
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "1rem",
                paddingRight: "1.5rem",
              }}
            >
              <span
                style={{ color: "#3b82f6" /* pink-500 */ }}
                className="mr-3 sm:mr-4"
              >
                <MailIcon fontSize="large" />
              </span>
              <input
                type="text"
                id="email"
                placeholder="ایمیل خود را وارد کنید"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="flex-grow bg-transparent rounded-lg outline-none font-semibold text-sm sm:text-base"
                style={{
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem",
                  paddingLeft: "1rem",
                  paddingRight: "1.5rem",
                  color: "#1f2937",
                  fontWeight: "600",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                }}
                required
              />
            </label>

            {/* پسورد */}
            <label
              htmlFor="password"
              className="flex items-center border rounded-3xl py-4 sm:py-5 px-4 sm:px-6 focus-within:shadow-lg transition-shadow duration-300 min-w-0"
              style={{
                borderColor: "#d1d5db", // gray-300
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "1rem",
                paddingRight: "1.5rem",
              }}
            >
              <span
                className="mr-3 sm:mr-4"
                style={{ color: " #ec4899" /* blue-500 */ }}
              >
                <LockIcon fontSize="large" />
              </span>
              <input
                type={visible ? "password" : "text"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                id="password"
                placeholder="رمز عبور را وارد کنید"
                className="flex-grow bg-transparent rounded-lg outline-none font-semibold text-sm sm:text-base min-w-0 placeholder:text-gray-400"
                style={{
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem",
                  paddingLeft: "1rem",
                  paddingRight: "1.5rem",
                  color: "#1f2937",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                }}
                required
              />
              {visible ? (
                <VisibilityOffIcon
                  onClick={togglePassword}
                  style={{
                    color: "#ec4899",
                    marginLeft: "0.5rem",
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                  className="hover:scale-110 text-lg sm:text-xl"
                />
              ) : (
                <VisibilityIcon
                  onClick={togglePassword}
                  style={{
                    color: "#ec4899",
                    marginLeft: "0.5rem",
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                  className="hover:scale-110 text-lg sm:text-xl"
                />
              )}
            </label>

            {/* دکمه ورود */}
            
              <button
                onClick={start}
                type="submit"
                className="mt-6 rounded-3xl shadow-lg select-none text-sm sm:text-base font-bold"
                style={{
                  background:
                    "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
                  color: "white",
                  paddingTop: "0.75rem",
                  paddingBottom: "1rem",
                  borderRadius: "1.5rem",
                  boxShadow:
                    "0 10px 15px -3px rgba(139,92,246,0.5), 0 4px 6px -2px rgba(139,92,246,0.3)",
                  transition: "background 0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)")
                }
              >
                ورود
              </button>
            
          </form>
        </div>
      </section>
    </div>
  );
}
function Error({seterror}){
  return(
    <>
  <div
  className="
    fixed 
    top-1/2 
    left-5
    lg:left-1/2
    transform 
    -translate-x-1/2 
    -translate-y-1/2
    w-[90%]
    max-w-sm
    border
    shadow-2xl
    rounded-2xl
    bg-white
    overflow-hidden
    animate-fade-in
  "
>
  {/* هدر */}
  <div className="w-full bg-rose-500 flex justify-between items-center py-2 px-4">
    <h2 className="text-white font-bold text-base">
      خطا در ورود اطلاعات
    </h2>
    <button
      onClick={() => seterror(false)}
      className="
        text-black
        lg:text-white 
        hover:bg-rose-600 
        rounded-full 
        p-1 
        transition
      "
      aria-label="بستن"
    >
      ✖
    </button>
  </div>

  {/* متن */}
  <div className="text-center p-5 text-gray-700 font-medium space-y-2">
    <p>
      لطفاً اطلاعات ورود را به‌درستی وارد کنید.
    </p>
    <p className="text-sm text-gray-500">
      ایمیل یا رمز عبور اشتباه است.
    </p>
  </div>
</div>


    </>
  )
}
