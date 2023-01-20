import './index.css'

const ListItem = props => {
  const {appInfo, onclick} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = appInfo

  const onButtonClick = () => onclick(id)

  return (
    <li className="list-con">
      <div className="logo-con">
        <p className="text">{timeAccessed}</p>

        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="text-color">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={onButtonClick}
          data-testid="delete"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ListItem
