import { nanoid } from 'nanoid';

export const tasks = {
  trigger: {
    name: 'Trigger',
    description: 'Block where workflow will start executing',
    icon: 'riFlashlightLine',
    component: 'BlockBasic',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 0,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['url'],
    data: {
      disableBlock: false,
      description: '',
      type: 'manual',
      interval: 60,
      delay: 5,
      date: '',
      time: '00:00',
      url: '',
      shortcut: '',
      activeInInput: false,
      isUrlRegex: false,
      days: [],
    },
  },
  'execute-workflow': {
    name: 'Execute workflow',
    description: '',
    icon: 'riFlowChart',
    component: 'BlockBasic',
    category: 'general',
    editComponent: 'EditExecuteWorkflow',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['globalData'],
    data: {
      disableBlock: false,
      executeId: '',
      workflowId: '',
      globalData: '',
      description: '',
    },
  },
  'active-tab': {
    name: 'Active tab',
    description: "Set current tab that you're in as an active tab",
    icon: 'riWindowLine',
    component: 'BlockBasic',
    category: 'browser',
    disableEdit: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
    },
  },
  'new-tab': {
    name: 'New tab',
    description: 'Create a new tab',
    icon: 'riGlobalLine',
    component: 'BlockBasic',
    editComponent: 'EditNewTab',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['url'],
    data: {
      disableBlock: false,
      description: '',
      url: '',
      userAgent: '',
      active: true,
      inGroup: false,
      waitTabLoaded: false,
      updatePrevTab: false,
      customUserAgent: false,
    },
  },
  'switch-tab': {
    name: 'Switch tab',
    description: 'Switch active tab',
    icon: 'riArrowLeftRightLine',
    component: 'BlockBasic',
    editComponent: 'EditSwitchTab',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['url', 'matchPattern'],
    data: {
      disableBlock: false,
      description: '',
      url: '',
      matchPattern: '',
      createIfNoMatch: false,
    },
  },
  'new-window': {
    name: 'New window',
    description: 'Create a new window',
    icon: 'riWindow2Line',
    component: 'BlockBasic',
    editComponent: 'EditNewWindow',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      incognito: false,
      windowState: 'normal',
    },
  },
  proxy: {
    name: 'Proxy',
    description: 'Set the proxy of the browser',
    icon: 'riShieldKeyholeLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditProxy',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    data: {
      disableBlock: false,
      scheme: 'https',
      host: '',
      port: 443,
      bypassList: '',
      clearProxy: false,
    },
  },
  'go-back': {
    name: 'Go back',
    description: 'Go back to the previous page',
    icon: 'riArrowGoBackLine',
    component: 'BlockBasic',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    disableEdit: true,
    allowedInputs: true,
    data: {
      disableBlock: false,
    },
  },
  'forward-page': {
    name: 'Go forward',
    description: 'Go forward to the next page',
    icon: 'riArrowGoForwardLine',
    component: 'BlockBasic',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    disableEdit: true,
    allowedInputs: true,
    data: {
      disableBlock: false,
    },
  },
  'close-tab': {
    name: 'Close tab/window',
    icon: 'riCloseCircleLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditCloseTab',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    refDataKeys: ['url'],
    data: {
      disableBlock: false,
      url: '',
      description: '',
      activeTab: true,
      closeType: 'tab',
      allWindows: false,
    },
  },
  'take-screenshot': {
    name: 'Take screenshot',
    description: 'Take a screenshot of current active tab',
    icon: 'riImageLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditTakeScreenshot',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    refDataKeys: ['fileName'],
    autocomplete: ['variableName'],
    data: {
      description: '',
      disableBlock: false,
      fileName: '',
      ext: 'png',
      quality: 100,
      dataColumn: '',
      variableName: '',
      selector: '',
      fullPage: false,
      saveToColumn: false,
      saveToComputer: true,
      assignVariable: false,
      captureActiveTab: true,
    },
  },
  'browser-event': {
    name: 'Browser event',
    description: 'Wait until the selected event is triggered',
    icon: 'riLightbulbLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditBrowserEvent',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    data: {
      disableBlock: false,
      description: '',
      timeout: 10000,
      eventName: 'tab:loaded',
      setAsActiveTab: true,
      activeTabLoaded: true,
      tabLoadedUrl: '',
      tabUrl: '',
      fileQuery: '',
    },
  },
  'event-click': {
    name: 'Click element',
    icon: 'riCursorLine',
    component: 'BlockBasic',
    editComponent: 'EditInteractionBase',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
    },
  },
  delay: {
    name: 'Delay',
    description: 'Add delay before executing the next block',
    icon: 'riTimerLine',
    component: 'BlockDelay',
    editComponent: 'EditDelay',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['time'],
    data: {
      disableBlock: false,
      time: 500,
    },
  },
  'get-text': {
    name: 'Get text',
    description: 'Get text from an element',
    icon: 'riParagraph',
    component: 'BlockBasic',
    editComponent: 'EditGetText',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'prefixText', 'suffixText', 'extraRowValue'],
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
      regex: '',
      prefixText: '',
      suffixText: '',
      regexExp: ['g'],
      dataColumn: '',
      saveData: true,
      includeTags: false,
      addExtraRow: false,
      assignVariable: false,
      variableName: '',
      extraRowValue: '',
      extraRowDataColumn: '',
    },
  },
  'export-data': {
    name: 'Export data',
    icon: 'riDownloadLine',
    component: 'BlockBasic',
    editComponent: 'EditExportData',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['name'],
    data: {
      disableBlock: false,
      name: '',
      refKey: '',
      type: 'json',
      description: '',
      variableName: '',
      addBOMHeader: false,
      onConflict: 'uniquify',
      dataToExport: 'data-columns',
    },
  },
  'element-scroll': {
    name: 'Scroll element',
    icon: 'riMouseLine',
    component: 'BlockBasic',
    editComponent: 'EditScrollElement',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: 'html',
      markEl: false,
      multiple: false,
      scrollY: 0,
      scrollX: 0,
      incX: false,
      incY: false,
      smooth: false,
      scrollIntoView: false,
    },
  },
  link: {
    name: 'Link',
    description: 'Open link element',
    icon: 'riLink',
    component: 'BlockBasic',
    editComponent: 'EditInteractionBase',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      disableMultiple: true,
    },
  },
  'attribute-value': {
    name: 'Attribute value',
    description: 'Get attribute value of an element',
    icon: 'riBracketsLine',
    component: 'BlockBasic',
    editComponent: 'EditAttributeValue',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'attributeName', 'extraRowValue'],
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
      attributeName: '',
      assignVariable: false,
      variableName: '',
      dataColumn: '',
      saveData: true,
      addExtraRow: false,
      extraRowValue: '',
      extraRowDataColumn: '',
    },
  },
  forms: {
    name: 'Forms',
    icon: 'riInputCursorMove',
    description: 'Manipulate form(input, select, checkbox, and radio) element',
    component: 'BlockBasic',
    editComponent: 'EditForms',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'value'],
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
      selected: true,
      clearValue: true,
      getValue: false,
      saveData: false,
      dataColumn: '',
      assignVariable: false,
      variableName: '',
      type: 'text-field',
      value: '',
      delay: 0,
      events: [],
    },
  },
  'repeat-task': {
    name: 'Repeat task',
    icon: 'riRepeat2Line',
    component: 'BlockRepeatTask',
    category: 'general',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      repeatFor: 1,
    },
  },
  'javascript-code': {
    name: 'JavaScript code',
    description: 'Execute your custom javascript code in a webpage',
    icon: 'riCodeSSlashLine',
    component: 'BlockBasic',
    editComponent: 'EditJavascriptCode',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      timeout: 20000,
      code: 'console.log("Hello world!");\nautomaNextBlock()',
      preloadScripts: [],
      everyNewTab: false,
    },
  },
  'trigger-event': {
    name: 'Trigger event',
    description: 'Trigger event',
    icon: 'riLightbulbFlashLine',
    component: 'BlockBasic',
    editComponent: 'EditTriggerEvent',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'eventParams.clientX', 'eventParams.clientY'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: 'html',
      markEl: false,
      multiple: false,
      eventName: '',
      eventType: '',
      eventParams: { bubbles: true, cancelable: false },
    },
  },
  'google-sheets': {
    name: 'Google sheets',
    description: 'Read Google Sheets data',
    icon: 'mdiGoogleSheet',
    component: 'BlockBasic',
    editComponent: 'EditGoogleSheets',
    category: 'onlineServices',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['customData', 'range', 'spreadsheetId'],
    autocomplete: ['refKey'],
    data: {
      disableBlock: false,
      range: '',
      refKey: '',
      type: 'get',
      customData: '',
      description: '',
      spreadsheetId: '',
      dataColumn: '',
      saveData: true,
      assignVariable: false,
      variableName: '',
      firstRowAsKey: false,
      keysAsFirstRow: true,
      valueInputOption: 'RAW',
      InsertDataOption: 'INSERT_ROWS',
      dataFrom: 'data-columns',
    },
  },
  conditions: {
    name: 'Conditions',
    description: 'Conditional block',
    icon: 'riAB',
    component: 'BlockConditions',
    editComponent: 'EditConditions',
    category: 'conditions',
    inputs: 1,
    outputs: 0,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      conditions: [],
      retryConditions: false,
      retryCount: 10,
      retryTimeout: 1000,
    },
  },
  'element-exists': {
    name: 'Element exists',
    description: 'Check if an element is exists',
    icon: 'riFocus3Line',
    component: 'BlockElementExists',
    editComponent: 'EditElementExists',
    category: 'conditions',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      findBy: 'cssSelector',
      selector: '',
      tryCount: 1,
      timeout: 500,
      markEl: false,
      throwError: false,
    },
  },
  webhook: {
    name: 'HTTP Request',
    description: 'make an HTTP request',
    icon: 'riEarthLine',
    component: 'BlockBasicWithFallback',
    editComponent: 'EditWebhook',
    category: 'general',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['body', 'url'],
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      url: '',
      body: '{}',
      headers: [],
      method: 'POST',
      timeout: 10000,
      dataPath: '',
      contentType: 'json',
      variableName: '',
      assignVariable: false,
      saveData: false,
      dataColumn: '',
      responseType: 'json',
    },
  },
  'while-loop': {
    name: 'While loop',
    description: 'Execute blocks while the condition is met',
    icon: 'riRefreshFill',
    component: 'BlockBasicWithFallback',
    editComponent: 'EditWhileLoop',
    category: 'general',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      conditions: null,
    },
  },
  'loop-data': {
    name: 'Loop data',
    icon: 'riRefreshLine',
    component: 'BlockBasic',
    editComponent: 'EditLoopData',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: [
      'loopData',
      'variableName',
      'referenceKey',
      'elementSelector',
    ],
    autocomplete: ['variableName', 'loopId'],
    data: {
      disableBlock: false,
      loopId: '',
      maxLoop: 0,
      toNumber: 10,
      fromNumber: 1,
      startIndex: 0,
      loopData: '[]',
      description: '',
      variableName: '',
      referenceKey: '',
      elementSelector: '',
      resumeLastWorkflow: false,
      loopThrough: 'data-columns',
    },
  },
  'loop-breakpoint': {
    name: 'Loop breakpoint',
    description: 'To tell where loop data must stop',
    icon: 'riStopLine',
    component: 'BlockLoopBreakpoint',
    category: 'general',
    disableEdit: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      loopId: '',
    },
  },
  'blocks-group': {
    name: 'Blocks group',
    description: 'Grouping blocks',
    icon: 'riFolderZipLine',
    component: 'BlockGroup',
    category: 'general',
    disableEdit: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      name: '',
      blocks: [],
    },
  },
  clipboard: {
    name: 'Clipboard',
    description: 'Get the copied text from the clipboard',
    icon: 'riClipboardLine',
    component: 'BlockBasic',
    category: 'general',
    editComponent: 'EditClipboard',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      assignVariable: false,
      variableName: '',
      saveData: true,
      dataColumn: '',
    },
  },
  'insert-data': {
    name: 'Insert data',
    description: 'Insert data into table or variable',
    icon: 'riDatabase2Line',
    component: 'BlockBasic',
    category: 'general',
    editComponent: 'EditInsertData',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      dataList: [],
    },
  },
  'switch-to': {
    name: 'Switch frame',
    description: 'Switch between main window and iframe',
    icon: 'riArrowUpDownLine',
    component: 'BlockBasic',
    editComponent: 'EditSwitchTo',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      findBy: 'cssSelector',
      selector: '',
      windowType: 'main-window',
    },
  },
  'upload-file': {
    name: 'Upload file',
    description: 'Upload file into <input type="file"> element',
    icon: 'riFileUploadLine',
    component: 'BlockBasic',
    editComponent: 'EditUploadFile',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'filePaths'],
    data: {
      disableBlock: false,
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      filePaths: [],
    },
  },
  'hover-element': {
    name: 'Hover element',
    description: 'Hover over an element',
    icon: 'mdiCursorDefaultClickOutline',
    component: 'BlockBasic',
    editComponent: 'EditInteractionBase',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
    },
  },
  'save-assets': {
    name: 'Save assets',
    description:
      'Save assets (image, video, audio, or file) from an element or URL',
    icon: 'riImageLine',
    component: 'BlockBasic',
    editComponent: 'EditSaveAssets',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'url', 'filename'],
    data: {
      disableBlock: false,
      description: '',
      findBy: 'cssSelector',
      waitForSelector: false,
      waitSelectorTimeout: 5000,
      selector: '',
      markEl: false,
      multiple: false,
      type: 'element',
      url: '',
      filename: '',
      onConflict: 'uniquify',
    },
  },
  'press-key': {
    name: 'Press key',
    description: 'Press a key or a combination',
    icon: 'riKeyboardLine',
    component: 'BlockBasic',
    editComponent: 'EditPressKey',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['selector', 'keys'],
    data: {
      disableBlock: false,
      keys: '',
      selector: '',
      description: '',
    },
  },
  'handle-dialog': {
    name: 'Handle dialog',
    description:
      'Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload).',
    icon: 'riChat3Line',
    component: 'BlockBasic',
    editComponent: 'EditHandleDialog',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['promptText'],
    data: {
      disableBlock: false,
      description: '',
      accept: true,
      promptText: '',
    },
  },
  'handle-download': {
    name: 'Handle download',
    description: 'Handle downloaded file',
    icon: 'riFileDownloadLine',
    component: 'BlockBasic',
    editComponent: 'EditHandleDownload',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['filename'],
    autocomplete: ['variableName'],
    data: {
      disableBlock: false,
      description: '',
      filename: '',
      timeout: 20000,
      onConflict: 'uniquify',
      waitForDownload: true,
      dataColumn: '',
      saveData: true,
      assignVariable: false,
      variableName: '',
    },
  },
  'reload-tab': {
    name: 'Reload tab',
    description: 'Reload the active tab',
    icon: 'riRestartLine',
    component: 'BlockBasic',
    category: 'browser',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    disableEdit: true,
    data: {
      disableBlock: false,
    },
  },
  'delete-data': {
    name: 'Delete data',
    description: 'Delete table or variable data',
    icon: 'riDeleteBin7Line',
    editComponent: 'EditDeleteData',
    component: 'BlockBasic',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      deleteList: [],
    },
  },
  'wait-connections': {
    name: 'Wait connections',
    description: 'Wait for all connections before continuing to the next block',
    icon: 'riTimerFlashLine',
    editComponent: 'EditWaitConnections',
    component: 'BlockBasic',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      disableBlock: false,
      description: '',
      timeout: 10000,
      specificFlow: false,
      flowBlockId: '',
    },
  },
};

