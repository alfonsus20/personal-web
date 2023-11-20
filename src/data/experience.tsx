export interface ExperienceData {
  jobTitle: string;
  company: {
    name: string;
    websiteURL?: string;
  };
  location: string;
  startDate: string;
  endDate?: string;
  description: React.ReactNode;
}

const experienceList: ExperienceData[] = [
  {
    jobTitle: "Frontend Engineer (Contract)",
    company: { name: "McEasy", websiteURL: "https://mceasy.com" },
    location: "Surabaya, Indonesia",
    startDate: "Sep 2023",
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
  },
  // {
  //   jobTitle: "IT Specialist",
  //   company: {
  //     name: "Bank Central Asia",
  //     websiteURL: "https://www.bca.co.id/",
  //   },
  //   location: "Tangerang, Indonesia",
  //   startDate: "Apr 2023",
  //   endDate: "Aug 2023",
  //   description: (
  //     <>
  //       I created a standardized <span className="font-semibold">Vue.js 3</span>{" "}
  //       <span className="font-semibold">TypeScript</span> boilerplate for use
  //       across multiple repositories, offering configurable Sentry for error
  //       monitoring and Keycloak for secure authentication. Additionally, I
  //       successfully transformed a single-piece SAP HRIS project&apos;s frontend
  //       into a{" "}
  //       <span className="font-semibold">microfrontend</span> architecture using{" "}
  //       <span className="font-semibold">Vue.js</span> and{" "}
  //       <span className="font-semibold">Qiankun (Single SPA)</span>, resulting
  //       in one root app and three separate micro apps. This architectural shift
  //       allowed for parallel development and deployment. I conducted research to
  //       identify state-of-the-art frontend, backend, and end-to-end testing
  //       technologies to enhance project quality. Furthermore, I gathered user
  //       and stakeholder requirements and translated them into user interface
  //       designs using <span className="font-semibold">Figma</span>.
  //     </>
  //   ),
  // },
  {
    jobTitle: "Frontend Engineer Intern",
    company: {
      name: "Kalbe Group",
      websiteURL: "https://cakraradhamustika.com",
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
  },
  {
    jobTitle: "Frontend Engineer Intern",
    company: { name: "Garena", websiteURL: "https://www.garena.com" },
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
  },
  {
    jobTitle: "Frontend Engineer Intern",
    company: { name: "Tiket.com", websiteURL: "https://www.tiket.com/" },
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
  },
  {
    jobTitle: "Frontend Engineer Intern",
    company: { name: "Lingotalk" },
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
  },
];

export default experienceList;
