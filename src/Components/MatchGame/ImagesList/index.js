import './index.css'

const GetImage = props => {
  const {content, clickedImage} = props
  const {thumbnailUrl, id} = content

  const clickedButton = () => {
    clickedImage(id)
  }

  return (
    <li>
      <button className="button2" type="button" onClick={clickedButton}>
        <img className="image4" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default GetImage
