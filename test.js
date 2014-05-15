var db = require('./index.js').db,
    expect = require('chai').expect;

describe('Postgres Database', function () {
  this.timeout(3000);
  beforeEach(function (done) {
    setTimeout(function () {
      done();
    }, 1000);
  });
  it('should create a table', function (done) {
    db.schema.hasTable('things').then(function (exists) {
      if (!exists) {
        db.schema.createTable('things', function (table) {
          table.string('name');
        }).then(function () {
          done();
        });
      } else {
        done();
      }
    });
  });
  it('should save a new name', function (done) {
    db('things')
      .insert({ name: 'Johnson' })
      .exec(function (err) {
        expect(err).to.equal(null);
        done();
      });
  });
  it('should retrieve that name', function (done) {
    db('things')
      .select()
      .then(function (docs) {
        expect(docs[0].name).to.equal('Johnson');
        done();
      });
  });
});
