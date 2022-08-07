// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onChangeTabId = () => {
    setActiveTabId(tabId)
  }

  const activeClassName = isActive ? 'Inactivebtn active ' : 'Inactivebtn'

  return (
    <li className="tabItem">
      <button type="button" className={activeClassName} onClick={onChangeTabId}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
