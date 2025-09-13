import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/DancingCat.css'

const DancingCat = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState('normal')
  const [danceCount, setDanceCount] = useState(0)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
    if (!isAnimating) {
      setDanceCount(prev => prev + 1)
    }
  }

  const handleSpeedChange = (speed) => {
    setAnimationSpeed(speed)
  }

  // 키보드 컨트롤 추가
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
      if (event.code === 'Digit1') setAnimationSpeed('slow')
      if (event.code === 'Digit2') setAnimationSpeed('normal')
      if (event.code === 'Digit3') setAnimationSpeed('fast')
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isAnimating])

  return (
    <div className="dancing-cat-container">
      <div className="status-info">
        <p>춤춘 횟수: {danceCount}번 🎉</p>
        <p className="keyboard-hint">
          키보드 단축키: [스페이스] 춤 토글, [1/2/3] 속도 조절
        </p>
      </div>

      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''} speed-${animationSpeed}`}>
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
          onClick={toggleAnimation}
        />
      </div>

      <div className="controls">
        <button onClick={toggleAnimation} className="dance-button">
          {isAnimating ? '🛑 춤 멈추기' : '💃 춤추기 시작!'}
        </button>
      </div>

      <div className="speed-controls">
        <p>속도 조절:</p>
        <div className="speed-buttons">
          <button
            onClick={() => handleSpeedChange('slow')}
            className={`speed-button ${animationSpeed === 'slow' ? 'active' : ''}`}
          >
            🐌 느리게
          </button>
          <button
            onClick={() => handleSpeedChange('normal')}
            className={`speed-button ${animationSpeed === 'normal' ? 'active' : ''}`}
          >
            😊 보통
          </button>
          <button
            onClick={() => handleSpeedChange('fast')}
            className={`speed-button ${animationSpeed === 'fast' ? 'active' : ''}`}
          >
            ⚡ 빠르게
          </button>
        </div>
      </div>

      {isAnimating && (
        <div className="music-notes">
          <div className="note note1">♪</div>
          <div className="note note2">♫</div>
          <div className="note note3">♪</div>
          <div className="note note4">♫</div>
          <div className="note note5">♬</div>
          <div className="note note6">♩</div>
        </div>
      )}

      <div className="fun-facts">
        <div className="fact">
          {isAnimating ? (
            <p>🎵 고양이가 신나게 춤추고 있어요!</p>
          ) : (
            <p>😴 고양이가 휴식 중이에요. 클릭해서 춤춰보세요!</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DancingCat