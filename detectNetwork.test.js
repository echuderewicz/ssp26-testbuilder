/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 5;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
})

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901232') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it("Has a prefix of 51", function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it("Has a prefix of 52", function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it("Has a prefix of 53", function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var should = chai.should();
  
  // it('has a prefix of 54 and a length of 16', function() {
  //   detectNetwork('5412345678901234').should.equal(FILL_ME_IN);
  // });
 
  // it('has a prefix of 55 and a length of 16', function() {
  //   detectNetwork('5512345678901234').should.equal(FILL_ME_IN);
  // })

  it("Has a prefix of 54", function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it("Has a prefix of 55", function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  var expect = chai.expect;

  it("Has a prefix of 65 and a length of 16", function() {
    expect(detectNetwork('6512345678901234')).to.equal('Discover');
  });

  it("Has a prefix of 65 and a length of 19", function() {
    expect(detectNetwork('6512345678901234000')).to.equal('Discover');
  });

  it("Has a prefix of 6011 and a length of 16", function() {
    expect(detectNetwork('6011345678901234')).to.equal('Discover');
  });

  it("Has a prefix of 6011 and a length of 19", function() {
    expect(detectNetwork('6011345678901234000')).to.equal('Discover');
  });

  it("Has a prefix of 644 and a length of 16", function() {
    expect(detectNetwork('6441345678901234')).to.equal('Discover');
  });

  it("Has a prefix of 644 and a length of 19", function() {
    expect(detectNetwork('6441345678901234000')).to.equal('Discover');
  });

  it("Has a prefix of 645 and a length of 16", function() {
    expect(detectNetwork('6451345678901234')).to.equal('Discover');
  });

  it("Has a prefix of 645 and a length of 19", function() {
    expect(detectNetwork('6451345678901234000')).to.equal('Discover');
  });

  it("Has a prefix of 646 and a length of 16", function() {
    expect(detectNetwork('6461345678901234')).to.equal('Discover');
  });

  it("Has a prefix of 646 and a length of 19", function() {
    expect(detectNetwork('6461345678901234000')).to.equal('Discover');
  });

  it("Has a prefix of 647 and a length of 16", function() {
    expect(detectNetwork('6471345678901234')).to.equal('Discover');
  });

  it("Has a prefix of 647 and a length of 19", function() {
    expect(detectNetwork('6471345678901234000')).to.equal('Discover');
  });

  it("Has a prefix of 648 and a length of 16", function() {
    expect(detectNetwork('6481345678901234')).to.equal('Discover');
  });

  it("Has a prefix of 648 and a length of 19", function() {
    expect(detectNetwork('6481345678901234000')).to.equal('Discover');
  });

  it("Has a prefix of 649 and a length of 16", function() {
    expect(detectNetwork('6491345678901234')).to.equal('Discover');
  });

  it("Has a prefix of 649 and a length of 19", function() {
    expect(detectNetwork('6491345678901234000')).to.equal('Discover');
  });
  
});

