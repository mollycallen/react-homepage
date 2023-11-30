import { useState, useEffect } from 'react'

const ContentSearch = ({ text }) => {
  const [search, setSearch] = useState('')
  const [textContent, setTextContent] = useState(text)

  useEffect(() => {
    if (search) {
      let temp = text.replaceAll(search, `<mark>${search}</mark>`)
      setTextContent(temp)
    }
  }, [text, search])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '2rem',
        width: '400px',
        padding: '2rem',
        border: '1px solid #ccc'
      }}
    >
      <div style={{ display: 'flex', width: '100%' }}>
        <input
          type='text'
          name='search'
          style={{
            padding: '1rem',
            border: 'none',
            backgroundColor: '#f2f2f2',
            width: '100%',
            outline: 'none'
          }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        ></input>
        <button
          style={{
            padding: '1rem',
            border: 'none',
            backgroundColor: '#24a0ed',
            fontWeight: 'bold'
          }}
          onClick={() => {
            setSearch('')
          }}
        >
          X
        </button>
      </div>
      <div
        style={{ lineHeight: '1.5rem' }}
        dangerouslySetInnerHTML={{ __html: textContent }}
      ></div>
    </div>
  )
}

export default ContentSearch
