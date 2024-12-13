// const ContactForm = () => {
//   return (
//     <div className="h-screen xl:px-16 w-full px-5  py-10   ">
//       <div className="border-t border-black flex flex-col gap-3  h-full ">

//         <span className="animate-slideIn text-4xl py-8">
//           Your contact information
//         </span>
        
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define the validation schema using Zod
const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    company: z.string().min(1, "Company name is required"),
    projectDetails: z.string().min(1, "Project details are required"),
    budget: z.string().min(1, "Budget selection is required"),
    finishedProject: z.string().min(1, "Finished project selection is required"),
    files: z.instanceof(FileList).optional(),
});

type IFormInput = z.infer<typeof FormSchema>;

const ContactForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: zodResolver(FormSchema),
    });

    const [budget, setBudget] = useState<string>('');
    const [finishedProject, setFinishedProject] = useState<string>('');
    const [files, setFiles] = useState<FileList | null>(null);

    const onSubmit = (data: IFormInput) => {
        console.log('Form submitted successfully!', data);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-b border-black pb-4 mb-4">
                    <h2 className="text-xl font-bold mb-4">Your contact information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className={`w-full p-4 border rounded-lg ${errors.name ? 'border-red-500' : ''}`}
                            {...register("name")}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        
                        <input
                            type="email"
                            placeholder="E-mail"
                            className={`w-full p-4 border rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        
                        <input
                            type="text"
                            placeholder="Phone number"
                            className={`w-full p-4 border rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
                            {...register("phone")}
                        />
                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                        
                        <input
                            type="text"
                            placeholder="Company or project name"
                            className={`w-full p-4 border rounded-lg ${errors.company ? 'border-red-500' : ''}`}
                            {...register("company")}
                        />
                        {errors.company && <p className="text-red-500">{errors.company.message}</p>}
                    </div>
                </div>

                <div className="border-b border-black pb-4 mb-4">
                    <h2 className="text-xl font-bold mb-4">Budget</h2>
                    <div className="flex flex-wrap gap-4">
                        {['Under 10,000 €', '10,000 € - 20,000 €', '20,000 € - 30,000 €', '30,000 € - 40,000 €', 'Over 50,000 €'].map((option) => (
                            <button
                                type="button"
                                key={option}
                                className={`px-4 py-2 border rounded-lg ${budget === option ? 'bg-green-500 text-white' : ''}`}
                                onClick={() => setBudget(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {errors.budget && <p className="text-red-500">{errors.budget.message}</p>}
                </div>

                <div className="border-b border-black pb-4 mb-4">
                    <h2 className="text-xl font-bold mb -4">Finished project</h2>
                    <div className="flex flex-wrap gap-4">
                        {['We need it available', 'In next 2 months', 'In next 6 months', 'Less than 6 months'].map((option) => (
                            <button
                                type="button"
                                key={option}
                                className={`px-4 py-2 border rounded-lg ${finishedProject === option ? 'bg-green-500 text-white' : ''}`}
                                onClick={() => setFinishedProject(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {errors.finishedProject && <p className="text-red-500">{errors.finishedProject.message}</p>}
                </div>

                <div className="border-b border-black pb-4 mb-4">
                    <h2 className="text-xl font-bold mb-4">About the project</h2>
                    <textarea
                        placeholder="Tell us more about your project"
                        className={`w-full p-4 border rounded-lg h-32 ${errors.projectDetails ? 'border-red-500' : ''}`}
                        {...register("projectDetails")}
                    ></textarea>
                    {errors.projectDetails && <p className="text-red-500">{errors.projectDetails.message}</p>}
                    <div className="flex items-center mt-2">
                        <input
                            type="file"
                            className="hidden"
                            {...register("files")}
                            onChange={(e) => setFiles(e.target.files)}
                        />
                        <label className="text-green-500 cursor-pointer" htmlFor="file-upload">
                            <i className="fas fa-paperclip"></i> Attach files related to project
                        </label>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-full flex items-center">
                        <i className="fas fa-arrow-right mr-2"></i> SUBMIT
                    </button>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-gray-500"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-gray-500"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-500"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;