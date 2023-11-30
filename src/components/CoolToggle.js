import '../styles/CoolToggle.css'

const CoolToggle = () => {
  return (
    <div className='d-flex align-items-center'>
      <label className='switch'>
        <input type='checkbox' />
        <div className='slider slider--0'>ON</div>
        <div className='slider slider--1'>
          <div></div>
          <div></div>
        </div>
        <div className='slider slider--2'></div>
        <div className='slider slider--3'>OFF</div>
      </label>
      <div className='p-2 fst-italic'>Check out this cool toggle!</div>
    </div>
  )
}

export default CoolToggle
