function wait() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Timeout resolved')
		}, 5000)
	})
}

async function main() {
	console.log('Entry')
	const result = await wait()
	console.log(result)
	console.log('What')
	return 'Return'
}

main().then(result => {
	console.log(result)
})

