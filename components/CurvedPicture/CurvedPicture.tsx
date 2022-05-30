import React from 'react'

const CurvedPicture = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img {...props} className="rounded-tr-curved rounded-bl-curved" />
    )
}

export default CurvedPicture;