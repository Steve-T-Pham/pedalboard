import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import api from '../services/api'

const Equipment: React.FC = () => {
  const { id, type, name, desc } = useParams()
  const equipmentId = id ? parseInt(id) : null;

  const { data: equipment, isLoading } = useQuery('item', async () => {
    if (equipmentId) {
      const response = await api.getItem(equipmentId)
      console.log(equipmentId)
      return response.data
    }
    else {
      return null;
    }
  })

  if(isLoading){
    <div>Loading...</div>
  }

  return(
    <div className="container mx-auto flex flex-col mt-5">

          <div className="text-sm drop-shadow-xs"> 
                    <Link to="/" className="text-gray-400 hover:underline">Home</Link>  
                    &nbsp;&gt;&nbsp;
                    <Link to="/search" className="text-gray-400 hover:underline">Search</Link> 
                    &nbsp;&gt;&nbsp;{equipment?.name}
          </div>

          <div className="mt-5" >
              <img src={equipment?.picture_url} className="h-1/4 w-1/4"/>
              {/* image on left, title on right, and stuff underneath, maybe more features to think of later?
                * right now might have  */}
              <div className="container flex flex-col">
                <div className="font-bold">
                  {equipment?.name}
                </div>
                <div>
                  {equipment?.type}
                </div>
                <div className="text-sm">
                  {equipment?.description}
                </div>
              </div>
            </div>
        </div>
    );
}

export default Equipment;