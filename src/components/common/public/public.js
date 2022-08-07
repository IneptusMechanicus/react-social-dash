import {Panel} from "./../panel/panel";

export const Public = (props) => {
	return (
		<div class="app">
			<div className="main">
				{props.children}
			</div>
			<div className="right">
				<Panel title=""
					main={[
						{"title": "About", "url": "/about"},
						{"title": "Settings", "url": "/settings"}
					]}
					footer={{"class": "text"}}
				/>
			</div>
		</div>
	)
}