import LoginHeader from "@/components/auth/LoginHeader"
import LoginFooter from "@/components/auth/LoginFooter"

export default function register(){
    return(
          <div className="bg-surface font-body-md text-body-md text-on-surface min-h-screen flex flex-col justify-between">
            <LoginHeader/>
          
          <footer>
            <LoginFooter/>
          </footer>
          </div>
    )
}