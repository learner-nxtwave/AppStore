// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="appItemContainer">
      <img className="app-image " src={imageUrl} alt={appName} />
      <p className="app-name ">{appName}</p>
    </li>
  )
}

export default AppItem
