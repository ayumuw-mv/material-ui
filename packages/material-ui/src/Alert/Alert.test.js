import * as React from 'react';
import { createMount, createClientRender, describeConformanceV5 } from 'test/utils';
import Alert, { alertClasses as classes } from '@material-ui/core/Alert';
import Paper from '@material-ui/core/Paper';

describe('<Alert />', () => {
  const render = createClientRender();
  const mount = createMount();

  describeConformanceV5(<Alert />, () => ({
    classes,
    inheritComponent: Paper,
    render,
    mount,
    refInstanceof: window.HTMLDivElement,
    muiName: 'MuiAlert',
    testVariantProps: { variant: 'standard', color: 'success' },
    testDeepOverrides: { slotName: 'message', slotClassName: classes.message },
    skip: ['componentsProp'],
  }));
});
