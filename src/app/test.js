describe('helloworld', () => {
  let expected = '';
  beforeEach(() => {
    expected = 'hello world';
  });

  afterEach(() => {
    expected = '';
  });
  it('says hello', () => {
    expect(helloworld()).toEqual(expected);
  });
});
