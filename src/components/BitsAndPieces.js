import React from 'react'
import BreadcrumbNav from './BreadcrumbNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CoolToggle from './CoolToggle'
import ImageCollage from './ImageCollage'
import DropDownNav from './DropDownNav'
import ContentSearch from './ContentSearch'
import RandomUser from './RandomUser'
import CustomFileInput2 from './CustomFileInput2'
import VennDiagram from './VennDiagram'

const BitsAndPieces = () => {
  return (
    <div className='bits main-container'>
      <BreadcrumbNav currentPage={'Bits and Pieces'} />
      <div className='d-flex justify-content-between'>
        <div className='title display-font'>
          <FontAwesomeIcon icon='fa-solid fa-lightbulb' className='icon' />
          Bits and Pieces
        </div>
      </div>
      <div className='shadow-sm bg-light m-2 d-flex justify-content-center rounded-3 border border-dark border-opacity-25 p-2'>
        <CoolToggle />
      </div>

      <div className='shadow-sm  m-2 d-flex flex-column justify-content-center rounded-3 border border-dark border-opacity-25 p-2'>
        <div className='p-2 fw-semibold'>Search for input in text</div>
        <ContentSearch
          text="Away in a manger, no crib for a bed, The little Lord Jesus laid down his sweet head.
              The stars in the sky looked down where he lay,
              The little Lord Jesus asleep in the hay.
              The cattle are lowing, the baby awakes,
              But little Lord Jesus no crying he makes.
              I love Thee, Lord Jesus, look down from the sky
              And stay by my cradle 'til morning is nigh.
              Be near me, Lord Jesus, I ask Thee to stay
              Close by me forever, and love me, I pray.
              Bless all the dear children in thy tender care,
              And take us to heaven, to live with Thee there."
        />
      </div>
      <div className='shadow-sm bg-success bg-opacity-10 m-2 d-flex justify-content-center rounded-3 border border-dark border-opacity-25 p-2'>
        <ImageCollage />
      </div>
      <div
        style={{ minHeight: '300px' }}
        className='bg-light shadow-sm  m-2 d-flex justify-content-center rounded-3 border border-dark border-opacity-25 p-2'
      >
        <DropDownNav />
      </div>

      <div className=' d-flex flex-column bg-dark-subtle shadow-sm  m-2 d-flex justify-content-center rounded-3 border border-dark border-opacity-25 p-2'>
        <div>Retrieves random user data:</div>
        <RandomUser />
      </div>
      <div className='d-flex flex-column shadow-sm  m-2 d-flex justify-content-center rounded-3 border border-dark border-opacity-25 p-2'>
        <div>Retrieves a file:</div>
        <CustomFileInput2 />
      </div>
      <div className='text-light d-flex flex-column bg-dark shadow-sm  m-2 d-flex justify-content-center rounded-3 border border-dark border-opacity-25 p-2'>
        <div>Creates a Venn Diagram</div>
        <VennDiagram />
      </div>
    </div>
  )
}

export default BitsAndPieces
