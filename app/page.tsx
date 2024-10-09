'use client'
import { useState, useEffect, ReactNode } from 'react'
import { Book, Cpu, FileCode, Layout, List, Terminal, Users, AlertTriangle, ChevronDown, ChevronUp, Menu } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const totalScroll = docHeight - windowHeight
      const progress = (scrollPosition / totalScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 relative">
      <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"></div>
      <header className="bg-blue-800 text-white py-6 md:py-12 relative overflow-hidden sticky top-0 z-50">
        <div className="absolute inset-0 bg-[url('/binary-code.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl md:text-4xl font-bold animate-fade-in-down">COAL Car Booking System</h1>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
          <p className="text-lg md:text-xl mb-6 animate-fade-in-up">Assembly Language Course Project Proposal</p>
          <div className={`flex flex-col md:flex-row md:flex-wrap gap-2 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
            <NavButton active={activeSection === 'overview'} onClick={() => setActiveSection('overview')}>Overview</NavButton>
            <NavButton active={activeSection === 'objectives'} onClick={() => setActiveSection('objectives')}>Objectives</NavButton>
            <NavButton active={activeSection === 'methodology'} onClick={() => setActiveSection('methodology')}>Methodology</NavButton>
            <NavButton active={activeSection === 'features'} onClick={() => setActiveSection('features')}>Features</NavButton>
            <NavButton active={activeSection === 'challenges'} onClick={() => setActiveSection('challenges')}>Challenges</NavButton>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-900">
          <div className="h-full bg-blue-300 transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <Section title="Project Overview" active={activeSection === 'overview'}>
          <p className="text-base md:text-lg mb-4">
            This COAL (Computer Organization and Assembly Language) project aims to develop a basic car booking system using assembly language. The system will demonstrate fundamental concepts of assembly programming while creating a practical application for managing car rentals.
          </p>
          <p className="text-base md:text-lg mb-4">
            By implementing core functionalities such as displaying available cars, managing bookings, and handling user inputs, this project will showcase the application of assembly language in creating interactive and functional software systems.
          </p>
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Project Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <HighlightCard title="Assembly Language" value="100%*" description="Pure assembly implementation (Subject to future course outline)" />
              <HighlightCard title="Memory Efficiency" value="Optimized" description="Efficient memory usage" />
              <HighlightCard title="User Interface" value="CLI" description="Command-line interface" />
            </div>
          </div>
        </Section>

        <Section title="Project Objectives" active={activeSection === 'objectives'}>
          <ul className="list-none pl-0 space-y-4">
            {[
              "Implement a basic car booking system using assembly language",
              "Demonstrate proficiency in memory management and data structures in assembly",
              "Create user input/output routines for interactive system operation",
              "Develop algorithms for searching and sorting car data in assembly",
              "Showcase the capability of assembly language in creating practical applications"
            ].map((objective, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 mt-1">
                  {index + 1}
                </div>
                <p className="text-base md:text-lg">{objective}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Methodology" active={activeSection === 'methodology'}>
          <div className="space-y-4 md:space-y-6">
            <MethodologyItem icon={<Cpu className="w-6 h-6 md:w-8 md:h-8" />} title="Assembly Language">
              Utilize x86 assembly language for system implementation, focusing on efficient memory usage and low-level operations.
            </MethodologyItem>
            <MethodologyItem icon={<Terminal className="w-6 h-6 md:w-8 md:h-8" />} title="MASM (Microsoft Macro Assembler)">
              Employ MASM for assembling and linking the project, leveraging its macro capabilities for code organization.
            </MethodologyItem>
            <MethodologyItem icon={<FileCode className="w-6 h-6 md:w-8 md:h-8" />} title="Modular Programming">
              Develop the system using modular programming techniques, creating separate procedures for different functionalities.
            </MethodologyItem>
            <MethodologyItem icon={<Layout className="w-6 h-6 md:w-8 md:h-8" />} title="Data Structures">
              Implement data structures for storing car and booking information using assembly language constructs.
            </MethodologyItem>
          </div>
        </Section>

        <Section title="Key Features" active={activeSection === 'features'}>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <FeatureCard icon={<List className="w-6 h-6 md:w-8 md:h-8" />} title="Display Fleet">
              Show available cars using assembly routines for data retrieval and display.
            </FeatureCard>
            <FeatureCard icon={<Book className="w-6 h-6 md:w-8 md:h-8" />} title="Booking Management">
              Implement booking creation and cancellation using low-level memory operations.
            </FeatureCard>
            <FeatureCard icon={<Terminal className="w-6 h-6 md:w-8 md:h-8" />} title="User Input Handling">
              Develop assembly procedures for processing and validating user inputs.
            </FeatureCard>
            <FeatureCard icon={<Users className="w-6 h-6 md:w-8 md:h-8" />} title="Multi-User Support">
              Create separate interfaces for car owners and customers using conditions.
            </FeatureCard>
          </div>
        </Section>

        <Section title="Technical Challenges" active={activeSection === 'challenges'}>
          <div className="space-y-4 md:space-y-6">
            <ChallengeItem title="Memory Management">
              Efficiently allocating and managing memory for dynamic data structures like car listings and bookings in a low-level environment.
            </ChallengeItem>
            <ChallengeItem title="String Manipulation">
              Implementing string operations for user inputs and data display without high-level language conveniences.
            </ChallengeItem>
            <ChallengeItem title="User Interface Design">
              Creating an interactive command-line interface with limited high-level abstractions available in assembly.
            </ChallengeItem>
            <ChallengeItem title="Error Handling">
              Developing robust error checking and handling mechanisms in a low-level programming environment.
            </ChallengeItem>
          </div>
        </Section>
      </main>

      <footer className="bg-gray-800 text-white py-6 md:py-8 mt-12 md:mt-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 COAL Car Booking System Project - University Assembly Language Course</p>
          <p className="mt-2">Development in Progress by Eshal, Saim, & Sahil</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/saim-x" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="mailto:k230708@nu.edu.pk" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface NavButtonProps {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}

function NavButton({ children, active, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-colors w-full md:w-auto ${
        active ? 'bg-white text-blue-800' : 'bg-blue-700 hover:bg-blue-600'
      }`}
    >
      {children}
    </button>
  )
}

