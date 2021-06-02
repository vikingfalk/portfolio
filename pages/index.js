import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
	return (
		<>
			<Head>
				<title>Viking Falk</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			</Head>
			<Navbar />
			<Header />
			<About />
			<Projects />
		</>
	);
}