export const categories = {
  interaction: {
    name: 'Web interaction',
    color: 'bg-green-200 dark:bg-green-300',
  },
  browser: {
    name: 'Browser',
    color: 'bg-orange-200 dark:bg-orange-300',
  },
  general: {
    name: 'General',
    color: 'bg-yellow-200 dark:bg-yellow-300',
  },
  onlineServices: {
    name: 'Online services',
    color: 'bg-red-200 dark:bg-red-300',
  },
  conditions: {
    name: 'Conditions',
    color: 'bg-blue-200 dark:bg-blue-300',
  },
};

export const eventList = [
  { id: 'click', name: 'Click', type: 'mouse-event' },
  { id: 'dblclick', name: 'Double Click', type: 'mouse-event' },
  { id: 'mouseup', name: 'Mouseup', type: 'mouse-event' },
  { id: 'mousedown', name: 'Mousedown', type: 'mouse-event' },
  { id: 'mouseenter', name: 'Mouseenter', type: 'mouse-event' },
  { id: 'mouseleave', name: 'Mouseleave', type: 'mouse-event' },
  { id: 'mouseover', name: 'Mouseover', type: 'mouse-event' },
  { id: 'mouseout', name: 'Mouseout', type: 'mouse-event' },
  { id: 'mousemove', name: 'Mousemove', type: 'mouse-event' },
  { id: 'focus', name: 'Focus', type: 'focus-event' },
  { id: 'blur', name: 'Blur', type: 'focus-event' },
  { id: 'input', name: 'Input', type: 'input-event' },
  { id: 'change', name: 'Change', type: 'event' },
  { id: 'touchstart', name: 'Touch start', type: 'touch-event' },
  { id: 'touchend', name: 'Touch end', type: 'touch-event' },
  { id: 'touchmove', name: 'Touch move', type: 'touch-event' },
  { id: 'touchcancel', name: 'Touch cancel', type: 'touch-event' },
  { id: 'keydown', name: 'Keydown', type: 'keyboard-event' },
  { id: 'keyup', name: 'Keyup', type: 'keyboard-event' },
  { id: 'submit', name: 'Submit', type: 'submit-event' },
  { id: 'wheel', name: 'Wheel', type: 'wheel-event' },
];

