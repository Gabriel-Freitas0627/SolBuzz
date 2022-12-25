import Card from './component/Card'
import Collection from './component/Collection'
import {cardData} from '../../data/cardData.js'
import {collectionData} from '../../data/collectionData.js'
// const Dashboard = () =>{
    function Dashboard() {

    return (
        <div className="dashboard">
            <div className="left-dash" style={{position:"relative"}}>
                <div className="dash-title">
                    <h1 className ="welcome-text">Welcome to SolBuzz</h1> 
                </div>
                <h3>Explore</h3>
                <div className="dash-cards">
                    {cardData.map((item, index) => (
                        <Card 
                            key={index}
                            cardImage={item.cardImage}
                            bottomText1={item.bottomText}
                            peopleImage1={item.peopleImage1}
                            peopleImage2={item.peopleImage2}
                            peopleImage3={item.peopleImage3}
                            peopleImage4={item.peopleImage4}
                            peopleImage5={item.peopleImage5}
                        />
                    ))}
                </div>
            </div>
            <div className="right-dash">
                <div className="collection">
                    <h3 className='col-title'>Top Categries</h3>
                    <div className="col-cards">
                        {collectionData.map((item, index) => (
                            <Collection 
                                key = {index}
                                cNumber = {item.cNumber}
                                cImage = {item.cImage}
                                cTitle = {item.cTitle}
                                cMail = {item.cMail}
                            />
                        ))}
                    </div>
                </div>
                <div className="activity">
                        <h3>Recent Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;