import star from '../assets/star.svg';
import heart from '../assets/heart.svg';
import copy from '../assets/copy.svg';
interface RepoProps {
    name: string,
    desc: string,
    url: string,
    stars: number,
    favs: number,
    handleCopy: () => void
}

export default function Repo(props: RepoProps) {
    

    return (
            <section className="text-mainWhite bg-lightBg border-2 rounded-lg border-grayFg flex flex-col items-start gap-y-2 p-3 max-w-[25rem]">
                <h2 className="text-lightFg font-bold text-xl max-w-[22rem] overflow-hidden text-ellipsis whitespace-nowrap" title={props.name}>{props.name}</h2>
                <p className="text-sm font-light text-lighterGray">{props.desc}</p>
                <div className="flex items-center gap-x-3">
                    <span className='flex items-center gap-x-0.5 justify-center'>
                        <img src={star} alt="Star Icon" className='w-6 ' />
                        <span>{props.stars}</span>
                    </span>
                    <span className='flex items-center gap-x-0.5 justify-center'>
                        <img src={heart} alt="Star Icon" className='w-6' />
                        <span>{props.favs}</span>
                    </span>
                </div>

                <div className='flex items-center'>
                    <div className="py-1 px-2 rounded border-2 border-mainWhite bg-darkTop text-lighterGray border-r-0 rounded-r-none">
                        <span className='text-sm'>{props.url}</span>
                    </div>
                    <button onClick={props.handleCopy} className='bg-secondFg h-full py-1 px-1 rounded border-2 border-mainWhite border-l-0 rounded-l-none cursor-pointer'>
                        <img src={copy} alt="Copy Icon" className='w-6' />
                    </button>
                </div>
            </section>
    );
}