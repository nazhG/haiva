import { useRef, useState, useEffect } from 'react';
import NextIcon from '../assets/nextIcon.jsx';
import FastForwardIcon from '../assets/fastForwardIcon.jsx';
import PlayIcon from '../assets/playIcon.jsx';
import PauseIcon from '../assets/pauseIcon.jsx';

const AudioBar = ({
    file
}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        console.log('Playing');

        audioRef.current.play();
    }

    const handlePause = () => {
        console.log('Paused');
        audioRef.current.pause();
    }

    useEffect(() => {
        audioRef.current.addEventListener('play', () => {
            setIsPlaying(true);
        });

        audioRef.current.addEventListener('pause', () => {
            setIsPlaying(false);
        });

        return () => {
            audioRef.current.removeEventListener('play', () => {
                setIsPlaying(true);
            });

            audioRef.current.removeEventListener('pause', () => {
                setIsPlaying(false);
            });
        }
    }, []);

    return (
        <div className="flex justify-between w-full">
            <audio src={
                URL.createObjectURL(file)
            } controls className="w-full mb-4 hidden"
                ref={audioRef}
            >
            </audio>
            <span className="text-gray-500 text-sm">00:00</span>
            <div className="flex gap-2 items-center">
                <div className="rounded-full hover:bg-slate-400 hover:bg-opacity-10 p-[5px]">
                    <NextIcon className="cursor-pointer scale-x-[-1] antialiased" />
                </div>
                <div className="rounded-full hover:bg-slate-400 hover:bg-opacity-10 p-[5px]">
                    <FastForwardIcon className="cursor-pointer scale-x-[-1] antialiased" />
                </div>
                <div className="rounded-full hover:bg-slate-400 hover:bg-opacity-10 p-[5px]"
                    onClick={isPlaying ? handlePause : handlePlay}
                >
                    {
                        isPlaying ? <PauseIcon className="cursor-pointer antialiased" /> : <PlayIcon className="cursor-pointer antialiased" />
                    }
                </div>
                <div className="rounded-full hover:bg-slate-400 hover:bg-opacity-10 p-[5px]">
                    <FastForwardIcon className="cursor-pointer antialiased" />
                </div>
                <div className="rounded-full hover:bg-slate-400 hover:bg-opacity-10 p-[5px]">
                    <NextIcon className="cursor-pointer antialiased" />
                </div>
            </div>
            <span className="text-gray-500 text-sm">58:45</span>
        </div>
    );
}

export default AudioBar;