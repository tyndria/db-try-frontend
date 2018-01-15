const DEFAULT_STATE = {
	data: [{
		"operation": "Create",
		"MongoDB": 3.5,
		"MySQL": 4.2
	}, {
		"operation": "Update",
		"MongoDB": 1.7,
		"MySQL": 3.1
	}, {
		"operation": "Read",
		"MongoDB": 2.8,
		"MySQL": 2.9
	}, {
		"operation": "Delete",
		"MongoDB": 2.6,
		"MySQL": 2.3
	}]
};


export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		default:
			return state;
	}
};