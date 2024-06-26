import FoodCard from "../../../components/FoodCard/FoodCard"


const OrderTab = ( {items } ) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-10 px-4 md:px-0">
              {items.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
  )
}

export default OrderTab