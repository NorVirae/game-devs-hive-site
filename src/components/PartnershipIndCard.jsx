
export default function PartnershipIndCard({imageSrc}){
    return (
        <div className="partnership-ind-card">
            <div className="partnership-ind-card-img-container">
                
                <img className="partnership-ind-card-img" alt="" src={imageSrc}/>
            </div>
            <a href="/#" className="learn-more-linker">learn more</a>
        </div>
    )
}