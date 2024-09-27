import { useState, useRef } from 'react';
import FileIcon from '../assets/fileIcon.jsx';
import Loader from './loader.jsx';
import ProcessedFile from './processedFile.jsx';

const DragAndDrop = () => {
    const [dropZoneOver, setDropZoneOver] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState(null);

    const dropZone = useRef(null);
    const fileInput = useRef(null);

    const handleDropOver = (e) => {
        e.preventDefault();
        setDropZoneOver(true);
    }

    const handleDragLeave = () => setDropZoneOver(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setDropZoneOver(false);
        const files = e.dataTransfer.files;
        handleFiles(files);

    }

    const handleFiles = (files) => {
        console.log('Archivos subidos:', files);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setFile(files[0]);
        }, 1500);
    }


    return (
        <main className="flex flex-col">
            <section className="text-3xl p-24 sm:p-6 bg-dashboard-img text-white text-shadow">
                <h2 className="w-1/2 sm:w-full mb-2 text-balance font-poppins">Therapist Mental Well-being <span
                    className="font-bold">Matters</span></h2>
                <p className="w-[30%] sm:w-3/4 text-xs text-shadow">At <span className="font-bold">innerecho</span>, we are merging compassionate
                    care with cutting-edge AI to empower mental health
                    professionals.</p>
                <button className="text-xs py-3 px-9 border rounded border-gray-900 bg-white text-gray-950 mt-4">Learn more</button>
            </section>
            <section className="flex flex-1 flex-col text-center items-center pb-10 sm:pb-4 px-14 sm:px-6">
                {
                    file && !isLoading && (
                        <ProcessedFile />
                    )
                }
                {
                    !file && (
                        <>
                            <h3 className="text-3xl font-medium mb-6 mt-12">Reclaim <span className="text-primary">Your</span> Time</h3>
                            <span className="text-xs mx-auto">Automate administrative tasks to focus on patient care!<br />
                                Simply upload the session recording below</span>
                            <div
                                onDragOver={handleDropOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                ref={dropZone}
                                className={`${dropZoneOver ? 'dragovered' : ''} max-h-[500px] max-w-[900px] flex flex-1 flex-col items-center justify-center gap-4 mt-8 w-2/3 rounded-sm border border-dashed border-opacity-60 border-secondary py-24 transition-all md:w-full`}>
                                <div id="drop-zone-text" className="flex flex-col text-center gap-4 items-center">
                                    {
                                        isLoading ? (<Loader />) :
                                            (
                                                <>
                                                    <FileIcon />
                                                    <input 
                                                        onChange={(e) => handleFiles(e.target.files)}
                                                        type="file" 
                                                        id="file-input" 
                                                        className="hidden" 
                                                        ref={fileInput} />
                                                    <span className="text-xs text-secondary">or drag and drop</span>
                                                    <label htmlFor="file"
                                                        className="text-sm py-3 px-10 rounded bg-primary text-white cursor-pointer transition-all duration-500 transform-gpu will-change-transform hover:scale-105"
                                                        onClick={() => fileInput.current.click()}>
                                                        Select Files
                                                        </label>
                                                </>
                                            )
                                    }
                                </div>
                            </div>
                        </>
                    )
                }
            </section>
            <br />
        </main>
    );
}

export default DragAndDrop;