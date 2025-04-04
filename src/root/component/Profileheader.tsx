
import {IMAGES} from '../../assets/images'
import { User } from '../../lib/types'
import '../../styles/profileheader.scss'
import ProfileBottomNav from './ProfileBottomNav'
import Rating from './Rating'

const Profileheader = ({ data }: { data: User }) => {
  const {name, code, accountNumber} = data
  return (
    <div className='profile_header'>
        <div className='profile_container'>
            <section className='profile_details_first'>
        <div className='profile_header_img'>
       <img src={IMAGES.np_user} alt="" />
       </div>
       <div>
       <p className='label'>{name}</p>
       <p className='code'>{code + 'LZXD'}</p>
       </div>
       </section>

       <section className='user_tiers'>
          <p>User's Tier</p>
           <Rating />
       </section>

       <section>
        <p className='label'>{data.accountNumber + '00, 000'}</p>
        <p className='code'>9912345678/Providus Bank</p>
       </section>
        </div>

        
          <ProfileBottomNav />
        
    </div>
  )
}

export default Profileheader
