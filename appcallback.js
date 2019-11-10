const posts = [
	{ title: 'post 1', body: 'This is post one' },
	{ title: 'post 2', body: 'This is post two' }
];

function createPost(post, callback) {
	setTimeout(function () {
		console.log('in createpost')
		posts.push(post);
		callback();
	}, 2000);
}

function getPosts() {
	setTimeout(function () {
		let output = '';
		posts.forEach(function (post) {
			output += `
				<li>${post.title}</li>
			`;
		})
		console.log('in createpost')
		document.getElementById('callbackOutput').innerHTML = output;
	}, 1000);
}

createPost({ title: 'post3', body: 'this is p3' }, getPosts);
//getPosts();