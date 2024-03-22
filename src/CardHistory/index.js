const CardHistory = props => {
  const {cardHistory, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = cardHistory
  const historyDlt = () => {
    deleteHistory(id)
  }
  return (
    <li>
      <div>
        <div>
          <p>{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>

        <button data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            onClick={historyDlt}
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CardHistory
