
import { Outlet } from "react-router";
import Header from "../Components/Header";





function Dashboard(){
    return(
        <div>

          <Header/>

            <Outlet/>

            

        </div>
    )
}
export default Dashboard;