describe('Maestro', function() {
  var expect = chai.expect;
  // Write full test coverage for the Maestro card
  it("Has a prefix of 5018 and a length of 12", function() {
    expect(detectNetwork('501834567890')).to.equal('Maestro');
  });

  it("Has a prefix of 5018 and a length of 13", function() {
    expect(detectNetwork('5018345678900')).to.equal('Maestro');
  });

  it("Has a prefix of 5018 and a length of 14", function() {
    expect(detectNetwork('50183456789000')).to.equal('Maestro');
  });

  it("Has a prefix of 5018 and a length of 15", function() {
    expect(detectNetwork('501834567890000')).to.equal('Maestro');
  });

  it("Has a prefix of 5018 and a length of 16", function() {
    expect(detectNetwork('5018345678900000')).to.equal('Maestro');
  });

  it("Has a prefix of 5018 and a length of 17", function() {
    expect(detectNetwork('50183456789000000')).to.equal('Maestro');
  });

  it("Has a prefix of 5018 and a length of 18", function() {
    expect(detectNetwork('501834567890000000')).to.equal('Maestro');
  });

  it("Has a prefix of 5018 and a length of 19", function() {
    expect(detectNetwork('5018345678900000000')).to.equal('Maestro');
  });

  it("Has a prefix of 5020 and a length of 12", function() {
    expect(detectNetwork('502034567890')).to.equal('Maestro');
  });

  it("Has a prefix of 5020 and a length of 13", function() {
    expect(detectNetwork('5020345678900')).to.equal('Maestro');
  });

  it("Has a prefix of 5020 and a length of 14", function() {
    expect(detectNetwork('50203456789000')).to.equal('Maestro');
  });

  it("Has a prefix of 5020 and a length of 15", function() {
    expect(detectNetwork('502034567890000')).to.equal('Maestro');
  });

  it("Has a prefix of 5020 and a length of 16", function() {
    expect(detectNetwork('5020345678900000')).to.equal('Maestro');
  });

  it("Has a prefix of 5020 and a length of 17", function() {
    expect(detectNetwork('50203456789000000')).to.equal('Maestro');
  });

  it("Has a prefix of 5020 and a length of 18", function() {
    expect(detectNetwork('502034567890000000')).to.equal('Maestro');
  });

  it("Has a prefix of 5020 and a length of 19", function() {
    expect(detectNetwork('5020345678900000000')).to.equal('Maestro');
  });

  //

  it("Has a prefix of 5038 and a length of 12", function() {
    expect(detectNetwork('503834567890')).to.equal('Maestro');
  });

  it("Has a prefix of 5038 and a length of 13", function() {
    expect(detectNetwork('5038345678900')).to.equal('Maestro');
  });

  it("Has a prefix of 5038 and a length of 14", function() {
    expect(detectNetwork('50383456789000')).to.equal('Maestro');
  });

  it("Has a prefix of 5038 and a length of 15", function() {
    expect(detectNetwork('503834567890000')).to.equal('Maestro');
  });

  it("Has a prefix of 5038 and a length of 16", function() {
    expect(detectNetwork('5038345678900000')).to.equal('Maestro');
  });

  it("Has a prefix of 5038 and a length of 17", function() {
    expect(detectNetwork('50383456789000000')).to.equal('Maestro');
  });

  it("Has a prefix of 5038 and a length of 18", function() {
    expect(detectNetwork('503834567890000000')).to.equal('Maestro');
  });

  it("Has a prefix of 5038 and a length of 19", function() {
    expect(detectNetwork('5038345678900000000')).to.equal('Maestro');
  });

  //

  it("Has a prefix of 6304 and a length of 12", function() {
    expect(detectNetwork('630434567890')).to.equal('Maestro');
  });

  it("Has a prefix of 6304 and a length of 13", function() {
    expect(detectNetwork('6304345678900')).to.equal('Maestro');
  });

  it("Has a prefix of 6304 and a length of 14", function() {
    expect(detectNetwork('63043456789000')).to.equal('Maestro');
  });

  it("Has a prefix of 6304 and a length of 15", function() {
    expect(detectNetwork('630434567890000')).to.equal('Maestro');
  });

  it("Has a prefix of 6304 and a length of 16", function() {
    expect(detectNetwork('6304345678900000')).to.equal('Maestro');
  });

  it("Has a prefix of 6304 and a length of 17", function() {
    expect(detectNetwork('63043456789000000')).to.equal('Maestro');
  });

  it("Has a prefix of 6304 and a length of 18", function() {
    expect(detectNetwork('630434567890000000')).to.equal('Maestro');
  });

  it("Has a prefix of 6304 and a length of 19", function() {
    expect(detectNetwork('6304345678900000000')).to.equal('Maestro');
  });
  
});


describe('China UnionPay', function() {
  var expect = chai.expect;

  
  function getZeros(suf){
      let zeroString = "";

      for(let i=0; i<suf; i++){
        zeroString += "0";
      }
      return zeroString;
  }

  function getCardNumberString(prefix, length){
    let prefixString = prefix.toString();

    let suffixLength = (length - prefixString.length);

    return prefixString + getZeros(suffixLength);
  }

  function testRange(minPrefix, maxPrefix, length){
    for(let i=minPrefix; i<=maxPrefix; i++){

      let autoString = getCardNumberString(i, length);

      it("Has a prefix of " + i.toString() + " and a length of " + length, function() {
        expect(detectNetwork(autoString)).to.equal('China UnionPay');
      });
    }
  }

  testRange(622126, 622925, 16);
  testRange(624, 626, 16);
  testRange(6282, 6288, 16);

  testRange(622126, 622925, 17);
  testRange(624, 626, 17);
  testRange(6282, 6288, 17);

  testRange(622126, 622925, 18);
  testRange(624, 626, 18);
  testRange(6282, 6288, 18);

  testRange(622126, 622925, 19);
  testRange(624, 626, 19);
  testRange(6282, 6288, 19);


});


describe('should support Switch')










































