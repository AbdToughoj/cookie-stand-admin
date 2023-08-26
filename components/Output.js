import { hourly_sales } from "@/data"

export default function Output({cookieStands,deleteData}) {
  return (
    <div className="flex flex-col p-2 space-y-2 bg-green-100 text-center max-w-[200vh]">
      {cookieStands.length === 0 ? (
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
              {cookieStands.map((obj, index) => (
                <tr key={obj.id}>
                  <td className='border border-black '>
                    <span style={{ marginRight: '5px' }}>{obj.location}</span>
                    <svg onClick={() => deleteData(obj.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ verticalAlign: 'middle', cursor: 'pointer' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  </td>
                  {hourly_sales.map((sales, index) => (
                    <td key={index} className='border border-black '>{sales}</td>
                  ))}

                </tr>
              ))}
              <tr>
                <td className='border border-black '>{'Total'}</td>
                {hourly_sales.map((sales, index) => (
                  <td key={index} className='border border-black '>{sales * cookieStands.length}</td>
                ))}

              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}