export const dataExportTypes = [
  { name: 'JSON', id: 'json' },
  { name: 'CSV', id: 'csv' },
  { name: 'Plain text', id: 'plain-text' },
];

export const firstWorkflows = [
  {
    id: nanoid(),
    name: 'Google search',
    createdAt: Date.now(),
    drawflow: `{"drawflow":{"Home":{"data":{"d634ff22-5dfe-44dc-83d2-842412bd9fbf":{"id":"d634ff22-5dfe-44dc-83d2-842412bd9fbf","name":"trigger","data":{"type":"manual","interval":10},"class":"trigger","html":"BlockBasic","typenode":"vue","inputs":{},"outputs":{"output_1":{"connections":[{"node":"b9e7e0d4-e86a-4635-a352-31c63723fef4","output":"input_1"}]}},"pos_x":50,"pos_y":300},"b9e7e0d4-e86a-4635-a352-31c63723fef4":{"id":"b9e7e0d4-e86a-4635-a352-31c63723fef4","name":"new-tab","data":{"url":"https://google.com","active":true},"class":"new-tab","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"d634ff22-5dfe-44dc-83d2-842412bd9fbf","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"09f3a14c-0514-4287-93b0-aa92b0064fba","output":"input_1"}]}},"pos_x":278,"pos_y":268},"09f3a14c-0514-4287-93b0-aa92b0064fba":{"id":"09f3a14c-0514-4287-93b0-aa92b0064fba","name":"forms","data":{"description":"Type query","selector":"[name='q']","markEl":false,"multiple":false,"selected":true,"type":"text-field","value":"Automa Extension","delay":"120","events":[]},"class":"forms","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"b9e7e0d4-e86a-4635-a352-31c63723fef4","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"5f76370d-aa3d-4258-8319-230fcfc49a3a","output":"input_1"}]}},"pos_x":551,"pos_y":290},"5f76370d-aa3d-4258-8319-230fcfc49a3a":{"id":"5f76370d-aa3d-4258-8319-230fcfc49a3a","name":"event-click","data":{"description":"Click search","selector":"center:nth-child(1) > .gNO89b","markEl":false,"multiple":false},"class":"event-click","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"09f3a14c-0514-4287-93b0-aa92b0064fba","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]}},"pos_x":794,"pos_y":308}}}}}`,
  },
  {
    id: nanoid(),
    name: 'Generate lorem ipsum',
    createdAt: Date.now(),
    drawflow:
      '{"drawflow":{"Home":{"data":{"c5774692-0be4-457f-82be-d5e4b3344ad7":{"id":"c5774692-0be4-457f-82be-d5e4b3344ad7","name":"trigger","data":{"type":"manual"},"class":"trigger","html":"BlockBasic","typenode":"vue","inputs":{},"outputs":{"output_1":{"connections":[{"node":"10a0429e-b8c4-4c04-9ea3-df169cea78e4","output":"input_1"}]}},"pos_x":50,"pos_y":300},"10a0429e-b8c4-4c04-9ea3-df169cea78e4":{"id":"10a0429e-b8c4-4c04-9ea3-df169cea78e4","name":"new-tab","data":{"url":"http://lipsum.com","active":true},"class":"new-tab","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"c5774692-0be4-457f-82be-d5e4b3344ad7","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"24bdec44-1e80-4cee-9139-00545b8d33d9","output":"input_1"}]}},"pos_x":285,"pos_y":282},"df24edcc-4c29-49f5-8a29-0e572a4bc6ae":{"id":"df24edcc-4c29-49f5-8a29-0e572a4bc6ae","name":"delay","data":{"time":4000},"class":"delay","html":"BlockDelay","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"24bdec44-1e80-4cee-9139-00545b8d33d9","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"2d93c1de-42ca-4f39-8e61-e3e55529fbba","output":"input_1"}]}},"pos_x":833,"pos_y":297},"24bdec44-1e80-4cee-9139-00545b8d33d9":{"id":"24bdec44-1e80-4cee-9139-00545b8d33d9","name":"element-scroll","data":{"description":"","selector":"#amount","markEl":false,"multiple":false,"scrollY":0,"scrollX":0,"incX":false,"incY":false,"smooth":true,"scrollIntoView":true},"class":"element-scroll","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"10a0429e-b8c4-4c04-9ea3-df169cea78e4","input":"output_1"},{"node":"2f5fec61-a318-4e2b-b7d3-bc7328bd282c","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"df24edcc-4c29-49f5-8a29-0e572a4bc6ae","output":"input_1"}]}},"pos_x":566,"pos_y":317},"2d93c1de-42ca-4f39-8e61-e3e55529fbba":{"id":"2d93c1de-42ca-4f39-8e61-e3e55529fbba","name":"forms","data":{"description":"Lipsum length","selector":"#amount","markEl":false,"multiple":false,"selected":true,"type":"text-field","value":"3","delay":0,"events":[]},"class":"forms","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"df24edcc-4c29-49f5-8a29-0e572a4bc6ae","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb","output":"input_1"}]}},"pos_x":1058,"pos_y":327},"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb":{"id":"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb","name":"event-click","data":{"description":"Generate button","selector":"#generate","markEl":false,"multiple":false},"class":"event-click","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"2d93c1de-42ca-4f39-8e61-e3e55529fbba","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"fb9be12f-8995-4876-8bfe-79323769474b","output":"input_1"}]}},"pos_x":1309,"pos_y":329},"fb9be12f-8995-4876-8bfe-79323769474b":{"id":"fb9be12f-8995-4876-8bfe-79323769474b","name":"delay","data":{"time":2000},"class":"delay","html":"BlockDelay","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"7205fcf2-deda-445e-9690-4e36adb52585","output":"input_1"}]}},"pos_x":1566,"pos_y":310},"7205fcf2-deda-445e-9690-4e36adb52585":{"id":"7205fcf2-deda-445e-9690-4e36adb52585","name":"get-text","data":{"description":"Get text result","selector":"#lipsum","markEl":false,"multiple":false,"regex":"","regexExp":["g"],"dataColumn":"","saveData":true},"class":"get-text","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"fb9be12f-8995-4876-8bfe-79323769474b","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","output":"input_1"}]}},"pos_x":1823,"pos_y":337},"3d3e8fac-97fa-4c3d-84bc-a3db18740184":{"id":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","name":"repeat-task","data":{"repeatFor":2},"class":"repeat-task","html":"BlockRepeatTask","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"7205fcf2-deda-445e-9690-4e36adb52585","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"4d39ecd5-f33f-4e57-b11d-2f26b1076334","output":"input_1"}]},"output_2":{"connections":[{"node":"2f5fec61-a318-4e2b-b7d3-bc7328bd282c","output":"input_1","points":[{"pos_x":2290.2500152587886,"pos_y":542.0000076293943},{"pos_x":1125.2500152587886,"pos_y":552.0000076293943}]}]}},"pos_x":2073,"pos_y":293.5},"2f5fec61-a318-4e2b-b7d3-bc7328bd282c":{"id":"2f5fec61-a318-4e2b-b7d3-bc7328bd282c","name":"go-back","data":{},"class":"go-back","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","input":"output_2"}]}},"outputs":{"output_1":{"connections":[{"node":"24bdec44-1e80-4cee-9139-00545b8d33d9","output":"input_1","points":[{"pos_x":1305.2500152587886,"pos_y":829.5000076293943},{"pos_x":545.250015258789,"pos_y":834.499988555908}]}]}},"pos_x":1135.5,"pos_y":628},"4d39ecd5-f33f-4e57-b11d-2f26b1076334":{"id":"4d39ecd5-f33f-4e57-b11d-2f26b1076334","name":"export-data","data":{"name":"Lipsum","type":"plain-text"},"class":"export-data","html":"BlockExportData","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]}},"pos_x":2409.75,"pos_y":289}}}}}',
  },
];

