import Folder from "../Folder"



export default function ModalItem({title, items}){
    return (
        <section className="modal-item">
            <div className="modal-item-title">
                --- {title} ---
            </div>

            <ul className="modal-item-body">
                {items && items.map(itm => {
                    return(
                        <li key={itm.name} className="modal-item-body-child">
                            <Folder name={itm.name} type={itm.type}/>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}