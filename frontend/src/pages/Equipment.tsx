import { useParams } from 'react-router-dom'

const Equipment: React.FC = () => {
    const { type, id } = useParams()

    return(
        <div className="container flex flex-row mx-auto">
            <img />
            {/* image on left, title on right, and stuff underneath, maybe more features to think of later?
              * right now might have  */}
            <div className="font-bold text-xl container flex flex-col">
              <div>
                Fender Stratocaster 
              </div>
              <div>
                {type}
              </div>
              <div>
                Description
              </div>
            </div>
        </div>
    );
}

export default Equipment;