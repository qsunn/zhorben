import { s } from '@/app/styles'

export const ReviewCard = ({ employee, index, currentSlide }) => {
    return (
        <div className="flex flex-col items-start gap-5 p-10 pl-5">
            <div className={`h-[1.125rem] w-5 ${s.image} ${employee.logo}`} />
            <div className="text-yellow">{employee.logoText}</div>
            <div className="text-grey">{employee.about}</div>
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${s.image} ${employee.photo}`} />
                <div>
                    <div className={s.p4book}>{employee.name},</div>
                    <div className={s.text}>{employee.position}</div>
                </div>
            </div>
        </div>
    )
}