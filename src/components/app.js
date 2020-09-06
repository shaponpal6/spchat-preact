import { h, Component } from "preact";
import { connect } from "preact-redux";
import reduce from "../store/reducers/reducers";
import * as actions from "../store/actions/actions";

// Firebase
// import {saveMessage} from '../core/firebase/firebaseEvents';

// import TodoItem from "./todo-item";
// import Header from "./chat-widget/header";
// import Footer from "./chat-widget/footer";
// import ChatContainer from "./chat-widget/container";
import ComponentsManager from "./components-manager";
import style from "./style";

//const app = new firebaseEvents();

@connect(reduce, actions)
class AppComponent extends Component {
	addTodos = () => {
		console.log("add...", this.state);
		// console.log('event...', app);
		// saveMessage(this.state.text)
		this.props.addTodo(this.state.text);
		this.setState({ text: "" });
	};

	removeTodo = (todo) => {
		this.props.removeTodo(todo);
	};

	//onLogedIn
	onLogedIn = () => {
		console.log("onLogedIn");
		app.signIn();
	};

	//onLogedOut
	onLogedOut = () => {
		console.log("onLogedOut");
		app.signOut;
	};
	// onMenuToggle
	onMenuToggle = () => {
		console.log("onCloseWidget111");
	};
	//onCloseWidget
	onCloseWidget = () => {
		console.log("onCloseWidget");
	};

	updateText = (e) => {
		console.log("updateing...", e);

		this.setState({ text: e.target.value });
	};

	// Button Click
	onChatButtonClick = () => {
		console.log("clicked Button");
		// this.props.addTodo(this.state.text);
		// this.setState({ text: "" });
		console.log();
	};
	// Button Hover
	onChatButtonHover = () => {
		console.log("Hover Button");
		// this.props.addTodo(this.state.text);
		// this.setState({ text: "" });
	};

	render({ todos }, { text }) {
		return (
			<div class={style.chatContainer}>
				<ComponentsManager
					store={{
						chatWidget: {
							header: {
								isLogedIn: false,
								onLogedIn: this.onLogedIn,
								onLogedOut: this.onLogedOut,
								operators: [
									{ name: "Shapon Pal", avater: "" },
									{ name: "Shapon Pal2", avater: "" },
									{ name: "Shapon Pal3", avater: "" },
									{ name: "Shapon Pal4", avater: "" },
								],
								chatText: "Chat With",
								onMenuToggle: this.onMenuToggle,
								onCloseWidget: this.onCloseWidget,
								
							},
							todos,
							removeTodo: this.removeTodo,
							text,
							addTodos: this.addTodos,
							updateText: this.updateText,
							footer: {
								placeholder: "Type here....",
								onBotStatus: this.onMenuToggle,
								onMenuExpend: this.onCloseWidget,
								onAttachment: this.onCloseWidget,
								onInputSubmit: this.addTodos,
								onInputChange: this.updateText,
							},
						},
						chatDashboard: {
							todos,
							removeTodo: this.removeTodo,
							text,
							addTodos: this.addTodos,
							updateText: this.updateText,
						},
						chatButton: {
							onChatButtonClick: this.onChatButtonClick,
							onChatButtonHover: this.onChatButtonHover,
							buttonType: "chatICON",
						},
						chatIntro: {
							onChatButtonClick: this.onChatButtonClick,
							chatIntroType: "general",
						},
					}}
				/>

				{/* <Header />
				<ChatContainer store={todos} removeToDo={this.removeTodo} />
				<Footer
					value={text}
					onSubmit={this.addTodos}
					onInput={this.updateText}
				/> */}
			</div>
		);
	}
}

export default AppComponent;
