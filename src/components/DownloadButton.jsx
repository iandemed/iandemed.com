import React from 'react'

import '../styles/general.css'

function DownloadButton({text, filepath}){
    return(
        <div className="download-item">
            <div className="download-button">
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={filepath}
                >
                    {text}
                </a>
            </div>
        </div>
    )
}

export default DownloadButton