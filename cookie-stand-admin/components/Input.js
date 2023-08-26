export default function Input(props) {
    return (
      <div className="flex flex-col p-2 space-y-2 bg-green-300 text-center max-w-[200vh]">
  
        <div>
          <h2 className="text-2xl">Create Cookie Stand</h2>
        </div>
        <form
          onSubmit={props.handler}
  
        >
          <div className="flex w-full">    <label className="mr-2">Location:</label>
            <input
  
              type="text"
              name="location"
              className="flex-auto pl-1"
              required
            />
          </div>
          <div className="flex p-2 space-x-2 bg-green-300 text-center max-h-[50vh] transform skewY-12">
            <div className="flex flex-col max-w-[50vh]" >
              <label >
                Min Customers per Hour:
              </label>
              <input
  
                type="number"
                name="minCustomersPerHour"
                className="p-1 border rounded"
                required
              />
            </div>
            <div className="flex flex-col max-w-[50vh]" >
  
              <label>
                Max Customers per Hour:
              </label>
              <input
                type="number"
                name="maxCustomersPerHour"
                className="p-1 border rounded"
                required
              />
            </div>
            <div className="flex flex-col max-w-[50vh]" >
  
              <label>
                Avg Cookies per Sale:
              </label>
              <input
                type="number"
                step="0.1"
                name="avgCookiesPerSale"
                className="p-1 border rounded"
                required
              />
            </div>
  
            <button
              type="submit"
              className="p-2 text-white bg-green-500 rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    )
  }
  