import './assets/App.css'
import gdscIcon from './assets/images/gdsc-icon.webp'
import dropdownIcon from './assets/images/menu-export.png'
import {useState,useEffect} from 'react'
const Header = (props)=>{
    const [mobile,setMobile]=useState(props.mobile);
    useEffect(()=>{
        setMobile(props.mobile);
    },[props.mobile])
return(<>
<div className="header" style={{height:'4rem'}}>
    <div style={{width:'95%',height:'70%',display:'flex',justifyContent:mobile?'space-between':'',margin:'auto',alignItems:'center'}}>    
    <div><img src={dropdownIcon} style={{width:'2.5rem',height:'width',display:mobile?'block':'none'}}></img>   </div>
    
    <div style={{height:'100%',display:'flex',alignItems:'center'}}> 
        <div><img src={gdscIcon} style={{width:'3.5rem',height:'width',margin:'auto'}}></img></div>
        <div><p style={{marginLeft:'0.5rem',color:'#505050'}}>GDSC GCOEN</p></div>
    </div>

</div></div>
</>)
}
export default Header