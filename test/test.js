var request = require('request'),
    expect = require('chai').expect;

// var phrases = require('../public/scripts/phrases.js');

describe('amazon.com', function() {
  it('should have a HTTP of 200 - success', function(done) {
    this.timeout(5000);
    request('http://amazon.com', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
      console.log(err, res, body);
    })
  })
});

describe('/', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
      console.log(err, res, body);
    })
  })
});

describe('/api/phrases', function() {
  it('should have IDs and phrases', function(done) {
    request('http://localhost:3000/api/phrases', function(err, res, body) {
      expect(res.body).include('definition')
      // expect(res.body).include('a;slkdjfa;slkdfj;a')
      done();
      console.log(err, res, body);
    })
  })
});

describe('/api/phrases/:id', function() {
  it('should return one phrase object', function(done) {
    request('http://localhost:3000/api/phrases/1', function(err, res, body) {
    // request('http://localhost:3000/api/phrases/a', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      done();
      console.log(err, res, body);
    })
  })
});

describe('/api/study-sets', function() {
  it('should have a key called phraseIds', function(done) {
    request('http://localhost:3000/api/study-sets', function(err, res, body) {
      expect(res.body).include('phraseIds')
      // expect(res.body).include('userIds')
      done();
      console.log(err, res, body);
    })
  })
});

describe('/api/study-sets/:setId', function() {
  it('should return the specified study-set', function(done) {
    request('http://localhost:3000/api/study-sets/1', function(err, res, body) {
    // request('http://localhost:3000/api/study-sets/dog', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
      console.log(err, res, body);
    })
  })
});

// describe('/api/study-sets/:setId/phrases', function() {
//   it('should show the phrases from one set', function(done) {
//     request('http://localhost:3000/api/study-sets/:setId/phrases', function(err, res, body) {
//       expect(res.statusCode).to.equal(200)
//       // expect(res.statusCode).to.equal(300)
//       done();
//       console.log(err, res, body);
//     })
//   })
// });

describe('/api/study-sets/:setId/notes', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000/api/study-sets/1/notes', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
      console.log(err, res, body);
    })
  })
});

describe('/api/phrases', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request.post('http://localhost:3000/api/phrases', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(404)
      done();
      console.log(err, res, body);
    })
  })
});

describe('/api/phrases/:id', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request.put('http://localhost:3000/api/phrases/1', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(404)
      done();
      console.log(err, res, body);
    })
  })
});

// describe('/api/phrases/:id', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request.delete('http://localhost:3000/api/phrases/1', function(err, res, body) {
//       expect(res.statusCode).to.equal(200)
//       // expect(res.statusCode).to.equal(404)
//       done();
//       console.log(err, res, body);
//     })
//   })
// });
