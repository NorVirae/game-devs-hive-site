


export default function ModalItem({title, items}){
    return (
        <section className="modal-item">
            <div className="modal-item-tile">
                {title}
            </div>

            <ul className="modal-item-body">
                {items && items.map(itm => {
                    return(
                        <
                    )
                })}
            </ul>
        </section>
    )
}