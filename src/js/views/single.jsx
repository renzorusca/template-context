import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Single extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<Context.Consumer>
					{({ store }) => {
						return (
							<h5 className="display-5">
								TOKEN: {store.token.token}
								<br />
								STATUS: {store.status}
							</h5>
						);
					}}
				</Context.Consumer>

				<hr className="my-4" />

				<Link to="/">
					<span
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
