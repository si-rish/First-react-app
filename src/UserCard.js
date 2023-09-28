import './UserCard.css';

export default function UserCard({userName, bio,desc, productimg})

{
    return(
        <div className="user-card">
            <div>
            <h1>Introducing all New Apple Products 2023</h1>
                <img src={process.env.PUBLIC_URL + `/images/${productimg}`} className='p-img' />
            </div>
            <div className='p-details'>
                <h2>{userName}</h2>
                <p>{bio}</p>
                <p className='desc'>{desc}</p>
            </div>
        </div>
    )
}

export function CardComponent({userName, bio, productimg})

{
    return(
        <div className="card-component">
            <div>
                <img src={process.env.PUBLIC_URL + `/images/${productimg}`} className='c-img' />
            </div>
            <div className='c-details'>
                <h3>{userName}</h3>
                <p className='c-info'>{bio}</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}