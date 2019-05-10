const arrify = require('arrify');
const has = require('lodash.has');
const readPkgUp = require('read-pkg-up');

const { pkg } = readPkgUp.sync();

const hasPkgProp = props => arrify(props).some(prop => has(pkg, prop));

const hasPkgSubProp = pkgProp => props =>
  hasPkgProp(arrify(props).map(p => `${pkgProp}.${p}`));

const hasDependencies = hasPkgSubProp('dependencies');
const hasDevDependencies = hasPkgSubProp('devDependencies');

const stripSemverRanges = range => range.replace(/[>=<^~|]/g, '');

module.exports = {
  hasDependencies,
  hasDevDependencies,
  pkg,
  stripSemverRanges,
};
