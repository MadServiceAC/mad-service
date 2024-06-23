import React from "react"
import UserService from "../../svc/user.svc"

function TechnicianBoard() {
  const [content, setContent] = React.useState("")

  React.useEffect(() => {
    UserService.getTechnicianBoard()
      .then((response) => setContent(response.data))
      .catch((error) => {
        setContent(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        )
      })
  }, []) // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="pt-20">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  )
}

export default TechnicianBoard