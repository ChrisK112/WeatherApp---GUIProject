import preact from 'preact';
import { h, render, Component } from 'preact';

import style from './style';

export default class WeatherBox extends preact.Component {

	getUnit = () => {
		return this.props.settings.temperature_units;
	}

	getLoc = () => {
		return this.props.settings.location;
	}

    // rendering a function when the button is clicked
	render() {
		let textColour = {
			color: this.props.settings.text_colour
		}
		return (
			<div class={ style.weatherBox } style = { textColour } >
				<div>
					<div class = {style.futureDay}>{ this.props.f1.fday1 } <img id = { style.boximg } src= { this.props.f1.fimg1 } ></img>  { this.props.f1.ft1 }&#176;{ this.getUnit() } </div>
					<div class = {style.futureDay}>{ this.props.f2.fday2 }  <img id = { style.boximg } src= {this.props.f2.fimg2 } ></img>  { this.props.f2.ft2 }&#176;{ this.getUnit() } </div>
					<div class = {style.futureDayLast}>{ this.props.f3.fday3 }  <img id = { style.boximg } src= { this.props.f3.fimg3 } ></img>   { this.props.f3.ft3 }&#176;{ this.getUnit() } </div>
				</div>
				<div class ={ style.today }>
					<h1 class = { style.todayText } > TODAY </h1>
					<h2 class = { style.todayText } > { this.getLoc() } </h2>
					<div class = { style.condition } > <img src = { this.props.cond } > </img> </div>
					<div class = { style.temperature } >{ this.props.temp }&#176;{ this.getUnit() } </div>
				</div>

			</div>
		);
	}
}

