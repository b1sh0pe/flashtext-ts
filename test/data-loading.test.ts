import { FlashText } from '../src/flashtext';

describe('Data Loading', () => {
  it('should load data correctly', () => {
    const flashText = new FlashText();
    flashText.addKeywordsFromDict({
      javascript: ['javascript_2', 'javascript language'],
      'product management': [
        'product management techniques',
        'product management',
      ],
    });

    const sentence = 'I know javascript_2 and product management techniques';

    const keywordsExtracted = flashText.extractKeywords(sentence);
    expect(keywordsExtracted).toEqual(['javascript', 'product management']);

    const secondSentence = flashText.replaceKeywords(sentence);
    expect(secondSentence).toEqual('I know javascript and product management');
  });

  it('should set non-word boundaries correctly', () => {
    const flashText = new FlashText();

    // Should not throw an error
    flashText.setNonWordBoundaries(new Set(['123456789']));

    expect(flashText.nonWordBoundaries).toEqual(new Set(['123456789']));

    flashText.addNonWordBoundary('abcde');

    expect(flashText.nonWordBoundaries).toEqual(
      new Set(['123456789', 'abcde'])
    );
  });
});
