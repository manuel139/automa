/* to-do execute multiple blocks simultaneously, keyboard shortcut */
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
    docs: true,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['url'],
    data: {
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
    data: {},
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
      description: '',
      url: '',
      active: true,
      inGroup: false,
      updatePrevTab: false,
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
    data: {},
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
    data: {},
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
    data: {
      fileName: '',
      ext: 'png',
      quality: 100,
      dataColumn: '',
      variableName: '',
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
      description: '',
      findBy: 'cssSelector',
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
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
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
    data: {
      description: '',
      findBy: 'cssSelector',
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
      name: '',
      refKey: '',
      type: 'json',
      description: '',
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
      description: '',
      findBy: 'cssSelector',
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
      description: '',
      findBy: 'cssSelector',
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
    data: {
      description: '',
      findBy: 'cssSelector',
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
    data: {
      description: '',
      findBy: 'cssSelector',
      selector: '',
      markEl: false,
      multiple: false,
      selected: true,
      clearValue: true,
      getValue: false,
      saveData: true,
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
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      repeatFor: 1,
    },
  },
  // 'reload-page': {
  //   name: 'Reload page',
  //   icon: 'riRestartLine',
  //   component: 'BlockBasic',
  //   category: 'interaction',
  //   inputs: 1,
  //   outputs: 1,
  //   allowedInputs: true,
  //   maxConnection: 1,
  //   disableEdit: true,
  //   data: {},
  // },
  'javascript-code': {
    name: 'JavaScript code',
    description: 'Execute your custom javascript code in a webpage',
    icon: 'riCodeSSlashLine',
    component: 'BlockBasic',
    editComponent: 'EditJavascriptCode',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    docs: true,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      timeout: 20000,
      code: 'console.log("Hello world!");\nautomaNextBlock()',
      preloadScripts: [],
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
    refDataKeys: ['selector'],
    data: {
      description: '',
      findBy: 'cssSelector',
      selector: '',
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
    docs: true,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['customData', 'range', 'spreadsheetId'],
    data: {
      range: '',
      refKey: '',
      type: 'get',
      customData: '',
      description: '',
      spreadsheetId: '',
      firstRowAsKey: false,
      keysAsFirstRow: false,
      valueInputOption: 'RAW',
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
      conditions: [],
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
      findBy: 'cssSelector',
      selector: '',
      tryCount: 1,
      timeout: 500,
      markEl: false,
    },
  },
  webhook: {
    name: 'Webhook',
    description: 'Webhook allow external service to be notified',
    icon: 'webhookIcon',
    component: 'BlockBasic',
    editComponent: 'EditWebhook',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['body', 'url'],
    data: {
      description: '',
      url: '',
      contentType: 'json',
      timeout: 10000,
      headers: [],
      body: '{}',
    },
  },
  'loop-data': {
    name: 'Loop data',
    icon: 'riRefreshLine',
    component: 'BlockBasic',
    editComponent: 'EditLoopData',
    category: 'general',
    docs: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    refDataKeys: ['loopData'],
    data: {
      loopId: '',
      maxLoop: 0,
      fromNumber: 1,
      toNumber: 10,
      loopData: '[]',
      description: '',
      variableName: '',
      referenceKey: '',
      specificRowAndCol: false,
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
    docs: true,
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
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
      name: '',
      blocks: [],
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
      findBy: 'cssSelector',
      selector: '',
      filePaths: [],
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
    drawflow: `{"drawflow":{"Home":{"data":{"d634ff22-5dfe-44dc-83d2-842412bd9fbf":{"id":"d634ff22-5dfe-44dc-83d2-842412bd9fbf","name":"trigger","data":{"type":"manual","interval":10},"class":"trigger","html":"BlockBasic","typenode":"vue","inputs":{},"outputs":{"output_1":{"connections":[{"node":"b9e7e0d4-e86a-4635-a352-31c63723fef4","output":"input_1"}]}},"pos_x":50,"pos_y":300},"b9e7e0d4-e86a-4635-a352-31c63723fef4":{"id":"b9e7e0d4-e86a-4635-a352-31c63723fef4","name":"new-tab","data":{"url":"https://google.com","active":true},"class":"new-tab","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"d634ff22-5dfe-44dc-83d2-842412bd9fbf","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"09f3a14c-0514-4287-93b0-aa92b0064fba","output":"input_1"}]}},"pos_x":278,"pos_y":268},"09f3a14c-0514-4287-93b0-aa92b0064fba":{"id":"09f3a14c-0514-4287-93b0-aa92b0064fba","name":"forms","data":{"description":"Type query","selector":"[name='q']","markEl":false,"multiple":false,"selected":true,"type":"text-field","value":"Stackoverflow","delay":"120","events":[]},"class":"forms","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"b9e7e0d4-e86a-4635-a352-31c63723fef4","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"5f76370d-aa3d-4258-8319-230fcfc49a3a","output":"input_1"}]}},"pos_x":551,"pos_y":290},"5f76370d-aa3d-4258-8319-230fcfc49a3a":{"id":"5f76370d-aa3d-4258-8319-230fcfc49a3a","name":"event-click","data":{"description":"Click search","selector":"center:nth-child(1) > .gNO89b","markEl":false,"multiple":false},"class":"event-click","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"09f3a14c-0514-4287-93b0-aa92b0064fba","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]}},"pos_x":794,"pos_y":308}}}}}`,
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
