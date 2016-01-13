import Node from './node';

const LinkedList = {

	create: function() {
		return Object.create(LinkedList).init();
	},

	init: function() {
		this.length = 0;
		this.head = Node.create(null);
		this.tail = this.head;

		return this;
	},

	// O(1)
	insert: function(elem) {

		this.length += 1;

		if (this.head === null) {
			this.head = Node.create(elem);
		}
		else {
			this.tail = this.tail.insert(elem);
		}
	},

	// O(N)
	remove: function(index) {
		
		if (index < 0 || index >= this.length) {
			return new Error('Out of bound index');
		}

		this.length -= 1;

		var node = this.getNodeAtIndex(index);
		var previousNode = this.getNodeAtIndex(index - 1);

		node.remove(previousNode);

		return node.value;
	},

	// O(N)
	getNodeAtIndex: function(index) {
		var node = this.head.next;

		for(var i = 0; i < index; i++) {
			node = node.next;
		}

		return node;
	},

	// O(N)
	getAtIndex: function(index) {
		if (index < 0 || index >= this.length) {
			return new Error('Out of bound index');
		}

		var node = this.getNodeAtIndex(index);

		return node.value;
	},

	// O(N)
	toString: function() {
		const sb = [];
		let node = this.head;

		do {
			node = node.next;
			sb.push(node.value);
		} 
		while(node.hasNext());

		return sb.join(' --> ');
	}
};

export default LinkedList;