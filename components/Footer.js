
export default function Footer({cookieStands}) {
    return (
      <footer className="p-4 text-center text-white bg-green-500">
  <div className="p-4 text-black bg-green-500 flex justify-between items-center">
    <p>&copy; ASAC 2023</p>
    <h2>{cookieStands.length} Location World Wide</h2>
  </div>
  
  
      </footer>
    )
  }
  