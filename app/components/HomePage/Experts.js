import { s } from "@/app/styles"

export const Experts = () => {
    const tech = [
        {
            name: 'Front-end developers',
            desc: 'We follow trends in UI/UX and industry standards while infusing artistic vision into each product.',
            techs: ['React', 'Angular', 'Electron', 'Typescript']
        }, {
            name: 'Back-end developers',
            desc: 'We create scalable back-end infrastructure.',
            techs: ['Node.js', 'Express', 'Next.js', 'Nest.js', 'PHP', 'Symfony', 'Laravel', 'Lumen', 'Yii', 'Go', 'Python']
        }, {
            name: 'Mobile app development',
            desc: 'We create powerful native iOS and Android mobile apps.',
            techs: ['Swift', 'ObjectiveC', 'Java', 'Kotlin', 'React Native']
        }, {
            name: 'AI Developers',
            desc: 'Sophisticated machine learning solutions to power any mobile or web app user experience.',
            techs: ['Python', 'Tensorflow', 'Numpy', 'Pytorch', 'openCV', 'dLib', 'CUDAed']
        }, {
            name: 'Databases',
            desc: 'We use the best popular database to scale your infrastructure faster.',
            techs: ['MySQL', 'Mariadb', 'Mongo', 'Redis', 'DynamoDB']
        }, {
            name: 'DevOps',
            desc: 'We design products and turn your ideas into powerful mobile apps.',
            techs: ['Docker', 'Kubernetes', 'AWS', 'Microsoft Azure', 'Google Cloud']
        },
    ]
    return <section className={`${s.container} py-24`}>
        <div className="w-full grid place-items-center grid-flow-row gap-16">
            <h2 className={s.h2title}>Technology experts</h2>
            <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                {tech.map((t) => {
                    return <li key={t} className="box p-8">
                        <h4 className={s.h4title}>{t.name}</h4>
                        <p className={s.text}>{t.desc}</p>
                        <ul className="w-full flex flex-wrap gap-x-2 gap-y-1">
                            {t.techs.map((tt) => <li key={tt}>{tt}</li>)}
                        </ul>
                    </li>
                })}
            </ul>
        </div>
    </section>
}