import profile from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profile} className='card-img' alt="Pofile pic"></img>
            <h2 className='card-title'>Hamsa J</h2>
            <p className='card-txt'>I am learning React</p>
        </div>
    );
}

export default Card