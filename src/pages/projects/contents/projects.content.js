import etude from './etude';
import beact from './beact';
import transperception from './transperception';
import vtbb from './vtbb';
import avexp from './avexp';
import beatmap from './beatmap';
import sta from './sta';

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
	transperception,
	sta,
	vtbb,
	avexp,
	beatmap,
];