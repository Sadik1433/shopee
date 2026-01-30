
const Login = () => {
  return (
    <div className="bg-red-400 min-h-screen min-w-screen relative top-16">
      <div className="bg-blue-300 max-w-90">
        <h1>Login</h1>
        <div className="flex flex-col">
          <label htmlFor="input">
            Name :
          </label>
            <input type="text" id="name" />
        </div>
      </div>
    </div>
  )
}

export default Login
