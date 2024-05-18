

const MenuItem = ( { item } ) => {
    const { name, recipe, image, price } = item;

  return (
    <div className="flex gap-5">
        <figure>
            <img className="w-[118px] h-[104px] rounded-[0_200px_200px_200px]" src={image} alt="Menu Item Image" />
        </figure>

        <div>
            <h3 className="text-xl text-[#151515]">{name}---------- </h3>
            <h5 className="text-[#737373]">{recipe}</h5>
        </div>

        <p className="text-xl text-[#BB8506]">${price}</p>
    </div>
  )
}

export default MenuItem