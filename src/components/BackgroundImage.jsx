import image from '../assets/image.png'

function BackgroundImage({text}) {
  return (
    <div>
        <div className='relative lg:*:h-[80vh] overflow-hidden'>
        <img src={image} alt="image" className='w-full' />
        </div>
        <div className='inline-block absolute top-[10rem] lg:top-[70vh]  left-[10%]'>
            <p className='text-white text-xl sm:text-4xl'>{text}</p>

        </div>
        
    </div>
  )
}

export default BackgroundImage