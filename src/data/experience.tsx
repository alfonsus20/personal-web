// Traveloka
import TravelokaLogo from "@/assets/images/experience/traveloka/logo.png";
import SCO2 from "@/assets/images/experience/traveloka/projects/sco/SCO-2.jpg";
import SCO3 from "@/assets/images/experience/traveloka/projects/sco/SCO-3.jpg";
import SCO4 from "@/assets/images/experience/traveloka/projects/sco/SCO-4.jpg";
import SCO5 from "@/assets/images/experience/traveloka/projects/sco/SCO-5.jpg";
import TrainSEOStation1 from "@/assets/images/experience/traveloka/projects/train-seo/station-1.png";
import TrainSEOStation2 from "@/assets/images/experience/traveloka/projects/train-seo/station-2.png";
import TrainSEOStation3 from "@/assets/images/experience/traveloka/projects/train-seo/station-3.png";
import TransSEORoute1 from "@/assets/images/experience/traveloka/projects/train-seo/route-1.png";
import Berau1 from "@/assets/images/experience/traveloka/projects/berau/berau-1.png";
import Berau2 from "@/assets/images/experience/traveloka/projects/berau/berau-2.png";
import Berau3 from "@/assets/images/experience/traveloka/projects/berau/berau-3.png";
import Berau4 from "@/assets/images/experience/traveloka/projects/berau/berau-4.png";
import Berau5 from "@/assets/images/experience/traveloka/projects/berau/berau-5.png";
import Berau6 from "@/assets/images/experience/traveloka/projects/berau/berau-6.png";
import Berau7 from "@/assets/images/experience/traveloka/projects/berau/berau-7.png";
import Berau8 from "@/assets/images/experience/traveloka/projects/berau/berau-8.png";

// McEasy
import McEasyLogo from "@/assets/images/experience/mceasy/logo.webp";
import FleetAvailability from "@/assets/images/experience/mceasy/projects/fleet-availability.png";
import FleetTask1 from "@/assets/images/experience/mceasy/projects/fleet-task.png";
import FleetTask2 from "@/assets/images/experience/mceasy/projects/fleet-task-2.png";
import Dashboard from "@/assets/images/experience/mceasy/projects/dashboard.png";
import OrderManagement from "@/assets/images/experience/mceasy/projects/delivery-order.png";
import OrderManagement2 from "@/assets/images/experience/mceasy/projects/delivery-order-2.png";
import Liveview from "@/assets/images/experience/mceasy/projects/liveview.png";

// Garena
import GarenaLogo from "@/assets/images/experience/garena/logo.png";
import GambitChest from "@/assets/images/experience/garena/projects/gambit-chest.png";
import LuckySpin from "@/assets/images/experience/garena/projects/lucky-spin.png";

// Tiket.com
import TiketLogo from "@/assets/images/experience/tiket/logo.png";
import Carpool from "@/assets/images/experience/tiket/projects/car-pool.png";
import Carpool2 from "@/assets/images/experience/tiket/projects/car-pool-2.png";
import Carpool3 from "@/assets/images/experience/tiket/projects/car-pool-3.png";
import Carpool4 from "@/assets/images/experience/tiket/projects/car-pool-4.png";
import Carpool5 from "@/assets/images/experience/tiket/projects/car-pool-5.png";
import Carpool6 from "@/assets/images/experience/tiket/projects/car-pool-6.png";
import CarRentalSeo from "@/assets/images/experience/tiket/projects/car-rental-seo.png";
import CarRentalDashboard from "@/assets/images/experience/tiket/projects/car-rental-dashboard.png";
import FlightDashboard from "@/assets/images/experience/tiket/projects/flight-dashboard.png";

// Kalbe
import KalbeLogo from "@/assets/images/experience/kalbe/logo.png";

// Lingotalk
import LingotalkLogo from "@/assets/images/experience/lingotalk/logo.webp";

import { StaticImageData } from "next/image";
import { FaLink } from "react-icons/fa";

type CompanyData = {
  name: string;
  websiteURL?: string;
  logo: StaticImageData;
  about: string;
};

type ProjectData = {
  name: string;
  screenshots: StaticImageData[];
  decription?: React.ReactNode;
  type?: "mobile" | "desktop";
};

export type ExperienceData = {
  jobTitle: string;
  company: CompanyData;
  location: string;
  startDate: string;
  endDate?: string;
  description: React.ReactNode;
  id: string;
  projects?: ProjectData[];
  memories?: StaticImageData[];
};