interface SectionProps {
  title: string;
  children: ReactNode;
  active: boolean;
}

function Section({ title, children, active }: SectionProps) {
  const [isOpen, setIsOpen] = useState(active)

  useEffect(() => {
    setIsOpen(active)
  }, [active])

  return (
    <section className={`mb-6 md:mb-8 ${active ? 'animate-fade-in' : ''}`}>
      <button
        className="flex justify-between items-center w-full text-left text-2xl md:text-3xl font-semibold mb-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 md:w-6 md:h-6" /> : <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </section>
  )
}

interface MethodologyItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

function MethodologyItem({ icon, title, children }: MethodologyItemProps) {
  return (
    <div className="flex items-start bg-white bg-opacity-80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="mr-4 text-blue-500 bg-blue-100 p-2 md:p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-600">{children}</p>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-blue-500 bg-blue-100 p-2 md:p-3 rounded-full">{icon}</div>
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm md:text-base text-gray-600">{children}</p>
    </div>
  )
}

interface ChallengeItemProps {
  title: string;
  children: ReactNode;
}

function ChallengeItem({ title, children }: ChallengeItemProps) {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-2">
        <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 mr-2" />
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm md:text-base text-gray-600">{children}</p>
    </div>
  )
}

interface HighlightCardProps {
  title: string;
  value: string | number;
  description: string;
}

function HighlightCard({ title, value, description }: HighlightCardProps) {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-md text-center">
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{value}</p>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  )
}