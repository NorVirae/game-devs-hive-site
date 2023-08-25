import { useContext, useRef } from "react";
import ModalItem from "./ModalItem";
import { AppContext } from "../../utils/context/AppContext";
import Draggable from "react-draggable";


const PopModal = () =>{
    const nodeRef = useRef(null);
    const {setIsModalOpen} = useContext(AppContext);

    return (
        <div onClick={e=>{
            setIsModalOpen(false)
        }} className="modal-overlay">
            <Draggable
                nodeRef={nodeRef}
                // axis="x"
                // handle=".handle"
                // defaultPosition={{x: 0, y: 0}}
                // position={null}
                // grid={[25, 25]}
                // scale={1}
                // onStart={this.handleStart}
                // onDrag={this.handleDrag}
                // onStop={this.handleStop}
                >

                <section onClick={e=>e.stopPropagation()} ref={nodeRef} className="modal">
                    <div className="modal-header">
                        <span>recordings</span>
                    </div>

                    <div className="modal-body">
                        <ModalItem title="Lab 2: how to launch" items={[{name: "lab.mp4", type: "file"}]}/>
                        <ModalItem title="Lecture 1: getting ppl to care" items={[{name: "lab.mp4", type: "file"}]}/>
                    </div>
                </section>
        </Draggable>
        </div>
    )
}

export default PopModal;