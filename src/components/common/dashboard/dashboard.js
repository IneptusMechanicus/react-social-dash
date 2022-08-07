import {Panel} from "./../panel/panel";

export const Dashboard = (props) => {
	return (
		<div class="app">
			<div className="left">
				<Panel title="Dashboard"
					main={[
						{"title": "About", "url": "/about"},
						{"title": "Settings", "url": "/settings"}
					]}
					footer={{
						"class": "text",
						"content": "Social Dash \u00A9 No Rights Reserved"
					}}
				/>
			</div>
			<div className="center">

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