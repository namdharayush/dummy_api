import React from 'react'
import '../style/docs.css'
import Sidebar from './Sidebar'

function Docs() {
  return (
    <>
      <div className='docs'>
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9 pt-4">
            <div className='hui'>
              <h3>How to use it</h3>
              <p>DummyJSON can be used with any type of front end project that needs products or any dummy data in JSON format.</p>
              <p>You can use examples below to check how DummyJSON works.</p>
              <p>Feel free to enjoy it in your awesome projects!</p>
            </div>
            <hr />
            <div className='test_route mb-4'>
              <h4>Test Route</h4>
              <p>See welcome message! 😉</p>
              <div className='test_box'>
                <p>// Could be GET or POST/PUT/PATCH/DELETE</p>
                <h6>fetch(<code>'//dummyjson.com/test'</code>) <br />.then({`res => res.json()`}) <br />.then(console.log);</h6>
                <p>/* {`{ status : 'ok', method: 'GET' }`} */</p>
              </div>
            </div>
            <hr />
            <div className='test_route'>
              <h4>Delay Responses</h4>
              <p>You can simulate a delay in responses using the delay param, delay can be any number between 0 and 5000 milliseconds</p>
              <div className='test_box'>
                <p>// Could be GET or POST/PUT/PATCH/DELETE</p>
                <h6>fetch(<code>'https://dummyjson.com/RESOURCE/?delay=1000'</code>)</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Docs