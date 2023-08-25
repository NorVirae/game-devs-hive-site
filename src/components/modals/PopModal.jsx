import { useContext } from "react";
import ModalItem from "./ModalItem";
import { AppContext } from "../../utils/context/AppContext";


export default function PopModal(){
    return (
        <div className="modal-overlay">
            <section className="modal">
                <div className="modal-header">
                    <span>recordings</span>
                </div>

                <div className="modal-body">
                    <ModalItem title="Lab 2: how to launch" items={[{name: "lab.mp4", type: "file"}]}/>
                    <ModalItem title="Lecture 1: getting ppl to care" items={[{name: "lab.mp4", type: "file"}]}/>
                </div>
            </section>
        </div>
    )
}