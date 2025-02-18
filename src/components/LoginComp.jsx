const LoginComp = ({login , setLogIn})=>{
    return <div>
        <div>
            {
                login ? <div>Logged In</div> : <div>Logged Out</div>
            }
        </div>
        <div>
            <input type="checkbox" defaultChecked={false} onClick={()=>setLogIn(!login)} />
        </div>
    </div>
}

export default LoginComp