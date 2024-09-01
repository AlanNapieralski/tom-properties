import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <div className="h-28 flex flex-row items-center p-4 bg-gray-100">
      <div className="flex-grow">
        <div className="text-xl font-bold">Logo</div>
      </div>

      <div className="flex-grow flex justify-center space-x-4">
        <button className="btn hover:bg-gray-200 p-2 rounded">Home</button>
        <button className="btn hover:bg-gray-200 p-2 rounded">For Landlords</button>
        <button className="btn hover:bg-gray-200 p-2 rounded">For Tenants</button>
        <button className="btn hover:bg-gray-200 p-2 rounded">Value my Property</button>
        <button className="btn hover:bg-gray-200 p-2 rounded">Contact Us</button>
      </div>

      <button className="btn w-12 hover:bg-gray-200 p-2 rounded">
        <FontAwesomeIcon icon={faBars} width={16} height={16} />
      </button>

    </div>
  )
}

