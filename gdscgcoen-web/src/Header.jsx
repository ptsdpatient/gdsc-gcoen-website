import './assets/App.css'
import gdscIcon from './assets/images/gdsc-icon.webp'
const Header = ()=>{
return(<>
<div className="header" style={{height:'5rem'}}><img src={gdscIcon} style={{width:'height',height:'3rem'}}></img> <div style={{display:'flex',flexDirection:'column'}}><p style={{margin:'0rem'}}>GDSC</p><p style={{margin:'0rem'}}>GCOEN</p></div> </div>
</>)
}
export default Header