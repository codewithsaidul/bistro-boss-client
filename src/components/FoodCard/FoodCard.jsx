const FoodCard = ({ item }) => {

    const { name, recipe, image} = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="text-xl text-[#BB8506] font-medium py-3 px-7 bg-[#E8E8E8] border-b-4 rounded-lg border-[#BB8506] hover:bg-[#111827]">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