export const workflowCategories = {
  scrape: 'Scraping',
  automation: 'Automation',
  productivity: 'Productivity',
};

export const contentTypes = [
  { name: 'application/json', value: 'json' },
  { name: 'application/x-www-form-urlencoded', value: 'form' },
];

export const supportLocales = [
  { id: 'en', name: 'English' },
  { id: 'zh', name: '简体中文' },
  { id: 'zh-tw', name: '繁體中文' },
  { id: 'vi', name: 'Tiếng Việt' },
  { id: 'fr', name: 'Français' },
];

export const communities = [
  {
    name: 'GitHub',
    icon: 'riGithubFill',
    url: 'https://github.com/kholid060/automa',
  },
  {
    name: 'Twitter',
    icon: 'riTwitterLine',
    url: 'https://twitter.com/AutomaApp',
  },
  {
    name: 'Discord',
    icon: 'riDiscordLine',
    url: 'https://discord.gg/C6khwwTE84',
  },
];

export const elementsHighlightData = {
  selectedElements: {
    stroke: '#2563EB',
    activeStroke: '#f87171',
    fill: 'rgba(37, 99, 235, 0.1)',
    activeFill: 'rgba(248, 113, 113, 0.1)',
  },
  hoveredElements: {
    stroke: '#fbbf24',
    fill: 'rgba(251, 191, 36, 0.1)',
  },
};

