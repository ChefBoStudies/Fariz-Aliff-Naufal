import { useEffect } from 'react'
import './VideoModal.css'

const VideoModal = ({ isOpen, onClose, videoUrl, projectTitle }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="video-modal-overlay" onClick={handleBackdropClick}>
      <div className="video-modal-content">
        <div className="video-modal-header">
          <h3 className="video-modal-title">{projectTitle} - Demo</h3>
          <button className="video-modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className="video-container">
          <video
            controls
            autoPlay
            preload="metadata"
            className="demo-video"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="video-modal-footer">
          <p>Press ESC or click outside to close</p>
        </div>
      </div>
    </div>
  )
}

export default VideoModal 