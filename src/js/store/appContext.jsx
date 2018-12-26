import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			fetch(
				"https://demowordpress-renzorusca.c9users.io/wp-json/jwt-auth/v1/token/",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: "renzorusca",
						password: "1234"
					})
				}
			)
				.then(res => res.json())
				.then(data => {
					let store = this.state.store;
					store.token = data;
					this.setState({ store });
					// set second fetch
					if (this.state.store.token !== "")
						fetch(
							"https://demowordpress-renzorusca.c9users.io/wp-json/jwt-auth/v1/token/validate",
							{
								method: "POST",
								headers: {
									Authorization:
										"Bearer" + this.state.store.token.token
								}
							}
						)
							.then(res => res.json())
							.then(data => {
								let store = this.state.store;
								store.status = data.data.status;
								this.setState({ store });
							})
							.catch(err => {
								alert(err);
							});
					// bottom second fetch
				})
				.catch(err => {
					alert(err);
				});
			// Set your fetchs/Ajax requests here.

			// make sure you're using the store: this.state.store
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
