import { hourly_sales } from "@/data"

export default function Output(props) {
    return (
      <div className="flex flex-col p-2 space-y-2 bg-green-300 text-center max-w-[200vh]">
        {props.handler === 0 ? (
          <p className="mt-4 text-center text-gray-600">
            Report Table Coming Soon...
          </p>
        ) : (
          <>
            <table className='w-1/2 mx-auto my-8 text-xl center'>
              <thead>
                <tr key="">
                  <th className='border border-black '>Location</th>
                  <th className='border border-black ' >6am</th>
                  <th className='border border-black ' >7am</th>
                  <th className='border border-black ' >8am</th>
                  <th className='border border-black ' >9am</th>
                  <th className='border border-black ' >10am</th>
                  <th className='border border-black ' >11am</th>
                  <th className='border border-black ' >12pm</th>
                  <th className='border border-black ' >1pm</th>
                  <th className='border border-black ' >2pm</th>
                  <th className='border border-black ' >3pm</th>
                  <th className='border border-black ' >4pm</th>
                  <th className='border border-black ' >5pm</th>
                  <th className='border border-black ' >6pm</th>
                  <th className='border border-black ' >7pm</th>
                  <th className='border border-black ' >Total</th>
  
  
  
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                {props.handler2.map((obj ,index)=> (
                  <tr key={obj.id}>
                    <td className='border border-black '>{obj.location}</td>
                    {hourly_sales.map((sales, index) => (
                    <td key={index}  className='border border-black '>{sales}</td>
                    ))}

                  </tr>
                ))}
                <tr>
                  <td   className='border border-black '>{'Total' }</td>
                {hourly_sales.map((sales, index) => (
                    <td key={index}  className='border border-black '>{sales*props.handler }</td>
                    ))}
  
                </tr>
              </tbody>
            </table>
  
          </>
        )}
      </div>
    )
  }
  