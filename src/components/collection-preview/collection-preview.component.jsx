import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles'
import "./collection-preview.styles.scss"

export const CollectionPreview = ({title,items}) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer className="preview">
                {items.filter((item,idx)=>idx<4).map((item)=>{
                    return(
                        <CollectionItem key={item.id} item={item}/>
                    )
                })}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}
