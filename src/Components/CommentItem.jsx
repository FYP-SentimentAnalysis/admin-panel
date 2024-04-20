import React from 'react'

function CommentItem({ item }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getColor = (label) => {
    return label === 'positive' ? '#00ff00' : label === 'negative' ? '#ff0000' : label === 'nutral' ? '#0000ff' : '#000'
  }

  const getScore = (label, score) => {
    return label === 'positive' ? score*100 : label === 'negative' ? (1-score)*100 : 50
  }

  const getDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}th ${months[d.getMonth()]}, ${d.getFullYear()}`
  }

  return (
    <div className="item" 
      style={{ borderColor: getColor(item.label) }}>
      <div className="item-top">
        <p className='item-username'>{item.user.name}</p>
        <p className='item-date'>{getDate(item.createdAt)}</p>
      </div>
      <p className="comment"><u><b>{item.service || 'Test Service'}: </b></u>{item.comment}</p>
      <div className='seekbar-container'>
        <span>Negative</span>
        <input type="range" min={0} max={100} value={getScore(item.label, item.score)} onChange={(e) => e.preventDefault()}
          style={{accentColor: getColor(item.label) }} />
        <span>Positive</span>
      </div>
    </div>
  )
}

export default CommentItem