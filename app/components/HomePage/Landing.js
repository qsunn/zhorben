import { s } from "@/app/styles"

export const Landing = () => {
    const list = [
        'Our principles',
        'Laser focus on your product and business goals',
        'Only dedicated project teams; no cross-project sharing',
        'Only full-time senior engineers who know your industry',
        'Vetting and verification of team member expertise in industry-leading technology standards and methodologies',
        'Always clear, transparent communications with you about everything',
    ]

    return <section className={`${s.container} bg-no-repeat bg-right-top bg-auto pt-[16rem] pb-[3.75rem] bg-[url('./images/uzor.png')]`}>
        <div className="w-full grid grid-flow-row">
            <div className="max-w-[39.25rem] grid grid-flow-row gap-8 place-items-start mb-[15.75rem]">
                <h1 className="text-4xl font-semibold">Build and scale your business fast with our world-class senior developers</h1>
                <p className="max-w-[32.875rem] text-2xl mb-4">Hire our full-time team of senior developers to launch, accelerate, and support your business applications. Mobile. Web. AI.</p>
                <button className={`font-semibold text-lg rounded-[30px] bg-[#F9F9F9] px-10 py-3 buttonBox`}>Let&apos;s chat</button>
            </div>
            <ul className="grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-5">
                {list.map((item) => <li key={item} className={`listBox p-[2.625rem] rounded-[15px] bg-[#F5F5F5] grid place-items-center font-semibold text-xl text-center`}>{item}</li>)}
            </ul>
        </div>
    </section>
}