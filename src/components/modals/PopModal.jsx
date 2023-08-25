

export default function PopModal(){
    return (
        <section className="modal">
            <div className="modal-header">
                recordings
            </div>

            <div className="modal-body">
                <ModalItem title="Lab 2: how to launch" items={[{name: "lab.mp4", type: "file"}]}/>
                <ModalItem title="Lecture 1: getting ppl to care" items={[{name: "lab.mp4", type: "file"}]}/>
            </div>
        </section>
    )
}