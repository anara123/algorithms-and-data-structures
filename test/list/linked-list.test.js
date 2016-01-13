import {assert} from 'chai';

import LinkedList from '../../src/list/linked-list';

describe('LinkedList test', function () {
	
	describe('empty list', function () {
		
		it('should have length 0', function () {
			var list = LinkedList.create();

			assert.equal(list.length, 0);
		});
	});

	describe('insert new element', function () {
		
		const list = LinkedList.create();
		before(function() {
			list.insert('elem1');
		});

		it('should have length of 1', function () {
			assert.equal(list.length, 1);
		});

		it('element should be inserted at the beginning of the list', function () {
			assert.equal(list.getAtIndex(0), 'elem1');
		});
	});

	describe('insert 2 new elements', function () {
		
		const list = LinkedList.create();
		before(function() {
			list.insert('elem1');
			list.insert('elem2');
		});

		it('should have length of 2', function () {
			assert.equal(list.length, 2);
		});

		it('should have element at 0 index', function () {
			assert.equal(list.getAtIndex(0), 'elem1');
		});

		it('should have element at 1 index', function () {
			assert.equal(list.getAtIndex(1), 'elem2');
		});

	});


	describe('get element at index', function () {
		
		it('should return object', function() {
			const list = LinkedList.create();
			list.insert(10);
			list.insert(11);
			list.insert(12);
			list.insert(13);

			assert.equal(
				list.getAtIndex(2), 
				12);
		});
	});


	describe('#remove item at index', function () {
		
		const list = LinkedList.create();
		before(function() {
			list.insert(10);
			list.insert(11);
			list.insert(12);
			list.insert(13);

			list.remove(2);
		});

		it('should remove the item', function () {
			assert.equal(list.getAtIndex(2), 13);		
		});

		it('length of list should decrease by 1', function () {
			assert.equal(list.length, 3);
		});
	});

	describe('toString', function () {
		
		it('should return all the nodes connected via sign -->', function () {
			const list = LinkedList.create();
			list.insert(10);
			list.insert(11);
			list.insert(12);

			assert.equal(
				list.toString(),
				'10 --> 11 --> 12');
		});
	});
});