// // In a real app, this data would live in a database,
// // rather than in memory. But for now, we cheat.
const db = new Map();


export function getMember(userid){
    if(!db.get(userid)){
        db.set(userid,[{
            id: crypto.randomUUID(),
			name: 'ohm jezz',
			done: false
        },
        {
            id: crypto.randomUUID(),
			name: 'ohm jezza',
			done: false
        },
        {
            id: crypto.randomUUID(),
			name: 'ohm jezzier500',
			done: false
        }]);
    }

    // console.log(db.get(userid));
    return db.get(userid);
}


export function createMember(userid, membername) {
    const member = db.get(userid);

    member.push({
        		id: crypto.randomUUID(),
        		name: membername,
        		done: false
        	});
}
// /**
//  * @param {any} userid
//  */
// export function getTodos(userid) {
// 	if (!db.get(userid)) {
// 		db.set(userid, [{
// 			id: crypto.randomUUID(),
// 			description: 'Learn SvelteKit',
// 			done: false
// 		}]);
// 	}

//     console.log(db.get(userid)[0]);
//     // console.log(db.get(userid).findIndex(,));

// 	return db.get(userid);
// }

// /**
//  * @param {any} userid
//  * @param {any} description
//  */
// export function createTodo(userid, description) {
// 	const todos = db.get(userid);

// 	todos.push({
// 		id: crypto.randomUUID(),
// 		description,
// 		done: false
// 	});
// }

// /**
//  * @param {any} userid
//  * @param {any} todoid
//  */
// export function deleteTodo(userid, todoid) {
// 	const todos = db.get(userid);
// 	const index = todos.findIndex((/** @type {{ id: any; }} */ todo) => todo.id === todoid);

// 	if (index !== -1) {
// 		todos.splice(index, 1);
// 	}
// }
