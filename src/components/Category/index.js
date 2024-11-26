import './index.css'

const Category = props => {
  const {categoryDetails, setActiveTab, isActive} = props
  console.log(isActive)
  const {menuCategory, menuCategoryId} = categoryDetails
  const onClickTab = () => {
    setActiveTab(menuCategoryId)
  }
  const onToggle = isActive ? 'active category' : 'category'
  return (
    <li>
      <button className={onToggle} onClick={onClickTab}>
        {menuCategory}
      </button>
    </li>
  )
}
export default Category
