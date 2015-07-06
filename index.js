var Base = require('mocha/lib/reporters/base');

function Min(runner) {
  Base.call(this, runner);

  runner.on('start', function(){
    process.stdout.write('running tests...\n')
  });

  runner.on('end', this.epilogue.bind(this));
}

Min.prototype.__proto__ = Base.prototype

exports = module.exports = Min;
