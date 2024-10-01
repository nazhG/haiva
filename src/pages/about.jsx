import Banner from "./banner";

const About = () => {
    return (
        <main className="flex flex-col">
            <Banner />
            <br />
            <section className="flex flex-col items-center font-poppins">
                <h2 className="font-semibold text-xl mb-2">The Problem</h2>
                <h4 className="text-primary mb-12">Overburdened Therapists, Underserved Patients</h4>
                <div className="flex max-w-[1400px] gap-12 mb-20">
                    <img className="w-2/5 " src="https://s3-alpha-sig.figma.com/img/5474/a6b1/8be1fcc54af0c5f4934e6d940c1fece9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERBGW6aVqQhEGujLjbYEM02KwdSSCU10rNAlyThZPFgRruTAUUZ2Nw7qLoGXAMGdEI-EZoZb2rXCuUZ38rmeSR0xyqkGazbFMXOF9bnflox3SpCjby592BEi9TYQQYzu71kGBCCLtJ-hShHtealCnNyPLevHEvoRFcjokELsVRVhsMPT7figvUzsNvdSMwqaw5MfeuBjcckf7h-ZGB14ObvfKJQ5l~6p0Jnt1i6Vd6PqIUrAIHvpjmSmxapGuA1DDt3zgV3vKMIR1bI-k3YSNEWUiESZ0lw2DJ2cSmV4mX9EDDZGj7nqwbO9sEnfC-u4QCY12QgOl3SgU3LL64dnRw__" alt="Files" />
                    <div className="w-3/5 flex flex-col">
                        <p className="font-semibold mb-4">Challenges for Mental Health Professionals</p>
                        <ul className="list-disc h-full flex flex-col justify-between">
                            <li>High demand with limited resources</li>
                            <li>Therapists spend up to 30% of their time on admin tasks</li>
                            <li>Manual documentation is time-consuming and prone to errors</li>
                            <li>Burnout rates among professionals are alarmingly high</li>
                            <li>Lack of real-time emotional and behavioral analysis in sessions.</li>
                            <li>Difficulty in integrating new technologies with existing systems.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-16 w-full justify-center">
                    <div className="relative">
                        <p className="text-dark text-7xl font-russo w-fit mb-28 mx-4">21-61%</p>
                        <span className="absolute w-full -mt-24 text-center text-balance">Average rate of mental health practitioner burnout (pre-COVID)</span>
                    </div>
                    <div className="relative">
                        <p className="text-dark text-7xl font-russo w-fit mb-28 mx-4">78%</p>
                        <span className="absolute w-full -mt-24 text-center text-balance">Self-reported burnout in psychiatrists (2020 study)</span>
                    </div>
                </div>
                <div className="flex justify-center gap-12 max-w-[1000px] mb-16">
                    <div className="flex flex-col text-center w-1/4">
                        <p className="text-4xl text-light font-bold font-russo">1 billion people</p>
                        <p>affected by mental disorders globally</p>
                    </div>
                    <div className="flex flex-col text-center w-1/4">
                        <p className="text-4xl text-light font-bold font-russo">250 million adolescents</p>
                        <p>suffer from mental health issues</p>
                    </div>
                    <div className="flex flex-col text-center w-1/4">
                        <p className="text-4xl text-light font-bold font-russo">Severe shortage</p>
                        <p>of mental health professionals</p>
                    </div>
                    <div className="flex flex-col text-center w-1/4">
                        <p className="text-4xl text-light font-bold font-russo">$6 trillion global cost</p>
                        <p className="text-balance">of mental health disorder projected by 2030</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-center w-full mb-8 px-20">
                    <h4 className="font-semibold mb-2 text-2xl">Haiva Solution</h4>
                    <p className="text-primary mb-14">AI-Powered Mental Health Assistant</p>
                    <div className="flex gap-6 mb-11 items-center">
                        <span className="w-1/4 font-semibold text-3xl">What is <span className="text-light">haiva</span>?</span>
                        <div className="border-black border-l-[1px] h-28"></div>
                        <span className="w-3/4 font-light">Haiva is an AI-powered platform that supports mental health professionals by automating transcription, providing acoustic and emotional analysis, offering predictive analytics, and integrating seamlessly with existing workflows.</span>
                    </div>
                    <div className="flex gap-6 mb-16">
                        <div className="flex flex-col rounded-2xl bg-lightest px-2 w-1/5 gap-3 py-8">
                            <div className="w-24 h-24 bg-light rounded-lg mx-auto mb-1"></div>
                            <p className="font-semibold h-14">Automated Transcription</p>
                            <p className="font-light">Real-time, accurate transcription tailored for mental health sessions.</p>
                        </div>
                        <div className="flex flex-col rounded-2xl bg-lightest px-2 w-1/5 gap-3 py-8">
                            <div className="w-24 h-24 bg-light rounded-lg mx-auto mb-1"></div>
                            <p className="font-semibold h-14">Acoustic and Emotional Analysis</p>
                            <p className="font-light">Detects subtle emotional cues, providing deeper insights.</p>
                        </div>
                        <div className="flex flex-col rounded-2xl bg-lightest px-2 w-1/5 gap-3 py-8">
                            <div className="w-24 h-24 bg-light rounded-lg mx-auto mb-1"></div>
                            <p className="font-semibold h-14">Predictive Analytics</p>
                            <p className="font-light">Offers data-driven, personalized recommendations during sessions.</p>
                        </div>
                        <div className="flex flex-col rounded-2xl bg-lightest px-2 w-1/5 gap-3 py-8">
                            <div className="w-24 h-24 bg-light rounded-lg mx-auto mb-1"></div>
                            <p className="font-semibold h-14">Seamless Workflow Integration</p>
                            <p className="font-light">Integrates with existing Electronic Health Records for streamlined operations.</p>
                        </div>
                        <div className="flex flex-col rounded-2xl bg-lightest px-2 w-1/5 gap-3 py-8">
                            <div className="w-24 h-24 bg-light rounded-lg mx-auto mb-1"></div>
                            <p className="font-semibold h-14">Security and Compliance</p>
                            <p className="font-light">Adheres to HIPAA, GDPR, and EU AI Act regulations.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-under-banner-gradient text-center flex flex-col items-center w-full py-6 text-white">
                    <p className="text-4xl mb-3">Want to learn more about <span className="text-light">haiva</span>?</p>
                    <button className="bg-light py-4 px-8 font-light rounded-sm hover:bg-opacity-95 transition duration-300 hover:shadow-md">Learn More</button>
                </div>
            </section>
        </main>
    );
}

export default About;