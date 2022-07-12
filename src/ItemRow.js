import { BsCheckLg } from "react-icons/bs"
import { MdOutlineClose } from "react-icons/md"
import { secondary } from "./constants"

const Check = () => <BsCheckLg color={secondary} />
const Uncheck = () => <MdOutlineClose size={30} color='red' />


export const ItemRow = ({
    title,
    icon,
    checks,
    //keyValue
}) => <div  className="flex row allspace" style={{ height: '5vh'}}>
    <div className="flex row flexdot4 justifystart">{icon} &nbsp; { title }</div>
    <div className="flex flexdot3" style={{borderRight: '1px solid silver', borderLeft: '1px solid silver'}}>
        {
            checks[0]
            ? <Check />
            : <Uncheck />
        }
    </div>
    <div className="flex flexdot3">
        {
            checks[1]
            ? <Check />
            : <Uncheck />
        }
    </div>
</div>