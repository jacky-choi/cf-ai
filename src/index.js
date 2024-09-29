/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { html } from "hono/html";
import { Hono } from "hono";
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './templates/Home.jsx';

const app = new Hono();

app.post("/api/hello", async (c) => {
	const formData = await c.req.parseBody();
	const question = `Answer this question: ${formData.question} in less than 30 characters for lactose intolerant people.`;
  	const answer = await c.env.AI.run("@cf/meta/llama-3.2-3b-instruct", {
        messages: [{ role: "user", content: question }],
  	});

  	return c.html(
			html`
			<div style="color:black;background-color:white;border:1px solid yellow;width:40%;margin:0 auto;padding:10px 5px;border-radius:5px">
				<p>${formData.question}</p>
				<p>${answer.response}</p>
			</div>
			`
	)
});

app.get("/", async (c) => {
	const html = renderToString(<Home name="Jackie" />);
	return c.html(html);
});

export default app;

