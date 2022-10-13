import { AiFillStar } from "react-icons/Ai";
import './Card.css'



export default function Card(props){
   let badgeText
   if (props.openSpots === 0) {
     badgeText = 'SoldOut'
    
    }else if(props.location === "Online" ){
        badgeText = "ONLINE"
    
   } 
   
    return(
        
        <div className='main-card'>
           {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className='card-picture' src={props.coverImg} alt="" />
            <div className="caption">
                <div style={{display:'flex',gap:'3px'}}>
                <span className="star"><AiFillStar/></span>
                <span style={{fontSize:'14px',paddingTop:'1px'}}>{props.stats.rating}</span>
                <span style={{color:'#918E9B',fontSize:'14px',paddingTop:'1px'}}>({props.stats.reviewCount}) {props.location}</span>
                </div>
                <small style={{fontSize:'12px'}}>{props.title}
                </small>
                <span style={{fontSize:'12px',fontWeight:'bold'}}>From  ${props.price} <small>/person</small></span>
            </div>
        </div>
    )
}