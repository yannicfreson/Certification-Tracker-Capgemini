import TopBar from "../components/TopBar";

export default function Home() {
  return (
    <>
      <div className="absolute top-o left-0 w-full px-4">
        <TopBar />
        <div className="w-full bg-slate-200 h-[0.1rem] mt-4"></div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <img src="Capgemini_Logo.png" className="mb-4 mx-8"></img>
        <div id="loginForm">
          <div className="mb-4">
            <p className="text-slate-500 mb-2">Email:</p>
            <input
              id="emailInput"
              className="border-slate-400 border-2 rounded-sm w-full p-2"
              placeholder="Your email"
            ></input>
          </div>
          <div className="mb-4">
            <p className="text-slate-500 mb-2">Password</p>
            <input
              id="passwordInput"
              className="border-slate-400 border-2 rounded-sm w-full p-2"
              placeholder="Your password"
            ></input>
          </div>
          <button className="bg-slate-500 mb-4 text-white rounded-sm p-2 w-full">
            Login
          </button>
        </div>
        <div>
          <p className="font-bold text-slate-500">Forgot password?</p>
          <p className="font-bold text-slate-500">Privacy</p>
        </div>
      </div>
    </>
  );
}
