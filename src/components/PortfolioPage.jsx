import JSFCAImage from "../assets/images/JSFCA.png";
import PE2Image from "../assets/images/PE2.png";
import SP2Image from "../assets/images/SP2.png";
import KarlImage from "../assets/images/Karl.jpg";



const profile = {
  name: 'Karl-Morten Kvammen',
  description: 'Junior Frontend Developer looking for employment and excited for new experiences and skills',
  image: KarlImage,
  github: 'https://github.com/Tactikerl',
  email: 'karlmkvammen@hotmail.com'
};

const projects = [
    {
      title: 'Semester Project 2',
      description: 'This application is developed to emulate a fictional auction house. Users can register with a @stud.noroff email address to create listings with fictional items and bid on listings from other users. Registered users can also check their profile to see acumulated credits, how many listings they have made and how many auctions they have won. non registered users may browse the listings front page and search through them, but have to log in or register an account to access the full app.',
      image: SP2Image,
      repo: 'https://github.com/Tactikerl/SP2-Noroff-Auction-Application.git',
      liveSite: 'https://tactikerl.github.io/SP2-Noroff-Auction-Application/'
    },
    {
      title: 'JavaScript Frameworks CA',
      description: 'This is my JavaScript Frameworks CA. In this CA i have created a e-commerce site using React. The site is a fictional site for an unnamed company, and the main focus of the CA is to show my understanding of React and how to use it to create a site for e-commerce.',
      image: JSFCAImage,
      repo: 'https://github.com/Tactikerl/eCommmerce-app-CA.git',
      liveSite: 'https://storied-twilight-7cfba6.netlify.app/'
    },
    {
      title: 'Project Exam 2',
      description: 'This is my Project Exam for the fourth and last semester of FED(Front-end Development) at Noroff. The exam took 7 weeks and i have tried to create a accommodation booking site following User Stories provided in the exam brief we received.',
      image: PE2Image,
      repo: 'https://github.com/Tactikerl/pe2-react-app.git',
      liveSite: 'https://pe2-kmk-holidaze.netlify.app/'
    }
  ];

  const Link = ({ href, children }) => (
    <a href={href} className="text-blue-500 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">{children}</a>
  );

  
  const ProjectCard = ({ image, title, description, repo, liveSite }) => (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md w-full md:w-2/3 lg:w-2/3 xl:w-2/3 min-h-96 md:min-h-screen/2 m-3">
      <img className="h-36 w-full object-cover rounded-lg md:w-1/3 md:h-auto" src={image} alt={title} />
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div className="mb-4">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
        <div>
          <Link href={repo}>Github Repo</Link>
          {liveSite && (
            <>
              <span> | </span>
              <Link href={liveSite}>Live Site</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );

 

  
  const ProfileCard = ({ image, name, description, email, github }) => (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md  max-w-sm md:max-w-md mx-auto md:mx-0 md:min-h-screen/4 m-3">
      <div className="rounded-lg flex items-center justify-center bg-gray-100 md:flex-basis-1/2 ">
        <img className=" md:w-full rounded-lg md:h-full" src={image} alt={name} />
      </div>
      <div className="p-8 flex flex-col justify-between flex-grow md:flex-basis-1/2">
        <div className="mb-4">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
        <Link href={`mailto:${email}`}>Email me</Link>
        <Link href={github}>Github Profile</Link>
      </div>
    </div>
  );

const PortfolioPage = () => (
  <div className="p-6 flex flex-col items-center bg-purple-950 h-full">
    <ProfileCard {...profile} />
    {projects.map((project) => (
      <ProjectCard key={project.repo} {...project} />
    ))}
  </div>
);
  
  
  
  export default PortfolioPage;