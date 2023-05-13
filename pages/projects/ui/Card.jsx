import Image from 'next/image'

const Card = ({source}) => {
  return (
    <div className="w-full h-[50%] md:w-[60%] md:h-[55%] overflow-hidden md:first-letter md:absolute left-0">
      <Image
        src={source}
        alt="My Image"
        layout="fill"
        className="md:blur-sm hover:blur-none duration-500"
      />
    </div>
  )
}

export default Card