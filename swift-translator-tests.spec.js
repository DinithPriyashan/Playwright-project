const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};


const TEST_DATA = {
  positive: [
    
    {
      tcId: 'Pos_Fun_001',
      name: 'Convert a simple sentence',
      input: 'mama gedhara yanavaa.',
      expected: 'මම ගෙදර යනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Simple need/request sentence',
      input: 'mata bath oonee.',
      expected: 'මට බත් ඕනේ.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Compound sentence with conjunction',
      input: 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.',
      expected: 'අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා.',
      category: 'Word combination',
      grammar: ' Compound sentence',
      length: 'M'
    },
    
   
    {
      tcId: 'Pos_Fun_004',
      name: 'Complex sentence (condition)',
      input: 'oyaa enavaanam mama balan innavaa.',
      expected: 'ඔයා එනවානම් මම බලන් ඉන්නවා.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Interrogative greeting with punctuation',
      input: 'oyaata kohomadha?',
      expected: 'ඔයාට කොහොමද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_006',
      name: 'Imperative command',
      input: 'vahaama enna.',
      expected: 'වහාම එන්න.',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
  
    {
      tcId: 'Pos_Fun_007',
      name: 'Positive statement form',
      input: 'mama ehema karanavaa.',
      expected: 'මම එහෙම කරනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Negative statement form',
      input: 'api heta ennee naehae.',
      expected: 'අපි හෙට එන්නේ නැහැ.',
      category: 'Negation (negative form)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Greeting with exclamation',
      input: 'aayuboovan!',
      expected: 'ආයුබෝවන්!',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
  
    {
      tcId: 'Pos_Fun_010',
      name: 'Polite help request (question)',
      input: 'mata udhavvak karanna puLuvandha?',
      expected: 'මට උදව්වක් කරන්න පුළුවන්ද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Affirmative response',
      input: 'hari, mama karannam.',
      expected: 'හරි, මම කරන්නම්.',
      category: 'Daily language usage',
      grammar: 'simple sentence',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_012',
      name: 'Polite phrasing long form',
      input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
      expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Informal phrasing imperative',
      input: 'ehema karapan.',
      expected: 'එහෙම කරපන්.',
      category: 'Slang / informal language',
      grammar: 'imperative (command)',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_014',
      name: 'Common daily expression',
      input: 'mata nidhimathayi.',
      expected: 'මට නිදිමතයි.',
      category: 'Daily language usage',
      grammar: 'simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Multi-word expression',
      input: 'gihin enna.',
      expected: 'ගිහින් එන්න.',
      category: 'Word combination / phrase pattern',
      grammar: 'simple sentence',
      length: 'S'
    },
    

    {
      tcId: 'Pos_Fun_016',
      name: 'Proper spacing preserved',
      input: 'heta api yanavaa.',
      expected: 'හෙට අපි යනවා.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Repeated word emphasis',
      input: 'tika tika',
      expected: 'ටික ටික',
      category: 'Word combination / phrase pattern',
      grammar: 'simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_018',
      name: 'Past tense sentence',
      input: 'mama iiyee gedhara giyaa.',
      expected: 'මම ඊයේ ගෙදර ගියා.',
      category: 'Present tense / Past tense / Future',
      grammar: 'Past tense',
      length: 'S'
    },
    
  
    {
      tcId: 'Pos_Fun_019',
      name: 'Present tense sentence',
      input: 'api kaeema kanavaa.',
      expected: 'අපි කෑම කනවා.',
      category: 'Present tense / Past tense / Future tense',
      grammar: 'Present tense',
      length: 'S'
    },
    

    {
      tcId: 'Pos_Fun_020',
      name: 'Future tense sentence (planning)',
      input: 'api iilaga sathiyee gedhara yamu.',
      expected: 'අපි ඊලග සතියේ ගෙදර යමු.',
      category: 'Present tense / Past tense / Future tense',
      grammar: 'Future tense',
      length: 's'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Pronoun (singular third person)',
      input: 'eyaa gedhara giyaa.',
      expected: 'එයා ගෙදර ගියා.',
      category: 'Pronoun variation (I/you/we/they)',
      grammar: 'simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_022',
      name: 'Pronoun (plural)',
      input: 'eyaalaa enavaa.',
      expected: 'එයාලා එනවා.',
      category: 'Pronoun variation (I/you/we/they)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_023',
      name: 'Mixed English technical/brand termt',
      input: 'Zoom meeting ekak thiyenavaa.',
      expected: 'Zoom meeting එකක් තියෙනවා.',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
  
    {
      tcId: 'Pos_Fun_024',
      name: 'Date formatting remains unchanged',
      input: '25/12/2025',
      expected: '25/12/2025',
      category: 'punctuation / numbers',
      grammar: 'simple sentence',
      length: 'S'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Joined words (no spaces) degrade conversion',
      input: 'mamagedharayanavaa',
      expected: 'මම ගෙදර යනවා.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Missing spacing inside phrase',
      input: 'matapaankannaoonee',
      expected: 'මට පාන් කන්න ඕනේ.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Heavy slang phrase',
      input: 'ela machan supiri!!',
      expected: 'එළ මචන් සුපිරි!!',
      category: ' Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Multiple typos and character elongation',
      input: 'maam gehdra yanuvaaa',
      expected: 'මම ගෙදර යනවා.',
      category: ' Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Long paragraph with complex terms',
      input: 'mama adha udhaasanayen indalaa vaedak thibba nisaa office yanna parakku vuna. traffic godak thibba, e nisaa bus eka late vuna. mama email ekak check karala Teams meeting eka join vuna, eth samahara documents tika attach karanna amathaka vuna. passe mama manager ta call karala samaavenna kiyalaa, dawasata report eka yavannam kiyalaa kiyuwā. raa wenakota mama gedhara giyaa, nidhimathayi nisaa daen ithin poddak rest karanavaa.',
      expected: 'මම අද උදෑසනයෙන් ඉඳලා වැඩක් තිබ්බ නිසා office යන්න පරක්කු වුණා. traffic ගොඩක් තිබ්බ, ඒ නිසා bus එක late වුණා. මම email එකක් check කරලා Teams meeting එක join වුණා, ඒත් සමහර documents ටික attach කරන්න අමතක වුණා. පස්සේ මම manager ට call කරලා සමාවෙන්න කියලා, දවසට report එක යවන්නම් කියලා කිව්වා. රා වෙන්නකොට මම ගෙදර ගියා, නිදිමතයි නිසා දැන් ඉතින් පොඩ්ඩක් rest කරනවා.',
      category: ' Formatting (spaces / line breaks / paragraph)',
      grammar: 'Complex sentence',
      length: 'L'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Slang with discourse particle',
      input: 'adoo vaedak baaragaththaanam eeka hariyata karapanko',
      expected: 'අඩෝ වැඩක් භාරගත්තානම් ඒක හරියට කරපන්කෝ',
      category: 'Slang / informal language',
      grammar: 'simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'English abbreviations mixed in',
      input: 'mama PC GPU RAM gannava',
      expected: 'මම PC GPU RAM ගන්නවා',
      category: 'Mixed Singlish + English',
      grammar: 'simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Punctuation noise',
      input: 'mama..?? yanne??',
      expected: 'මම? යන්නේ?',
      category: 'Punctuation / numbers',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Currency with tight spacing + typo',
      input: 'Rs.5343 mata onea',
      expected: 'Rs. 5343 මට ඕනේ',
      category: 'Punctuation / numbers',
      grammar: 'simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Multi-line input with irregular breaks',
      input: 'mama gedhara yanava\noyaa enavadha maath ekka yanna?',
      expected: 'මම ගෙදර යනවා.\nඔයා එනවාද මාත් එක්ක යන්න?',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'compound sentence',
      length: 'M'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama gedhara yanavaa',
    partialInput: 'mama gedh',
    expectedFull: 'මම ගෙදර යනවා',
    category: ' Daily language usage',
    grammar: 'Simple sentence',
    length: 'S'
  }

};


class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