const experienceList: ExperienceData[] = [
  {
    jobTitle: "Software Engineer",
    company: {
      name: "Traveloka",
      websiteURL: "https://www.traveloka.com",
      logo: TravelokaLogo,
      about:
        "Traveloka is a leading Southeast Asian online travel company that provides a wide range of travel needs in one platform, enabling customers to create moments together with their loved ones. Traveloka offers flights, hotels, trains, flight + hotel packages, attractions & activities, connectivity products, airport transports, and buses.",
    },
    location: "Jakarta, Indonesia",
    startDate: "March 2024",
    description: (
      <ul>
        <li>
          Develop and maintain desktop and mobile web applications, internal
          tools, Chrome extensions, and mobile apps for{" "}
          <span className="font-semibold">six different business products</span>{" "}
          using{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">TypeScript</span>, and{" "}
          <span className="font-semibold">React Native</span>.
        </li>
        <li>
          Migrated internal CI/CD pipelines from{" "}
          <span className="font-semibold">AWS CodeBuild</span> to{" "}
          <span className="font-semibold">GitHub Actions</span>, implementing
          caching strategies that reduced build and deployment time by{" "}
          <span className="font-semibold">42%</span>.
        </li>
        <li>
          Take the initiative to resolve security vulnerabilities across{" "}
          <span className="font-semibold">9 repositories</span>, resolve{" "}
          <span className="font-semibold">79 critical</span> and{" "}
          <span className="font-semibold">403 high-priority</span>{" "}
          vulnerabilities, modernize outdated tools, and improve system security
          and maintainability.
        </li>
        <li>
          Develop web end-to-end automation test cases using{" "}
          <span className="font-semibold">Playwright</span>, increasing test
          coverage by{" "}
          <span className="font-semibold">49.58%</span>, reducing manual effort, and improving testing
          stability.
        </li>
        <li>
          Automated business processes with{" "}
          <span className="font-semibold">Puppeteer</span> and{" "}
          <span className="font-semibold">UiPath RPA</span>, saving{" "}
          <span className="font-semibold">~$1,800/month</span>{" "}
          in operational costs.
        </li>
        <li>
          Mentor interns and new joiners by providing technical guidance,
          onboarding support, and regular code reviews.
        </li>
        <li>
          Participated in on-call rotations and documented technical
          specifications and design decisions.
        </li>
      </ul>
    ),
    id: "traveloka",
    projects: [
      {
        name: "Bus Reschedule",
        screenshots: [Berau1, Berau2, Berau3, Berau4, Berau5, Berau6, Berau7, Berau8],
        type: "mobile",
      },
      {
        name: "Insurance Checkout Page",
        screenshots: [SCO2, SCO3, SCO4, SCO5],
        type: "mobile",
      },
      {
        name: "Train SEO Page",
        screenshots: [
          TrainSEOStation1,
          TrainSEOStation2,
          TrainSEOStation3,
          TransSEORoute1,
        ],
        decription: (
          <ul>
            <li>
              <a
                href="https://www.traveloka.com/id-id/kereta-api/stasiun/gambir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 inline-flex items-center"
              >
                Gambir Station Page <FaLink className="ml-1" />
              </a>
            </li>
            <li>
              <a
                href="https://www.traveloka.com/id-id/kereta-api/rute/jakarta.yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 inline-flex items-center"
              >
                Train from Jakarta to Yogyakarta <FaLink className="ml-1" />
              </a>
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    jobTitle: "Frontend Engineer",
    company: {
      name: "McEasy",
      websiteURL: "https://mceasy.com",
      logo: McEasyLogo,
      about:
        "McEasy is a technology innovation company specializing in providing integrated digital solutions for transportation and supply chain management. As a pioneer in developing platforms connected to the Internet of Things (IoT) and telematics, McEasy enhances operational efficiency across various business sectors. Through the development of the Fleet Transportation Management System (FTMS), McEasy improves efficiency, productivity, safety, and visibility in the transportation sector's operations in Indonesia.",
    },
    location: "Surabaya, Indonesia",
    startDate: "Sep 2023",
    endDate: "March 2024",
    description: (
      <>
        I&apos;m currently working on an exciting project to create a logistic
        and supply chain software using{" "}
        <span className="font-semibold">Vue.js</span>,{" "}
        <span className="font-semibold">Bootstrap</span>,{" "}
        <span className="font-semibold">Vuex</span>, and{" "}
        <span className="font-semibold">SASS</span>. This helps us build a
        user-friendly and responsive interface. I&apos;m also making data look
        awesome with <span className="font-semibold">Chart.js</span> and
        integrating Google Maps for location services. And, I make sure our code
        is top-notch by reviewing what our team and others contribute, making
        sure we stick to the best practices and project guidelines.
      </>
    ),
    id: "mceasy",
    projects: [
      { name: "Dashboard", screenshots: [Dashboard] },
      { name: "Fleet Availability", screenshots: [FleetAvailability] },
      { name: "Liveview Monitoring", screenshots: [Liveview] },
      { name: "Fleet Task Management", screenshots: [FleetTask1, FleetTask2] },
      {
        name: "Order Management",
        screenshots: [OrderManagement, OrderManagement2],
      },
    ],
  },
  {
    jobTitle: "Frontend Engineer Intern",
    company: {
      name: "Kalbe Group",
      websiteURL: "https://cakraradhamustika.com",
      logo: KalbeLogo,
      about:
        "PT Cakra Radha Mustika is a Total Business Solution-based company that provides services by helping other companies run projects or campaigns from the initial process to the final step. These services start from building the foundation of a company's brand to reach a bigger audience (brand awareness), effectively creating or changing user behavior (lead generation), running acquisition programs to conducting customer retention.",
    },
    location: "Jakarta, Indonesia",
    startDate: "Jan 2023",
    endDate: "Apr 2023",
    description: (
      <>
        I took charge of developing our Human Resource Management System and our
        company profile website using{" "}
        <span className="font-semibold">Next.js</span>,{" "}
        <span className="font-semibold">Typescript</span>,{" "}
        <span className="font-semibold">Tailwind CSS</span>, and{" "}
        <span className="font-semibold">React Query</span>. The successful
        delivery of these projects earned positive feedback from our
        stakeholders. I also improved security and usability by implementing
        single sign-on through our login portal.
      </>
    ),
    id: "kalbe",
  },
  {
    jobTitle: "Frontend Engineer Intern",
    company: {
      name: "Garena",
      websiteURL: "https://www.garena.com",
      logo: GarenaLogo,
      about:
        "Garena is a Singaporean game developer and publisher of free online games. It is the digital entertainment arm of parent company Sea Ltd, which was formerly named Garena.",
    },
    location: "Jakarta, Indonesia",
    startDate: "Aug 2022",
    endDate: "Nov 2022",
    description: (
      <>
        I transformed UI designs into responsive gamified websites using{" "}
        <span className="font-semibold">React.js</span>,{" "}
        <span className="font-semibold">Redux</span>, and{" "}
        <span className="font-semibold">SASS</span>. I also built and maintained
        five in-game event websites for Garena and used a Linux-based virtual
        machine along with Gitlab for collaboration.
      </>
    ),
    id: "garena",
    projects: [
      { name: "Lucky Spin", screenshots: [LuckySpin] },
      { name: "Gambit Chest", screenshots: [GambitChest] },
    ],
  },
  {
    jobTitle: "Frontend Engineer Intern",
    company: {
      name: "Tiket.com",
      websiteURL: "https://www.tiket.com/",
      logo: TiketLogo,
      about:
        "Tiket.com is a prominent Indonesian online travel and entertainment platform headquartered in Jakarta. Specializing in flight and hotel bookings, holiday packages, and event ticketing, Tiket.com is recognized for its commitment to digital innovation and enhancing user experiences in the dynamic online travel sector.",
    },
    location: "Jakarta, Indonesia",
    startDate: "Dec 2021",
    endDate: "Jul 2022",
    description: (
      <>
        Utilized Scrum development methodologies and{" "}
        <span className="font-semibold">Jira</span> as a collaboration tool. I
        took charge of resolving critical bugs and implementing new features in
        the flight and ground transport dashboard repositories, utilizing{" "}
        <span className="font-semibold">React.js</span> and{" "}
        <span className="font-semibold">Redux</span> as the primary technologies
        for state management. I also implemented new test cases using{" "}
        <span className="font-semibold">Jest</span>,{" "}
        <span className="font-semibold">React Testing Library</span>, and{" "}
        <span className="font-semibold">Enzyme</span>, resulting in a 12%
        increase in unit testing coverage for the flight dashboard repository,
        as reported by SonarQube.
      </>
    ),
    id: "tiket",
    projects: [
      {
        name: "Car Pool Management (Car Rental)",
        screenshots: [
          Carpool,
          Carpool2,
          Carpool3,
          Carpool4,
          Carpool5,
          Carpool6,
        ],
      },
      {
        name: "Car Rental SEO Dashboard",
        screenshots: [CarRentalSeo],
      },
      {
        name: "Car Rental Dashboard",
        screenshots: [CarRentalDashboard],
      },
      {
        name: "Flight Dashboard",
        screenshots: [FlightDashboard],
      },
    ],
  },
  {
    jobTitle: "Frontend Engineer Intern",
    company: {
      name: "Lingotalk",
      logo: LingotalkLogo,
      about:
        "Established in 2017, LingoTalk provides efficient language learning solutions, offering courses in 10 languages on web and mobile platforms. With recent investor support and participation in programs like Alibaba's accelerator, LingoTalk invites emerging talents to join its mission of transforming language education in Indonesia.",
    },
    location: "Jakarta, Indonesia",
    startDate: "Apr 2021",
    endDate: "Aug 2021",
    description: (
      <>
        Built the IELTS/TOEFL test system and internal admin dashboard from the
        ground up, ensuring seamless integration and functionality across all
        components. Collaborated with product and design teams to deliver a
        modern and intuitive website, leveraging{" "}
        <span className="font-semibold">Svelte.js (Sapper)</span> to develop
        efficient and scalable web applications.
      </>
    ),
    id: "lingotalk",
  },
];

export default experienceList;
