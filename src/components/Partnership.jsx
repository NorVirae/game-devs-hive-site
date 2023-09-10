import MainPartnerCont from "./MainPartnerCont";
import PartnershipInd from "./PartnershipInd";

export default function Partnership({id}){
    return (
        <div id={id} className="partnership">
            <MainPartnerCont />
            <PartnershipInd />
        </div>
    )
}