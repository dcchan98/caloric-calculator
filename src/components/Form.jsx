/** @format */

export default function Form(props) {
	return (
		<div>
			<form action=''></form>
			<label htmlFor="name">Enter name: </label>
			<input id= "name" type="text" />
			<button style={{ color: 'white', backgroundColor: 'blue' }}>
				submit
			</button>
		</div>
	);
}
