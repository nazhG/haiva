import NextIcon from '../assets/nextIcon.jsx';
import FastForwardIcon from '../assets/fastForwardIcon.jsx';
import PlayIcon from '../assets/playIcon.jsx';

const ProcessedFile = () =>
(<>
    <h3 className="text-3xl font-medium mb-6 mt-12">Session <span className="text-primary">Output</span></h3>
    <p className="text-primary font-bold self-start mb-2 text-xl">Transcription</p>
    <p className="text-start mb-4 w-full">
        <span className="font-bold">Doctor</span>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit fringilla pretium. Integer euismod mauris nec porttitor rhoncus. Duis enim
        <br />
        <br />
        <span className="font-bold">Patient</span>: leo, tristique sed pretium eu, rhoncus in eros. Vivamus mollis dolor vitae ligula facilisis imperdiet. Proin venenatis ex ut erat feugiat sagittis. Aenean viverra varius risus. Morbi tellus leo, sollicitudin dapibus eros sit amet, blandit dictum neque. Nam leo ex, tincidunt a pretium sed, lobortis eleifend velit. Nulla facilisi. Fusce consequat ipsum vel libero feugiat vehicula. Curabitur dapibus felis lacus, ac consequat augue lobortis sit amet. Morbi sapien mi, ultricies in laoreet eu, accumsan a lectus.
        <span className="font-bold ml-2 cursor-pointer">Read More</span></p>

    <p className="text-primary font-bold self-start mb-2 text-xl">Acoustic Analysis</p>

    <p className="text-start w-full">
        Word, word, word, word, word, word
    </p>
    <br />
    <p className="text-primary font-bold self-start mb-4 text-xl">Recording</p>
    <div className="rounded-full bg-playbar-dark h-8 w-full overflow-hidden mb-4">
        <div className="h-full w-[62.5%] bg-playbar text-right text-white text-xs pr-2 content-center pt-[2px]">
            <span className="opacity-75">

            42:02
            </span>
        </div>
    </div>
    <div className="flex justify-between w-full">
        <span className="text-gray-500 text-sm">00:00</span>
        <div className="flex gap-2 items-center">
            <NextIcon className="cursor-pointer scale-x-[-1]" />
            <FastForwardIcon className="cursor-pointer scale-x-[-1]" />
            <PlayIcon className="cursor-pointer" />
            <FastForwardIcon className="cursor-pointer" />
            <NextIcon className="cursor-pointer" />
        </div>
        <span className="text-gray-500 text-sm">58:45</span>
    </div>
</>
)


export default ProcessedFile;