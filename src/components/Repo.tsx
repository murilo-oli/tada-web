interface RepoProps {
    name: string,
    desc: string,
    url: string,
    stars: number,
    favs: number
}

export default function Repo(props: RepoProps) {
    return (
        <section>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <div>
                <p>
                    <span>icon</span>
                    <span>{props.stars}</span>
                </p>
                <p>
                    <span>icon</span>
                    <span>{props.favs}</span>
                </p>
            </div>

            <div>
                <span>{props.url}</span>
            </div>

        </section>
    );
}