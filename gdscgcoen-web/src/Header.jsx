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
<div className="header" style={{height:'5rem',alignItems:'center',justifyContent:mobile?'space-between':'start'}}><img src={dropdownIcon} style={{display:mobile?'block':'none',width:'height',height:'2rem',marginLeft:'1rem',margin:'auto'}}></img>
<div style={{height:'100%',width:'auto',alignContent:'center',display:'flex'}}>
<img src={gdscIcon} style={{width:'height',height:'1.5rem',marginLeft:'1rem',marginRight:'0.5rem'}}></img> 
<div style={{width:'auto',marginLeft:'0.5rem'}}>
<p style={{margin:'0rem',fontSize:'1.2rem',width:'100%',color:'#5F6368',fontWeight:'1%'}}>GDSC GCOEN</p>
</div>
</div> </div>
</>)
}
export default Header