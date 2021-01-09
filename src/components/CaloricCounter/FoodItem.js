export default function FoodItem(props) {
	return (
		<div>
			<p>{props.foodName} p:{props.protein} c:{props.carbs} f:{props.fats}</p>
		</div>
	);
}
