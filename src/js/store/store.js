const getState = scope => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					token: "",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: "",
			status: ""
		},
		actions: {
			changeColor: (element, color) => {
				let store = scope.state.store;
				store.demo[element].background = color;
				scope.setState({ store });
			}
		}
	};
};

export default getState;
