import { Viz } from 'tableau-js'

const url='http://YOUR_DASHBOARD/';

// create container
const div=document.createElement('div');

const viz=new Viz(div, url);

document.body.append(div);