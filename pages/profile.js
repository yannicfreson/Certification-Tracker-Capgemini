import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import Image from "next/image";
import Link from "next/link";

import fireBaseConfig from "../firebaseConfig";

import Nav from "../components/Nav";
import TopBar from "../components/TopBar";

/* Boilerplate code for database connection */
/* export async function getServerSideProps() {
  const app = initializeApp(fireBaseConfig);
  const db = getFirestore(app);

  const certificates = await getCertificates();

  async function getCertificates() {
    const certificatesCollection = collection(db, "certificates");
    const certificatesSnapshot = await getDocs(certificatesCollection);
    const certificatesList = certificatesSnapshot.docs.map((doc) => doc.data());
    return certificatesList;
  }

  certificates.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return {
    props: {
      certificates,
    },
  };
} */

export default function Home() {
  // placeholder name
  let name = "John Doe";
  // placeholder certificates
  let certificates = [
    {
      name: "Certificate 1",
      version: "1.0",
      image: "https://placehold.co/400",
      state: "valid",
    },
    {
      name: "Certificate 2",
      version: "1.0",
      image: "https://placehold.co/400",
      state: "valid",
    },
    {
      name: "Certificate 3",
      version: "1.0",
      image: "https://placehold.co/400",
      state: "expired",
    },
    {
      name: "Certificate 4",
      version: "1.0",
      image: "https://placehold.co/400",
      state: "valid",
    },
    {
      name: "Certificate 5",
      version: "1.0",
      image: "https://placehold.co/400",
      state: "valid",
    },
    {
      name: "Certificate 6",
      version: "1.0",
      image: "https://placehold.co/400",
      state: "valid",
    },
  ];

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

        <p id="name" className="mb-4 text-2xl font-bold text-[#0070ad]">
          {name}
        </p>

        <Link
          className="h-12 w-12 mb-4 bg-white border-2 border-slate-800 rounded-full text-center text-3xl"
          href="/addCertificate"
        >
          +
        </Link>

        {certificates.map((certificate) =>
          certificate.state == "valid" ? (
            <div className="w-full p-2 mb-4 bg-[#0070ad] rounded-lg text-white border-[#8bc946] border-l-8 shadow-md shadow-slate-500">
              <div className="flex justify-between flex-row rounded-sm overflow-hidden">
                <div>
                  <p className="font-bold text-lg">{certificate.name}</p>
                  <p>{certificate.version}</p>
                </div>
                <div className="w-16 h-16 overflow-hidden rounded-md">
                  <img src={certificate.image} />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full p-2 mb-4 bg-[#0070ad] rounded-lg text-white border-[#ff4754] border-l-8 shadow-md shadow-slate-500">
              <div className="flex justify-between flex-row rounded-sm overflow-hidden">
                <div>
                  <p>{certificate.name}</p>
                  <p>{certificate.version}</p>
                </div>
                <div className="w-16 h-16 overflow-hidden rounded-md">
                  <img src={certificate.image} />
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full px-4 pb-4 bg-white">
        <div className="w-full bg-slate-200 h-[0.1rem] mb-4 rounded-sm"></div>
        <Nav />
      </div>
    </div>
  );
}
