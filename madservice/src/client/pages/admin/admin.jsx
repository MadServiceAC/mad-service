import React from "react"
import UserService from "../../svc/user.svc"

function AdminBoard() {
  const [content, setContent] = React.useState("")

  React.useEffect(() => {
    UserService.getAdminBoard()
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
  }, []) 

  return (
    <div className="pt-20">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  )
}

export default AdminBoard
