import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import Image from "next/image";
import Link from "next/link";

import Nav from "../components/Nav";
import TopBar from "../components/TopBar";

export async function getServerSideProps() {
  const db = getFirestore(
    initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    })
  );

  const certificates = await getCertificates();

  async function getCertificates() {
    const certificatesSnapshot = await getDocs(collection(db, "Certificate"));
    const certificatesList = certificatesSnapshot.docs.map((doc) => doc.data());
    return certificatesList;
  }

  return {
    props: {
      certificates,
    },
  };
}

export default function Home(props) {
  // placeholder name
  let name = "John Doe";
  let certificates = props.certificates;

  return (
    <div>
      <div className="fixed top-o left-0 w-full px-4 -mt-4 pt-4 bg-white">
        <TopBar />
        <div className="w-full bg-slate-200 h-[0.1rem] mt-4 rounded-sm"></div>
      </div>

      <div className="py-12 flex flex-col items-center">
        <div className="w-32 self-center my-4 rounded-full overflow-hidden">
          <img src="https://placehold.co/400" />
        </div>

        <p id="name" className="mb-4 text-2xl font-bold text-capgemini-dark">
          {name}
        </p>

        <Link
          className="h-12 w-12 mb-4 bg-white border-2 border-slate-800 rounded-full text-center text-3xl"
          href="/addCertificate"
        >
          +
        </Link>

        {certificates.map((certificate) => (
          <div
            className={classNames(
              "w-full p-2 mb-4 bg-capgemini-dark rounded-lg text-white border-l-8 shadow-md shadow-slate-500",
              certificate.state === "valid"
                ? "border-capgemini-red"
                : "border-capgemini-green"
            )}
          >
            <div className="flex justify-between flex-row rounded-sm overflow-hidden">
              <div>
                <p className="font-bold text-lg">
                  {certificate.name.split("_").join(" ")}
                </p>
                <p>{certificate.version}</p>
              </div>
              <div className="w-16 h-16 overflow-hidden rounded-md">
                <img src="https://placehold.co/400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full px-4 pb-4 bg-white">
        <div className="w-full bg-slate-200 h-[0.1rem] mb-4 rounded-sm"></div>
        <Nav />
      </div>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
