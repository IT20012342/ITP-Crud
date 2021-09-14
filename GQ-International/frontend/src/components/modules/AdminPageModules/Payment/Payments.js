import OnlinePayView from "../Payment/OnlinePaymentsView";
import CashPayView from "../Payment/CashPaymentsView";

import FeaturedInfo from "../../../common/adminView/admincomponent/featuredinfo/FeaturedInfo.jsx";

export default function Payments(){
    return (
        <div className="overview">
            <FeaturedInfo/>

            <CashPayView/>
            <OnlinePayView/>
            
            
        </div>
    )

}