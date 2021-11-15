/* to-do screenshot, looping, cookies, assets, tab loaded, opened tab, and run workflow block? */

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
    },
  },
  'active-tab': {
    name: 'Active tab',
    description: 'Set as active tab',
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
    data: {
      description: '',
      url: '',
      active: true,
      updatePrevTab: false,
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
    name: 'Close tab',
    icon: 'riCloseCircleLine',
    component: 'BlockBasic',
    category: 'browser',
    editComponent: 'EditCloseTab',
    inputs: 1,
    outputs: 1,
    maxConnection: 1,
    allowedInputs: true,
    data: {
      url: '',
      activeTab: true,
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
    data: {
      fileName: '',
      ext: 'png',
      quality: 100,
      captureActiveTab: true,
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
    data: {
      description: '',
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
    data: {
      description: '',
      selector: '',
      markEl: false,
      multiple: false,
      regex: '',
      regexExp: ['g'],
      dataColumn: '',
      saveData: true,
    },
  },
  'export-data': {
    name: 'Export data',
    icon: 'riDownloadLine',
    component: 'BlockExportData',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      name: '',
      type: 'json',
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
    data: {
      description: '',
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
    data: {
      description: '',
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
    data: {
      description: '',
      selector: '',
      markEl: false,
      multiple: false,
      attributeName: '',
      dataColumn: '',
      saveData: true,
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
    data: {
      description: '',
      selector: '',
      markEl: false,
      multiple: false,
      selected: true,
      clearValue: true,
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
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      timeout: 10000,
      code: 'console.log("Hello world!")',
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
    data: {
      description: '',
      selector: '',
      markEl: false,
      multiple: false,
      eventName: '',
      eventType: '',
      eventParams: { bubbles: true, cancelable: false },
    },
  },
  conditions: {
    name: 'Conditions',
    description: 'Conditional block',
    icon: 'riAB',
    component: 'BlockConditions',
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
    data: {
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
    data: {
      description: '',
      url: '',
      contentType: 'json',
      timeout: 10000,
      headers: [{ name: '', value: '' }],
      body: '{\n "key": {{ dataColumns@0.key }} \n}',
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
    data: {
      loopId: '',
      maxLoop: 0,
      loopData: '[]',
      description: '',
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
    data: {
      selector: '',
      windowType: 'main-window',
    },
  },
};

export const categories = {
  interaction: {
    name: 'Web interaction',
    color: 'bg-green-200',
  },
  browser: {
    name: 'Browser',
    color: 'bg-orange-200',
  },
  general: {
    name: 'General',
    color: 'bg-yellow-200',
  },
  conditions: {
    name: 'Conditions',
    color: 'bg-blue-200',
  },
};

export const eventList = [
  { id: 'click', name: 'Click', type: 'mouse-event' },
  { id: 'dblclick', name: 'Double Click', type: 'mouse-event' },
  { id: 'mouseup', name: 'Mouseup', type: 'mouse-event' },
  { id: 'mousedown', name: 'Mousedown', type: 'mouse-event' },
  { id: 'focus', name: 'Focus', type: 'focus-event' },
  { id: 'blur', name: 'Blur', type: 'focus-event' },
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
    id: 'google-search',
    name: 'Google search',
    createdAt: Date.now(),
    drawflow: `{"drawflow":{"Home":{"data":{"d634ff22-5dfe-44dc-83d2-842412bd9fbf":{"id":"d634ff22-5dfe-44dc-83d2-842412bd9fbf","name":"trigger","data":{"type":"manual","interval":10},"class":"trigger","html":"BlockBasic","typenode":"vue","inputs":{},"outputs":{"output_1":{"connections":[{"node":"b9e7e0d4-e86a-4635-a352-31c63723fef4","output":"input_1"}]}},"pos_x":50,"pos_y":300},"b9e7e0d4-e86a-4635-a352-31c63723fef4":{"id":"b9e7e0d4-e86a-4635-a352-31c63723fef4","name":"new-tab","data":{"url":"https://google.com","active":true},"class":"new-tab","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"d634ff22-5dfe-44dc-83d2-842412bd9fbf","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"09f3a14c-0514-4287-93b0-aa92b0064fba","output":"input_1"}]}},"pos_x":278,"pos_y":268},"09f3a14c-0514-4287-93b0-aa92b0064fba":{"id":"09f3a14c-0514-4287-93b0-aa92b0064fba","name":"forms","data":{"description":"Type query","selector":"[name='q']","markEl":false,"multiple":false,"selected":true,"type":"text-field","value":"Stackoverflow","delay":"120","events":[]},"class":"forms","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"b9e7e0d4-e86a-4635-a352-31c63723fef4","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"5f76370d-aa3d-4258-8319-230fcfc49a3a","output":"input_1"}]}},"pos_x":551,"pos_y":290},"5f76370d-aa3d-4258-8319-230fcfc49a3a":{"id":"5f76370d-aa3d-4258-8319-230fcfc49a3a","name":"event-click","data":{"description":"Click search","selector":"center:nth-child(1) > .gNO89b","markEl":false,"multiple":false},"class":"event-click","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"09f3a14c-0514-4287-93b0-aa92b0064fba","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]}},"pos_x":794,"pos_y":308}}}}}`,
  },
  {
    id: 'lorem-ipsum',
    name: 'Generate lorem ipsum',
    createdAt: Date.now(),
    drawflow:
      '{"dataColumns":[],"drawflow":"{"drawflow":{"Home":{"data":{"c5774692-0be4-457f-82be-d5e4b3344ad7":{"id":"c5774692-0be4-457f-82be-d5e4b3344ad7","name":"trigger","data":{"type":"manual"},"class":"trigger","html":"BlockBasic","typenode":"vue","inputs":{},"outputs":{"output_1":{"connections":[{"node":"10a0429e-b8c4-4c04-9ea3-df169cea78e4","output":"input_1"}]}},"pos_x":50,"pos_y":300},"10a0429e-b8c4-4c04-9ea3-df169cea78e4":{"id":"10a0429e-b8c4-4c04-9ea3-df169cea78e4","name":"new-tab","data":{"url":"http://lipsum.com","active":true},"class":"new-tab","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"c5774692-0be4-457f-82be-d5e4b3344ad7","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"24bdec44-1e80-4cee-9139-00545b8d33d9","output":"input_1"}]}},"pos_x":285,"pos_y":282},"df24edcc-4c29-49f5-8a29-0e572a4bc6ae":{"id":"df24edcc-4c29-49f5-8a29-0e572a4bc6ae","name":"delay","data":{"time":4000},"class":"delay","html":"BlockDelay","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"24bdec44-1e80-4cee-9139-00545b8d33d9","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"2d93c1de-42ca-4f39-8e61-e3e55529fbba","output":"input_1"}]}},"pos_x":833,"pos_y":297},"24bdec44-1e80-4cee-9139-00545b8d33d9":{"id":"24bdec44-1e80-4cee-9139-00545b8d33d9","name":"element-scroll","data":{"description":"","selector":"#amount","markEl":false,"multiple":false,"scrollY":0,"scrollX":0,"incX":false,"incY":false,"smooth":true,"scrollIntoView":true},"class":"element-scroll","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"10a0429e-b8c4-4c04-9ea3-df169cea78e4","input":"output_1"},{"node":"2f5fec61-a318-4e2b-b7d3-bc7328bd282c","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"df24edcc-4c29-49f5-8a29-0e572a4bc6ae","output":"input_1"}]}},"pos_x":566,"pos_y":317},"2d93c1de-42ca-4f39-8e61-e3e55529fbba":{"id":"2d93c1de-42ca-4f39-8e61-e3e55529fbba","name":"forms","data":{"description":"Lipsum length","selector":"#amount","markEl":false,"multiple":false,"selected":true,"type":"text-field","value":"3","delay":0,"events":[]},"class":"forms","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"df24edcc-4c29-49f5-8a29-0e572a4bc6ae","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb","output":"input_1"}]}},"pos_x":1058,"pos_y":327},"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb":{"id":"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb","name":"event-click","data":{"description":"Generate button","selector":"#generate","markEl":false,"multiple":false},"class":"event-click","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"2d93c1de-42ca-4f39-8e61-e3e55529fbba","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"fb9be12f-8995-4876-8bfe-79323769474b","output":"input_1"}]}},"pos_x":1309,"pos_y":329},"fb9be12f-8995-4876-8bfe-79323769474b":{"id":"fb9be12f-8995-4876-8bfe-79323769474b","name":"delay","data":{"time":2000},"class":"delay","html":"BlockDelay","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"0f3e2baa-8d6d-4323-8ac7-362f1be39ecb","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"7205fcf2-deda-445e-9690-4e36adb52585","output":"input_1"}]}},"pos_x":1566,"pos_y":310},"7205fcf2-deda-445e-9690-4e36adb52585":{"id":"7205fcf2-deda-445e-9690-4e36adb52585","name":"get-text","data":{"description":"Get text result","selector":"#lipsum","markEl":false,"multiple":false,"regex":"","regexExp":["g"],"dataColumn":"","saveData":true},"class":"get-text","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"fb9be12f-8995-4876-8bfe-79323769474b","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","output":"input_1"}]}},"pos_x":1823,"pos_y":337},"3d3e8fac-97fa-4c3d-84bc-a3db18740184":{"id":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","name":"repeat-task","data":{"repeatFor":2},"class":"repeat-task","html":"BlockRepeatTask","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"7205fcf2-deda-445e-9690-4e36adb52585","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"4d39ecd5-f33f-4e57-b11d-2f26b1076334","output":"input_1"}]},"output_2":{"connections":[{"node":"2f5fec61-a318-4e2b-b7d3-bc7328bd282c","output":"input_1"}]}},"pos_x":2073,"pos_y":293.5},"2f5fec61-a318-4e2b-b7d3-bc7328bd282c":{"id":"2f5fec61-a318-4e2b-b7d3-bc7328bd282c","name":"go-back","data":{},"class":"go-back","html":"BlockBasic","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","input":"output_2"}]}},"outputs":{"output_1":{"connections":[{"node":"24bdec44-1e80-4cee-9139-00545b8d33d9","output":"input_1"}]}},"pos_x":1230.5,"pos_y":619},"4d39ecd5-f33f-4e57-b11d-2f26b1076334":{"id":"4d39ecd5-f33f-4e57-b11d-2f26b1076334","name":"export-data","data":{"name":"Lipsum","type":"plain-text"},"class":"export-data","html":"BlockExportData","typenode":"vue","inputs":{"input_1":{"connections":[{"node":"3d3e8fac-97fa-4c3d-84bc-a3db18740184","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]}},"pos_x":2409.75,"pos_y":289}}}}}","icon":"riGlobalLine","name":"Generate lorem ipsum","settings":{"onError":"stop-workflow","timeout":120000}}',
  },
];

export const contentTypes = [
  { name: 'application/json', value: 'json' },
  { name: 'application/x-www-form-urlencoded', value: 'form' },
];
