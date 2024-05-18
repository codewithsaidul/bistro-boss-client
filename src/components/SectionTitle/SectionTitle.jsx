

const SectionTitle = ( { heading, subHeading } ) => {
  return (
    <div className="w-full md:w-3/12 mx-auto text-center mb-16 px-4 md:px-0">
        <p  className="text-xl text-[#D99904] mb-4"> ---{subHeading}--- </p>
        <h1 className="text-3xl font-bold text-black border-y-4 py-4">{heading}</h1>
    </div>
  )
}

export default SectionTitle