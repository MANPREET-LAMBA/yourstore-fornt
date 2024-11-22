import { Catageory } from "./Catageory"
import { Tradtitional } from "./Traditional"
import { Modern} from "./Modern"


export default function About()
{
    return(
        <div className="w-full  pb-0 relative z-[909]">
            <Catageory/>
            <Tradtitional/>
            <Modern/>
           
        </div>
    )
}
