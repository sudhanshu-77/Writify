import React from 'react';
import CallToAction from '../Components/CallToAction';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Support My Thesis on Brain Tumor ',
      author: 'By Sudhanshu',
      description: 'This thesis examines the latest advancements in the diagnosis and treatment of brain tumors, emphasizing innovative imaging techniques, molecular profiling, and cutting-edge therapies such as precision surgery, targeted chemotherapy, and immunotherapy. By analyzing current practices and future prospects, the thesis aims to improve patient outcomes and highlight potential breakthroughs in brain tumor management.',
      supportLink: 'https://www.buymeacoffee.com/sudhanshu77',
      githubLink: 'https://github.com/sudhanshu-77',
      imageUrl: 'https://c0.wallpaperflare.com/preview/262/991/578/dna-genetic-material-helix-proteins.jpg'
    },
    {
      id: 2,
      title: 'Support My Project on Artificial Intelligence',
      author: ' By Sudhanshu',
      description: 'Artificial Intelligence (AI) is a branch of computer science focused on creating systems capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding. AI technologies power applications such as speech recognition, autonomous vehicles, recommendation systems, and natural language processing. By mimicking cognitive functions, AI aims to enhance decision-making and automate complex processes, transforming various industries and everyday life.',
      supportLink: 'https://www.buymeacoffee.com/creator1',
      githubLink: 'https://github.com/creator1/ai-project',
      imageUrl: 'https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.webp?s=2048x2048&w=is&k=20&c=8eruy8bG_f0KSDLSAMeF76eeZWJHk-Tg1PLCwMhx_Yw='
    },
    {
      id: 3,
      title: 'Support My Project Car Rental System',
      author: 'By Varshithvhegde',
      description: 'A car rental system is a software application that enables customers to rent vehicles from a rental company efficiently. It manages reservations, vehicle availability, customer information, and billing, streamlining the rental process and improving customer service. The system often includes features such as online booking, real-time vehicle tracking, and automated payment processing.',
      supportLink: 'https://www.buymeacoffee.com/creator2',
      githubLink: 'https://github.com/Varshithvhegde/car_rental_project',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg'
    },
    {
      id: 4,
      title: 'Support My Project AirTracker',
      author: 'By Sudhanshu',
      description: 'AirTracker: A MERN Stack Application Objective: The main objectives of this project are to develop a web application that allows users to Search for the cheapest flights & Track ticket prices.',
      supportLink: 'https://www.buymeacoffee.com/creator3',
      githubLink: 'https://github.com/sudhanshu-77/AirTracker',
      imageUrl: 'https://cdn.pixabay.com/photo/2014/11/02/10/41/plane-513641_640.jpg'
    },
    {
      id: 5,
      title: 'Support My Project on Web Designs',
      author: 'By Unknown',
      description: 'Web design is the process of creating visually appealing and user-friendly websites. It involves a combination of graphic design, user experience (UX) design, and interface design to ensure the website is easy to navigate and provides a seamless experience across various devices. Key elements include layout, color schemes, typography, and responsive design. Web designers use tools like HTML, CSS, and JavaScript to bring their designs to life.',
      supportLink: 'https://www.buymeacoffee.com/creator4',
      githubLink: 'https://github.com/creator4/project-four',
      imageUrl: 'https://media.istockphoto.com/id/1060739400/photo/web-design-technology-browsing-programming-concept.jpg?s=2048x2048&w=is&k=20&c=LfnkvxAHrIQd2KvhMEIrWJyTUNjU0cVd3qKqvT4ZFhU='
    },
    {
      id: 6,
      title: 'Support My Project on Blockhain',
      author: 'By Author',
      description: 'Blockchain is a decentralized, distributed ledger technology that securely records transactions across multiple computers. It ensures transparency, immutability, and security by using cryptographic techniques, making it ideal for applications like cryptocurrency, supply chain management, and smart contracts..',
      supportLink: 'https://www.buymeacoffee.com/creator6',
      githubLink: 'https://github.com/creator6/project-six',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/403/467/730/technology-bitcoin-coin-money-wallpaper-preview.jpg'
    },
    {
      id: 7,
      title: 'Support My Project on Digital Library',
      author: 'By Sudhanshu ',
      description: 'A digital library is an online repository of digital content, including e-books, academic papers, multimedia, and other resources. It provides users with easy access to a vast collection of materials, enabling efficient search, retrieval, and management of information. Digital libraries support remote access, ensuring that users can access resources from anywhere, at any time..',
      supportLink: 'https://www.buymeacoffee.com/creator7',
      githubLink: 'https://github.com/creator7/project-seven',
      imageUrl: 'https://c0.wallpaperflare.com/preview/744/528/60/return-writer-book-reading.jpg'
    }
  ];

  return (
    <div className='min-h-screen max-w-4xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>Build fun and engaging Projects while learning and share with others. </p>
      <div className='w-full flex flex-col gap-6'>
        {projects.map(project => (
          <div 
            key={project.id} 
            className='border p-4 rounded-lg transition-transform transform hover:scale-105 active:scale-95 cursor-pointer w-full'
          >
            <img src={project.imageUrl} alt={project.title} className='w-full h-48 object-cover rounded-t-lg mb-4' />
            <h2 className='text-xl font-semibold'>{project.title}</h2>
            <p className='text-md text-gray-500'><strong>{project.author}</strong></p>
            <p className='text-md text-gray-500'>{project.description}</p>
            <div className='mt-2'>
              <a 
                href={project.githubLink} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-blue-500 hover:underline block'
              >
                View on GitHub
              </a>
              <a 
                href={project.supportLink} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-blue-500 hover:underline block mt-1'
              >
                Buy Me a Coffee
              </a>
            </div>
          </div>
        ))}
      </div>
      <CallToAction />
    </div>
  );
}

export default Projects;
