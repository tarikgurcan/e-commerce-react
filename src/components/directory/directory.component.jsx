import MenuItem  from '../menu-item/menu-item.components'
import {connect} from "react-redux"
import "./directory.styles.scss"
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection } from '../../redux/directory/directory.selector'

const Directory=({sections})=> {
        return (
            <div className="directory-menu">
                {sections.map(({id,...otherSectionProps})=>{
                    return(
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                })}
            </div>
        )
    }


const mapStateToProps=createStructuredSelector(
  {sections:selectDirectorySection}
)

export default connect(mapStateToProps)(Directory)