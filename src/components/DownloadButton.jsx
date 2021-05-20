import React from 'react'

import '../styles/general.css'

function DownloadButton({text, filepath}){
    return(
        <div className="download-item">     
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={filepath}
                className="link download-button"
            >
                {text}
            </a>
        </div>
    )
}

export default DownloadButton