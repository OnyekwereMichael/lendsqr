import { usersHome } from '../../../constants'
import '../../../styles/home.scss'
import Table from '../../component/Table'

const Home = () => {

  return (
    <div className="home_container">
        <h1 className="user">Users</h1>
      <div className="home__card">
        {usersHome.map((item, index) => (
          <div className="home__card-item" key={index}>
            <img src={item.imgUrl} alt="" className="home__card-image" />
            <h3 className="home__card-label">{item.label}</h3>
            <p className="home__card-number">{item.number}</p>
          </div>
        ))}
      </div>

      <div>
        <Table />
      </div>
    </div>
  )
}

export default Home
