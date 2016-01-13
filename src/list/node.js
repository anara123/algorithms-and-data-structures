
const Node = {

	create: function(data) {
		return Object.create(Node).init(data);
	},

	init: function(data) {
		this.value = data;
		this.next = null;

		return this;
	},

	// O(1)
	insert: function(data) {
		var newNode = Node.create(data);
		newNode.next = this.next;
		this.next = newNode;

		return newNode;
	},

	// O(1)
	remove: function(previousNode) {
		previousNode.next = this.next;
		this.next = undefined;

		return this.value;
	},

	hasNext: function() {
		return this.next !== null;
	}
};

export default Node;