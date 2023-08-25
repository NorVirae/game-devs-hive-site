
const images = {
    archive: "/images/archive.webp",
    week: "/images/week.webp",
    update: "/images/update.webp",
    records: "/images/records.webp",


}


export default function Folder({type, name}){
    return (
        <div className="folder">
            <div className="folder-img-container">
                <img alt="archive" className="folder-img" src={images[type]}/>
            </div>
            <h3 className="title-name">{name}</h3>
        </div>
    )
}