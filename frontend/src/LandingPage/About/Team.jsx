import link, { Link } from 'react-router-dom'

export default function Team() {
  return (
    <div className="container">

      <div className="row ">
        <h2 className="text-center">People</h2>
      </div>

      <div className="row m-md-5 about-hero">
        <div className="col-lg-6 text-center" >
          <img className="rounded-circle mt-3 mt-lg-0" src="/media/people/nithinKamath.jpg" alt="nithin" style={{ width: "50%" }} />
          <h5 className='pt-3'>Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-lg-6 mt-3">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p className='people-link'>Connect on
            <Link to="/home" className='link-Tag'> Homepage</Link> /
            <Link to="/home" className='link-Tag'> TradingQnA </Link> /
            <Link to="/home" className='link-Tag'> Twitter</Link> </p>
        </div>
      </div>

      <div className="row pt-md-5">
        <div className="col-lg-4 text-center" >
          <img className="rounded-circle mt-3 mt-lg-0" src="/media/people/nikhil.jpg" alt="nithin" style={{ width: "50%" }} />
          <h5 className='pt-3'>Nikhil Kamath</h5>
          <p>Co-founder & CFO</p>
        </div>
        <div className="col-lg-4 text-center">
          <img className="rounded-circle mt-3 mt-lg-0" src="/media/people/Kailash.jpg" alt="nithin" style={{ width: "50%" }} />
          <h5 className='pt-3'>Dr. Kailash Nadh</h5>
          <p>CTO</p>
        </div>
        <div className="col-lg-4 text-center">
          <img className="rounded-circle mt-3 mt-lg-0" src="/media/people/Venu.jpg" alt="nithin" style={{ width: "50%" }} />
          <h5 className='pt-3'>Venu Madhav</h5>
          <p>COO</p>
        </div>
      </div>
      <div className="row pt-md-5">
        <div className="col-lg-4 text-center" >
          <img className="rounded-circle mt-3 mt-lg-0" src="/media/people/Hanan.jpg" alt="nithin" style={{ width: "50%" }} />
          <h5 className='pt-3'>Hanan Delvi</h5>
          <p>CCO</p>
        </div>
        <div className="col-lg-4 text-center">
          <img className="rounded-circle mt-3 mt-lg-0" src="/media/people/Seema.jpg" alt="nithin" style={{ width: "50%" }} />
          <h5 className='pt-3'>Seema Patil</h5>
          <p>Director</p>
        </div>
        <div className="col-lg-4 text-center">
          <img className="rounded-circle mt-3 mt-lg-0" src="/media/people/karthik.jpg" alt="nithin" style={{ width: "50%" }} />
          <h5 className='pt-3'>Karthik Rangappa</h5>
          <p>Chief of Education</p>
        </div>
      </div>
      <div className="row py-md-5">
        <div className="col-lg-4 text-center" >
          <img className="rounded-circle mt-3 mt-lg-0" src="/media/people/Austin.jpg" alt="nithin" style={{ width: "50%" }} />
          <h5 className='pt-3'>Austin Prakesh</h5>
          <p>Director Strategy</p>
        </div>
      </div>

    </div>
  )
}

