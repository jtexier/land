const { formatAddress, formatId, formatOwner } = require('./parcel');

describe('formatAddress', () => {
    it('formats an address', () => {
      expect(formatAddress('   LOUBEAU 79500 MELLE')).toEqual('LOUBEAU 79500 MELLE');
    });
  });
  
describe('formatId', () => {
  it('formats an id', () => {
    expect(formatId('790174    D0328')).toEqual('791740000D0328');
    expect(formatId('790174199 A0051')).toEqual('791741990A0051');
  });
});

describe('formatOwner', () => {
    it('formats an owner', () => {
      expect(formatOwner(' COMMUNE DE MAZIERES SUR BERONNE   79500 MELLE ')).toEqual('COMMUNE DE MAZIERES SUR BERONNE');
    });
  });
  