/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import "./areasOfFocus.css";
const AreasOfFocus = () => {
	return (
		<div className="areas-of-focus-section">
			<h3 className="area-of-focus-title">
        Areas of focus
			</h3>
			<div className="need-to-work-on-section">
				<h3 className="subtitle-text">
          Need to work on...
				</h3>
				<div className="area-text-section-red">
					<button className="dummy-button">CSS</button>
				</div>
			</div>
			<div className="okay-at-section">
				<h3 className="subtitle-text">Okay at...</h3>
				<div className="area-text-section-yellow">
					<button className="dummy-button">CSS</button>
				</div>
			</div>
			<div className="good-at-section">
				<h3 className="subtitle-text">Good at...</h3>
				<div className="area-text-section-green">
					<button className="dummy-button">CSS</button>
				</div>
			</div>
			<form>
				<label className="areas-input-label">
          Add area of focus:
					<div>
						<input
							className="areas-input"
							type="text"
							name="area"
							placeholder="eg. CSS, useEffect Hook, for loop..."
						/>
					</div>
				</label>
				<div>
					<input
						className="send-input-red"
						name="red"
						type="button"
					/>
					<input
						className="send-input-yellow"
						type="button"
						name="yellow"
					/>
					<input
						className="send-input-green"
						type="button"
						name="green"
					/>
				</div>
				<div className="add-area-button-section">
					<button className="add-area-button">Add area</button>
				</div>
			</form>
		</div>
	);
};

export default AreasOfFocus;