export default function CardProduct({title,image }) {
    return (
        <>
            <div className="flex items-center justify-center">
                <img src={image} />
                <h1>{title}</h1>
        </div>
        </>
    )
}