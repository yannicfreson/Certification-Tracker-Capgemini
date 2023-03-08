import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import Nav from "@/components/Nav";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import EditIcon from "@/icons/EditIcon";

/* Boilerplate code for database connection to get certificate */
/* TODO: this needs to be optimized to only get one certificate in the request instead of a list */
/* export async function getServerSideProps() {
  const app = initializeApp(fireBaseConfig);
  const db = getFirestore(app);

  let certificate = await getCertificate(id);

  async function getCertificate(id) {
    const certificatesCollection = collection(db, "certificates");
    const certificatesSnapshot = await getDocs(certificatesCollection);
    const certificatesList = certificatesSnapshot.docs.map((doc) => doc.data());
    return certificatesList.find((certificate) => certificate.id === id);
  }

  return {
    props: {
      certificate,
    },
  };
} */

export default function Home() {
  /* const router = useRouter();
  const id = router.query.id;
  const certificate = props.certificate; */

  // placeholder certificate
  let certificate = {
    name: "Certificate 1",
    version: "1.0",
    vendor: "Ordina",
    startDate: "2021-01-01",
    endDate: "2021-12-31",
    state: "valid",
    image: "https://placehold.co/400",
  };
  return (
    <div>
      <div className="fixed top-o left-0 w-full px-4 -mt-4 pt-4 bg-white">
        <TopBar />
        <div className="w-full bg-slate-200 h-[0.1rem] mt-4 rounded-sm"></div>
      </div>
      <div className="py-12 flex flex-col items-center h-[100vh] justify-center">
        <div className="flex flex-col items-center mb-12">
          <p className="text-4xl font-semibold uppercase">{certificate.name}</p>
          <p className="text-slate-500">{certificate.version}</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <p className="text-[#0070ad] text-2xl font-semibold">Vendor</p>
          <p>{certificate.vendor}</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <p className="text-[#0070ad] text-2xl font-semibold">Start datum</p>
          <p>{certificate.startDate}</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <p className="text-[#0070ad] text-2xl font-semibold">Eind datum</p>
          <p>{certificate.endDate}</p>
        </div>
        <div className="flex flex-col items-center mb-8">
          <p className="text-[#0070ad] text-2xl font-semibold">Status</p>
          <p>{certificate.state}</p>
        </div>
        <button className="bg-[#0070ad] text-white rounded-md p-2 w-full">
          Modify{" "}
        </button>
      </div>

      <div className="fixed bottom-0 left-0 w-full px-4 pb-4 bg-white">
        <div className="w-full bg-slate-200 h-[0.1rem] mb-4 rounded-sm"></div>
        <Nav />
      </div>
    </div>
  );
}
