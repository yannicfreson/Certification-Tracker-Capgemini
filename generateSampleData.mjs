import crypto from "crypto";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  writeBatch,
} from "firebase/firestore/lite";
import * as dotenv from "dotenv";
dotenv.config();

const READ = false;
const WRITE = false;

// USE SPARINGLY AS WRITE LIMITS AREN'T INFINITE
// USE SPARINGLY AS WRITE LIMITS AREN'T INFINITE
// USE SPARINGLY AS WRITE LIMITS AREN'T INFINITE
addSampleData("Certificate", 0);
addSampleData("Department", 0);
addSampleData("Employee", 0);

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let firstNames = [
  "Aaren",
  "Ahtasham",
  "Allan-Laiton",
  "Aray",
  "Athon",
  "Beau",
  "Brandon",
  "Caie",
  "Cesare",
  "Colin",
  "Cyrus",
  "David-Lee",
  "Diarmaid",
  "Eduards",
  "Euan",
  "Francesco",
  "Griffin",
  "Haydon",
  "Isa",
  "Jarell",
  "Jock",
  "Justinas",
  "Kasim",
  "Kenzo",
  "Konnor",
  "Lauchlan",
  "Lloyd",
  "Maddox",
  "Maryk",
  "Milos",
  "Naif",
  "Odynn",
  "Pawlo",
  "Ramone",
  "Rhuaridh",
  "Ronin",
  "Salman",
  "Shaunpaul",
  "Stuart",
  "Teo",
  "Turner",
  "Wayne",
  "Zaid",
];
let lastNames = [
  "Baldwin",
  "Bentley",
  "Brady",
  "Byers",
  "Cervantes",
  "Combs",
  "Davenport",
  "Duke",
  "Finley",
  "Fulton",
  "Good",
  "Hansen",
  "Herring",
  "Houston",
  "Johnston",
  "Koch",
  "Lott",
  "Maynard",
  "Mcmahon",
  "Morales",
  "Noble",
  "Parks",
  "Potts",
  "Richardson",
  "Rowland",
  "Sexton",
  "Spears",
  "Terrell",
  "Velez",
  "West",
  "Wright",
];
let certificateNames = [
  "Azure Fundamentals",
  "Big Data",
  "Blockchain",
  "Cloud Computing",
  "Cyber Security",
  "Data Science",
  "DevOps",
  "Digital Marketing",
  "Internet of Things",
  "Machine Learning",
  "Project Management",
  "Software Engineering",
  "UX Design",
  "Web Development",
];
let jobTitles = [
  "Accountant",
  "Business Analyst",
  "Chief Executive Officer",
  "Data Scientist",
  "Engineer",
  "Financial Analyst",
  "Human Resources Manager",
  "Information Technology Manager",
  "Marketing Manager",
  "Product Manager",
  "Project Manager",
  "Sales Manager",
  "Software Developer",
  "Software Engineer",
  "Technical Support Specialist",
];
let roles = ["Admin", "Employee", "Manager"];
let vendors = [
  "Aspire",
  "BPP",
  "Cognizant",
  "Dell",
  "EY",
  "Fujitsu",
  "Google",
  "HPE",
  "IBM",
  "JPMorgan",
  "KPMG",
  "Lloyds",
  "Microsoft",
  "NHS",
  "Oracle",
  "PwC",
  "Qlik",
  "RBS",
];
let departments = ["Engineering", "Finance", "Human Resources", "Marketing"];
let domains = [
  "Scrum",
  "Agile",
  "DevOps",
  "Cloud Computing",
  "Cyber Security",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Internet of Things",
];

function createCertificateSampleData() {
  let name = certificateNames[
    Math.floor(Math.random() * certificateNames.length)
  ]
    .split(" ")
    .join("_");
  let id = `${name}___${crypto.randomUUID()}`;
  let domain = domains[Math.floor(Math.random() * domains.length)];
  let vendor = vendors[Math.floor(Math.random() * vendors.length)];
  let version = `${Math.floor(Math.random() * 10)}.${Math.floor(
    Math.random() * 10
  )}`;

  return {
    id,
    name,
    domain,
    vendor,
    version,
  };
}

function createDepartmentSampleData() {
  let name = departments[Math.floor(Math.random() * departments.length)];
  let id = `${name}___${crypto.randomUUID()}`;
  let managerId = "";

  return {
    id,
    name,
    managerId,
  };
}

function createEmployeeSampleData() {
  let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  let id = `${firstName}_${lastName}___${crypto.randomUUID()}`;
  let departmentId = "";
  let hashedPassword = `${firstName}_${lastName}`;
  let jobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
  let role = roles[Math.floor(Math.random() * roles.length)];
  let username = `${firstName}_${lastName}`;
  let certificates = [];

  return {
    id,
    firstName,
    lastName,
    departmentId,
    hashedPassword,
    jobTitle,
    role,
    username,
    certificates,
  };
}

async function addSampleData(collection, amount) {
  if (!WRITE) {
    console.log("WRITE is set to false");
    return;
  }
  if (amount > 5) {
    console.log("Amount is too high");
    return;
  }
  if (amount < 1) {
    console.log("Amount is too low");
    return;
  }
  const batch = writeBatch(db);
  switch (collection) {
    case "Certificate":
      for (let i = 0; i < amount; i++) {
        let certificate = createCertificateSampleData();
        const docRef = doc(db, "Certificate", certificate.id);
        batch.set(docRef, certificate);
      }
      break;
    case "Department":
      for (let i = 0; i < amount; i++) {
        let department = createDepartmentSampleData();
        const docRef = doc(db, "Department", department.id);
        batch.set(docRef, department);
      }
      break;
    case "Employee":
      for (let i = 0; i < amount; i++) {
        let employee = createEmployeeSampleData();
        const docRef = doc(db, "Employee", employee.id);
        batch.set(docRef, employee);
      }
      break;
    default:
      break;
  }
  await batch.commit();
}

// USE SPARINGLY AS READ LIMITS AREN'T INFINITE
// USE SPARINGLY AS READ LIMITS AREN'T INFINITE
// USE SPARINGLY AS READ LIMITS AREN'T INFINITE
if (READ) {
  // get all certificates from the "Certificate" collection
  const certificatesSnapshot = await getDocs(collection(db, "Certificate"));
  const certificatesList = certificatesSnapshot.docs.map((doc) => doc.data());
  // shorten the id for display purposes
  certificatesList.map((certificate) => {
    certificate.id = `${certificate.id.substring(0, 3)}...`;
    return certificate;
  });
  console.table(certificatesList, [
    "id",
    "name",
    "domain",
    "vendor",
    "version",
  ]);

  // get all employees from the "Employee" collection
  const employeesSnapshot = await getDocs(collection(db, "Employee"));
  const employeesList = employeesSnapshot.docs.map((doc) => doc.data());
  // shorten the id for display purposes
  employeesList.map((employee) => {
    employee.id = `${employee.id.substring(0, 3)}...`;
    return employee;
  });
  console.table(employeesList, [
    "id",
    "firstName",
    "lastName",
    "departmentId",
    "hashedPassword",
    "jobTitle",
    "role",
    "username",
    "certificates",
  ]);

  // get all Departments from the "Department" collection
  const departmentsSnapshot = await getDocs(collection(db, "Department"));
  const departmentsList = departmentsSnapshot.docs.map((doc) => doc.data());
  // shorten the id for display purposes
  departmentsList.map((department) => {
    department.id = `${department.id.substring(0, 3)}...`;
    return department;
  });
  console.table(departmentsList, ["id", "name", "managerId"]);
} else {
  console.log("Not showing any output as READ is set to false");
}
