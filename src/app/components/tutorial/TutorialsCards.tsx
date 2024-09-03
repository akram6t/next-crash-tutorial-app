// components/ProgrammingLanguagesCards.tsx

import { IconBrandPython, IconChevronRight } from '@tabler/icons-react';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const languages = [
    { name: 'Python', icon: "faPython", description: 'Python is a high-level, interpreted programming language known for its simplicity and versatility.' },
    { name: 'JavaScript', icon: "faJs", description: 'JavaScript is a versatile scripting language primarily used for web development.' },
    { name: 'Java', icon: "faJava", description: 'Java is a popular object-oriented programming language known for its "write once, run anywhere" philosophy.' },
    { name: 'C++', icon: "faCode", description: 'C++ is a powerful, high-performance programming language used in system/application software and game development.' },
    { name: 'Ruby', icon: "faCode", description: 'Ruby is a dynamic, object-oriented programming language focused on simplicity and productivity.' },
    { name: 'PHP', icon: "faPhp", description: 'PHP is a server-side scripting language designed for web development.' },
    { name: 'Swift', icon: "faSwift", description: 'Swift is a powerful and intuitive programming language for iOS, macOS, and other Apple platforms.' },
    { name: 'Go', icon: "faCode", description: 'Go is a statically typed, compiled language designed for simplicity, concurrency, and efficiency.' }
];

export default function TutorialsCards() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Learn easy tutorials</h2>
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white flex items-center font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                    View more
                    <IconChevronRight className="ml-2" size={20} />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {languages.map((language, index) => (
                    <div key={index} className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-white">{language.name}</h2>
                                <IconBrandPython className="text-3xl text-white" />
                            </div>
                            <p className="text-white mb-6 line-clamp-2">{language.description}</p>
                            <div className="flex justify-end">
                                <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-full flex items-center hover:bg-opacity-90 transition-colors">
                                    Learn More
                                    <ArrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};