import { s } from "@/app/styles"

export const OurServices = () => {
    return <section className={`${s.container} pt-[3.75rem] pb-20`}>
        <div className="w-full grid grid-flow-row place-items-center gap-0">
            <h2 className={s.h2title}>Our services</h2>
            <div className="grid grid-flow-col place-items-center gap-12">
                <div className="grid grid-flow-row gap-32 mt-[16rem]">
                    <div className={s.serviceBox}>
                        <h4 className={s.h4title}>Back-end<br />Development</h4>
                    </div>
                    <div className={s.serviceBox}>
                        <h4 className={s.h4title}>AI<br />Development</h4>
                    </div>
                    <div className={s.serviceBox2}>
                        <h3 className={`${s.h4title} mb-4`}>Team<br />Augmentation</h3>
                        <p className={`${s.text} max-w-[14rem]`}>Hire an individual or let us put together a custom group of professionals who become a dedicated extension of your team.</p>
                    </div>
                </div>
                <div className="w-[1.75rem] h-[41.75rem] bg-no-repeat bg-contain bg-center bg-[url('./images/our_services_tabs.png')]" />
                <div className="grid grid-flow-row gap-32 mt-[-8rem]">
                    <div className={s.serviceBox2}>
                        <h4 className={`${s.h4title} mb-4`}>Mobile<br />Development</h4>
                        <p className={`${s.text} max-w-[14rem]`}>We are experts in iOS and Android native development, as well as React Native.</p>
                    </div>
                    <div className={`${s.serviceBox} mt-[-4rem]`}>
                        <h4 className={s.h4title}>Front-end<br />Development</h4>
                    </div>
                    <div className={s.serviceBox}>
                        <h4 className={s.h4title}>Computer Vision<br />Development</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
}