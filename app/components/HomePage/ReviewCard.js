import { s } from '@/app/styles'

export const ReviewCard = ({ employee, index, currentSlide }) => {
    const isActiveSlide = index === currentSlide
    return (
        <div className={`relative flex box1 flex-col my-5 items-start gap-5 p-10 pl-5 ${isActiveSlide ? '!bg-[#F3F3F3] !bg-right-top !bg-auto !bg-no-repeat !bg-[url("./images/bg_squares_reviews.png")]' : '!bg-[#F6F6F6]'}`}>
            <div className={`h-[1.125rem] w-12 ${s.image} ${employee.logo}`} />
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