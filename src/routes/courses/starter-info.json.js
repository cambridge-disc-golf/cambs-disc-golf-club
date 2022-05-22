/**
 * @typedef {Object} HoleInfo
 * @property {number} hole
 * @property {number} distance
 * @property {number} par
 * @property {string} description
 */

/**
 * @returns {HoleInfo[]} 
 */
export async function get() {
    /** @type {HoleInfo[]} */
	const info = [{
        hole: 1,
        distance: 71,
        par: 3,
        description: "Slightly uphill, with a double mando' between the two silver birch trees, the basket is behind the shrub at end of left hand path. Dropzone between the trees if you miss the mando'.",
	}, {
        hole: 2,
        distance: 66,
        par: 3,
        description: "Trees on the left make this a dogleg left with the basket about 15m behind the second left tree.",
    }, {
        hole: 3,
        distance: 57,
        par: 3,
        description: "A slight downhill with two trees narrowing the fairway.",
    }, {
        hole: 4,
        distance: 56,
        par: 3,
        description: "Downhill with no height restriction off the tee. Two large grabby pine trees either side of fairway guard the small level green, with the basket a few metres to the right of the large centre tree at the end of the fairway",
    }, {
        hole: 5,
        distance: 73,
        par: 3,
        description: "A straight downhill hole with the road along the right hand tree line out of bounds.",
    }, {
        hole: 6,
        distance: 45,
        par: 3,
        description: "A short hole which still requires an accurate shot past a super grabby pine tree only 5 to 6 metres to the right off the tee.",
    }, {
        hole: 7,
        distance: 95,
        par: 3,
        description: "A dogleg right off the tee with a mando' tree on the right preventing cutting the corner.",
    }, {
        hole: 8,
        distance: 71,
        par: 3,
        description: "Fresh from the 'up,down dogleg' hole 7 we have hole 8 with an imposing mando' formed by the huge bough of a pine tree a few metres from the tee.",
    }, {
        hole: 9,
        distance: 68,
        par: 3,
        description: "This hole brings the OB road on the left and low limbed trees on the right into play.",
    }, {
        hole: 10,
        distance: 87,
        par: 3,
        description: "Start of back 9 on a flat hole with a fairway which is narrowed to 5 or 6m gap by a large patch of shrubbery left, and a tree on right.",
    }, {
        hole: 11,
        distance: 73,
        par: 3,
        description: "A downhill hole with the basket located in the 'jail' copse of three small trees located centre/left in photo at the end of the fairway.",
    }, {
        hole: 12,
        distance: 41,
        par: 3,
        description: "A short hole teeing from the grass for a few metres into a tunnel formed by shrubs and trees. The basket is off set left by a few metres at the end of the tunnel close to a felled pine tree.",
    }, {
        hole: 13,
        distance: 53,
        par: 3,
        description: "The tunnel theme continues with a longer shot this time, before reaching a tunnel with a slightly wider gap than on the previous hole. The basket is visible from the tee on this one.",
    }, {
        hole: 14,
        distance: 124,
        par: 4,
        description: "The last of 3 tunnel holes in a row is one of the hardest on the course. It begins in the tunnel and requires low, straight shots to cover the 95 or so metres to the end of the tunnel which opens up towards the exit. Anything left or right often leaves difficult shots back on to fairway with still a good distance to the hole. The basket is a further 30 ish metres on the grass in front, completely unobstructed.",
    }, {
        hole: 15,
        distance: 70,
        par: 3,
        description: "Affectionately named \"Old Stumpy\" due to the raised basket placed on an old tree stump. An uphill hole with a narrow gap between two large pine trees.",
    }, {
        hole: 16,
        distance: 118,
        par: 3,
        description: "A long hole (for Papworth) running downhill parallel with the OB road left.",
    }, {
        hole: 17,
        distance: 71,
        par: 3,
        description: "A slightly undulating hole rising from tee to the tree lined road ('river' OB).",
    }, {
        hole: 18,
        distance: 85,
        par: 3,
        description: "The last but not least of the downhill stretch to finish.",
    }];

    return { body: info };
}
