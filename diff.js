module.exports = (app) => {
	const Diff = require('diff');
	app.get("/t", (req, res) => {
		new Promise((_, reject) => reject(new Error('woops')));
		res.send("Should reject")
	})
	app.get("/diff", (req, res) => {
		res.json(Diff.diffChars(req.query.one, req.query.two));
	});
	app.post("/diff", (req, res) => {
		res.json(Diff.diffChars(req.body.one, req.body.two));
	})
}