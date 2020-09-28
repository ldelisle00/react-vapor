import {configure} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import _ from 'underscore';

// jQuery has to be imported before chosen-js
import $ from 'jquery';
global['$'] = global['jQuery'] = $;

import 'chosen-js';
import {Defaults} from './src/Defaults';

global.document.createRange = () =>
    ({
        setEnd: _.noop,
        setStart: _.noop,
        getBoundingClientRect: _.noop,
        getClientRects: (): any[] => [],
    } as any);

(global.document.body as any).createTextRange = jest.fn();
global._ = _;

configure({adapter: new ReactSixteenAdapter()});

const app = document.createElement('div');
app.setAttribute('id', 'App');
document.body.appendChild(app);
Defaults.APP_ELEMENT = '#App';
