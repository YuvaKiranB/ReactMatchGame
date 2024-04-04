import './index.css'

const GetTab = props => {
  const {content, clickedTab, activeTab} = props
  const {displayText, tabId} = content

  const active = activeTab === tabId ? 'activeTab' : ''

  const clicked = () => {
    clickedTab(tabId)
  }

  return (
    <li>
      <button className={`button1 ${active}`} type="button" onClick={clicked}>
        {displayText}
      </button>
    </li>
  )
}

export default GetTab
