
const images = {
    archive: "/images/archive.webp",
    week: "/images/week.webp",
    update: "/images/update.webp",
    record: "/images/records.webp",


}


export default function Folder({type, name}){
    return (
        <div className="folder">
            <div className="folder-img-container">
                <img alt="archive" className="folder-img" src={images[type]}/>
            </div>
            <h3 className="image-title-name">{name}</h3>
        </div>
    )
}