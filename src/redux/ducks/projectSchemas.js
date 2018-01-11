export const GET_SCHEMAS = 'GET_SCHEMAS';

const DEFAULT_STATE = {
	schemas: {
		['345345'] : [
			{
				name: 'dog',
				id: 1,
				fields: [
					{
						id: 1,
						name: 'name',
						type: 'string'
					},
					{
						id: 2,
						name: 'age',
						type: 'number'
					}
				]
			},
			{
				name: 'cat',
				id: 2,
				fields: [
					{
						id: 1,
						name: 'name',
						type: 'string'
					},
					{
						id: 2,
						name: 'age',
						type: 'number'
					}
				]
			}
		],
		['4567457'] : []
	}
};

export const getSchemas = (id) => ({
	type: GET_SCHEMAS,
	id: id
});

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case GET_SCHEMAS:
			console.log(state,state.schemas[action.id] );
			return state.schemas[action.id];
		default:
			return state;
	}
};