export const conditionBuilder = {
  valueTypes: [
    {
      id: 'value',
      category: 'value',
      name: 'Value',
      compareable: true,
      data: { value: '' },
    },
    {
      id: 'code',
      category: 'value',
      name: 'Code',
      compareable: false,
      data: { code: '\nreturn true;' },
    },
    {
      id: 'element#text',
      category: 'element',
      name: 'Element text',
      compareable: true,
      data: { selector: '' },
    },
    {
      id: 'element#exists',
      category: 'element',
      name: 'Element exists',
      compareable: false,
      data: { selector: '' },
    },
    {
      id: 'element#notExists',
      category: 'element',
      name: 'Element not exists',
      compareable: false,
      data: { selector: '' },
    },
    {
      id: 'element#visible',
      category: 'element',
      name: 'Element visible',
      compareable: false,
      data: { selector: '' },
    },
    {
      id: 'element#visibleScreen',
      category: 'element',
      name: 'Element visible in screen',
      compareable: false,
      data: { selector: '' },
    },
    {
      id: 'element#invisible',
      category: 'element',
      name: 'Element hidden in screen',
      compareable: false,
      data: { selector: '' },
    },
    {
      id: 'element#attribute',
      category: 'element',
      name: 'Element attribute value',
      compareable: true,
      data: { selector: '', attrName: '' },
    },
  ],
  compareTypes: [
    { id: 'eq', name: 'Equals', needValue: true, category: 'basic' },
    { id: 'nq', name: 'Not equals', needValue: true, category: 'basic' },
    { id: 'gt', name: 'Greater than', needValue: true, category: 'number' },
    {
      id: 'gte',
      name: 'Greater than or equal',
      needValue: true,
      category: 'number',
    },
    { id: 'lt', name: 'Less than', needValue: true, category: 'number' },
    {
      id: 'lte',
      name: 'Less than or equal',
      needValue: true,
      category: 'number',
    },
    { id: 'cnt', name: 'Contains', needValue: true, category: 'text' },
    { id: 'nct', name: 'Not contains', needValue: true, category: 'text' },
    { id: 'stw', name: 'Starts with', needValue: true, category: 'text' },
    { id: 'enw', name: 'Ends with', needValue: true, category: 'text' },
    { id: 'itr', name: 'Is truthy', needValue: false, category: 'boolean' },
    { id: 'ifl', name: 'Is falsy', needValue: false, category: 'boolean' },
  ],
  inputTypes: {
    selector: {
      placeholder: '.class',
      label: 'CSS selector or XPath',
    },
    value: {
      label: 'Value',
      placeholder: 'abc123',
    },
    attrName: {
      label: 'Attribute name',
      placeholder: 'name',
    },
  },
};
