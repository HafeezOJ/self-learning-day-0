const assert = require('chai').assert;
const app = require('../app/main.js');

describe('aritGeo', function(){
	it('should return 0 for an empty array', function(){
		assert.equal(app.aritGeo([]),0);
	});
});

describe('aritGeo', function(){
	it('should return Arithmetic for [1,2,3,4]',function(){
		assert.equal(app.aritGeo([1,2,3,4]), 'Arithmetic');
	});
});

describe('aritGeo', function(){
	it('should return -1 for [1,2]',function(){
		assert.equal(app.aritGeo([1,2]), -1);
	});
});

describe('aritGeo', function(){
	it('should return -1 for [49,5,66,78,88,99]',function(){
		assert.equal(app.aritGeo([49,5,66,78,88,99]), -1);
	});
});

describe('aritGeo', function(){
	it('should return Arithmetic for [20,40,60,80,100,120,140,160,180,200]',function(){
		assert.equal(app.aritGeo([20,40,60,80,100,120,140,160,180,200]), 'Arithmetic');
	});
});

describe('aritGeo', function(){
	it('should return Geometric for [3,9,27,81,243]',function(){
		assert.equal(app.aritGeo([3,9,27,81,243]), 'Geometric');
	});
});

describe('aritGeo', function(){
	it('should return Arithmetic for [10,9,8,7,6,5,4,3,2,1]',function(){
		assert.equal(app.aritGeo([10,9,8,7,6,5,4,3,2,1]), 'Arithmetic');
	});
});

describe('aritGeo', function(){
	it('should return -1 for [20,598,596,47,474,6878,465,123]',function(){
		assert.equal(app.aritGeo([20,598,596,47,474,6878,465,123]),-1);
	});
});

describe('aritGeo', function(){
	it('should return -1 for [3474]',function(){
		assert.equal(app.aritGeo([3474]),-1);
	});
});

describe('aritGeo', function(){
	it('should return 0 for []',function(){
		assert.equal(app.aritGeo([]),0);
	});
});

describe('aritGeo', function(){
	it('should return -1 for [1000,100,0.1]',function(){
		assert.equal(app.aritGeo([1000,100,0.1]),-1);
	});
});