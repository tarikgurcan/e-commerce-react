import React, { Component } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles'

export default class ErrorBoundary extends Component {
    state={
        hasErrored:false
    }

    static getDerivedStateFromError(error){
        return {hasErrored:true}
    }

    componentDidCatch(error,info){
        console.log(error)
    }

    render() {
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/g3hgqe8.png" />
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return (
            this.props.children
        )
    }
}
