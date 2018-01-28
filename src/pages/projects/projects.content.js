import etude from './etude/desc';
import beact from './beact/desc';
import karesansui from './karesansui/desc';
import transperception from './transperception/desc';
import vtbb from './vtbb/desc';
import avexp from './avexp/desc';
import beatmap from './beatmap/desc';
import sta from './sta/desc';
import whip from './whipwhip/desc';
import trail from './trail/desc';
import boyajian from './boyajian/desc';
import cabinet from './cabinet/desc';

/**
 * @type {Array}
 * {
 * 		title: this has to be the same as the markdown file to match the link)
 * 		content: short descriptoin)
 * 		links: [{
 * 			name,
 * 			url,
 * 		}],
 *    img: thumbnail image for the project
 * }
 */
export default [
	etude,
	beact,
	karesansui,
	whip,
	boyajian,
	vtbb,
	beatmap,
	transperception,
	avexp,
	sta,
	cabinet,
	trail,
];
