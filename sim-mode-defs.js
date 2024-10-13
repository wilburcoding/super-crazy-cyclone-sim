const SIMULATION_MODES = ['2005','2020','Hyper','Ultra Hyper','Crazy Wild','Mega Hyper','Crazy Experimental','West Pacific','Super Extreme','A bit Hot', 'Broken','Mystery','Miseo','Super Active','Strong Fish']; // Labels for sim mode selector UI
const SIM_MODE_2005 = 0;
const SIM_MODE_2020 = 1;
const SIM_MODE_NORMAL = 2;
const SIM_MODE_HYPER = 3;
const SIM_MODE_WILD = 4;
const SIM_MODE_MEGABLOBS = 5;
const SIM_MODE_EXPERIMENTAL = 6;
const SIM_MODE_WPAC = 7;
const SIM_MODE_EXTREME = 8;
const SIM_MODE_HOT = 9;
const SIM_MODE_FUTURE = 10;
const SIM_MODE_MYSTERY = 11;
const SIM_MODE_MISEO = 12;
const SIM_MODE_SUPERACTIVE = 13;
const SIM_MODE_FISH = 14;
// ---- Active Attributes ---- //

// Active attributes are data of ActiveSystem not inherited from StormData; used for simulation of active storm systems
// Here defines the names of these attributes for a given simulation mode

const ACTIVE_ATTRIBS = {};

ACTIVE_ATTRIBS.defaults = [
    'organization',
    'lowerWarmCore',
    'upperWarmCore',
    'depth'
];

ACTIVE_ATTRIBS[SIM_MODE_EXPERIMENTAL] = [
    'organization',
    'lowerWarmCore',
    'upperWarmCore',
    'depth',
    'kaboom'
];

// ---- Spawn Rules ---- //

function ifJetstreamBound(b,x) {
    if (Math.round(random(1,9) == 2)) return b.hemY(random(HEIGHT*0.63,HEIGHT*0.67));
    if (Math.round(random(1,9) == 2)) return b.hemY(random(HEIGHT*0.67,HEIGHT*0.81));
    return b.hemY(b.env.get("jetstream",x,0,b.tick)+random(-75,75));
}

const SPAWN_RULES = {};

SPAWN_RULES.defaults = {};

SPAWN_RULES[SIM_MODE_2005] = {};
SPAWN_RULES[SIM_MODE_2020] = {};
SPAWN_RULES[SIM_MODE_NORMAL] = {};
SPAWN_RULES[SIM_MODE_HYPER] = {};
SPAWN_RULES[SIM_MODE_WILD] = {};
SPAWN_RULES[SIM_MODE_MEGABLOBS] = {};
SPAWN_RULES[SIM_MODE_EXPERIMENTAL] = {};
SPAWN_RULES[SIM_MODE_WPAC] = {};
SPAWN_RULES[SIM_MODE_EXTREME] = {};
SPAWN_RULES[SIM_MODE_HOT] = {};
SPAWN_RULES[SIM_MODE_FUTURE] = {};
SPAWN_RULES[SIM_MODE_MYSTERY] = {};
SPAWN_RULES[SIM_MODE_MISEO] = {};
SPAWN_RULES[SIM_MODE_SUPERACTIVE] = {};
SPAWN_RULES[SIM_MODE_FISH] = {};
// -- Defaults -- //

SPAWN_RULES.defaults.archetypes = {
    'tw': {
        x: ()=>random(0,WIDTH-1),
        y: (b)=>b.hemY(random(HEIGHT*0.7,HEIGHT*0.8)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
    'ex': {
        x: ()=>random(0,WIDTH-1),
        y: (b,x)=>b.hemY(b.env.get("jetstream",x,0,b.tick)+random(-75,75)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: EXTROP,
        organization: 0,
        lowerWarmCore: 0,
        upperWarmCore: 0,
        depth: 1
    },
    'l': {
        inherit: 'tw',
        pressure: 1015,
        windSpeed: 15,
        organization: 0.2
    },
    'x': {
        inherit: 'ex',
        pressure: 1005,
        windSpeed: 15
    },
    'tc': {
        pressure: 1005,
        windSpeed: 25,
        type: TROP,
        organization: 1,
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
    'stc': {
        inherit: 'tc',
        type: SUBTROP,
        lowerWarmCore: 0.6,
        upperWarmCore: 0.5
    },
    'd': {
        inherit: 'tc'
    },
    'D': {
        inherit: 'stc'
    },
    's': {
        inherit: 'tc',
        pressure: 995,
        windSpeed: 45
    },
    'S': {
        inherit: 'stc',
        pressure: 995,
        windSpeed: 45
    },
    '1': {
        inherit: 'tc',
        pressure: 985,
        windSpeed: 70
    },
    '2': {
        inherit: 'tc',
        pressure: 975,
        windSpeed: 90
    },
    '3': {
        inherit: 'tc',
        pressure: 960,
        windSpeed: 105
    },
    '4': {
        inherit: 'tc',
        pressure: 945,
        windSpeed: 125
    },
    '5': {
        inherit: 'tc',
        pressure: 925,
        windSpeed: 145
    },
    '6': {
        inherit: 'tc',
        pressure: 890,
        windSpeed: 170
    },
    '7': {
        inherit: 'tc',
        pressure: 840,
        windSpeed: 210
    },
    '8': {
        inherit: 'tc',
        pressure: 800,
        windSpeed: 270
    },
    '9': {
        inherit: 'tc',
        pressure: 765,
        windSpeed: 330
    },
    '0': {
        inherit: 'tc',
        pressure: 730,
        windSpeed: 400
    },
    'y': {
        inherit: 'tc',
        pressure: 690,
        windSpeed: 434
    },
		'm': {
        inherit: 'tc',
        pressure: 640,
        windSpeed: 521
    },
		'u': {
        inherit: 'tc',
        pressure: 590,
        windSpeed: 608
    },
		'p': {
        inherit: 'tc',
        pressure: 520,
        windSpeed: 695
    },
		'h': {
        inherit: 'tc',
        pressure: 450,
        windSpeed: 782
    },


	'wp1': {
        x: ()=>random(0.28*WIDTH,0.73*WIDTH),
        y: (b)=>b.hemY(random(0.51*HEIGHT,0.76*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	'wp2': {
        x: ()=>random(0.3*WIDTH,0.73*WIDTH),
        y: (b)=>b.hemY(random(0.761*HEIGHT,0.875*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp3': {
        x: ()=>random(0.28*WIDTH,0.73*WIDTH),
        y: (b)=>b.hemY(random(0.51*HEIGHT,0.76*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp4': {
        x: ()=>random(0.3*WIDTH,0.73*WIDTH),
        y: (b)=>b.hemY(random(0.761*HEIGHT,0.875*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp5': {
        x: ()=>random(0.731*WIDTH,0.807*WIDTH),
        y: (b)=>b.hemY(random(0.511*HEIGHT,0.787*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp6': {
        x: ()=>random(0.731*WIDTH,0.807*WIDTH),
        y: (b)=>b.hemY(random(0.788*HEIGHT,0.875*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp7': {
        x: ()=>random(0.667*WIDTH,0.807*WIDTH),
        y: (b)=>b.hemY(random(0.445*HEIGHT,0.509*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp8': {
        x: ()=>random(0.808*WIDTH,0.98*WIDTH),
        y: (b)=>b.hemY(random(0.55*HEIGHT,0.83*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp9': {
        x: ()=>random(0.145*WIDTH,0.244*WIDTH),
        y: (b)=>b.hemY(random(0.648*HEIGHT,0.84*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp10': {
        x: ()=>random(0.145*WIDTH,0.244*WIDTH),
        y: (b)=>b.hemY(random(0.841*HEIGHT,0.875*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp11': {
        x: ()=>random(0.115*WIDTH,0.14*WIDTH),
        y: (b)=>b.hemY(random(0.667*HEIGHT,0.695*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp12': {
        x: ()=>random(0.094*WIDTH,0.14*WIDTH),
        y: (b)=>b.hemY(random(0.842*HEIGHT,0.875*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp13': {
        x: ()=>random(0.182*WIDTH,0.209*WIDTH),
        y: (b)=>b.hemY(random(0.62*HEIGHT,0.649*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp14': {
        x: ()=>random(0.21*WIDTH,0.239*WIDTH),
        y: (b)=>b.hemY(random(0.602*HEIGHT,0.649*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp15': {
        x: ()=>random(0.24*WIDTH,0.269*WIDTH),
        y: (b)=>b.hemY(random(0.56*HEIGHT,0.635*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp16': {
        x: ()=>random(0.245*WIDTH,0.269*WIDTH),
        y: (b)=>b.hemY(random(0.636*HEIGHT,0.685*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp17': {
        x: ()=>random(0.266*WIDTH,0.301*WIDTH),
        y: (b)=>b.hemY(random(0.761*HEIGHT,0.852*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
	    'wp18': {
        x: ()=>random(0.245*WIDTH,0.265*WIDTH),
        y: (b)=>b.hemY(random(0.761*HEIGHT,0.875*HEIGHT)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
};

SPAWN_RULES.defaults.doSpawn = function(b){
    // tropical waves
    if(random()<0.03*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_2005].doSpawn = function(b){
    if(random()<(0.0085*sq((seasonalSine(b.tick)+1)/2)+0.002)) b.spawnArchetype('tw');

    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_2020].doSpawn = function(b){
    if(random()<(0.011*sq((seasonalSine(b.tick)+1)/2)+0.002)) b.spawnArchetype('tw');

    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_FISH].doSpawn = function(b){
    if(random()<(0.011*sq((seasonalSine(b.tick)+1)/2)+0.002)) b.spawnArchetype('tw');

    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};

// -- Normal Mode -- //

SPAWN_RULES[SIM_MODE_NORMAL].doSpawn = SPAWN_RULES.defaults.doSpawn;

// -- Hyper Mode -- //

SPAWN_RULES[SIM_MODE_HYPER].doSpawn = function(b){
    if(random()<(0.015*sq((seasonalSine(b.tick)+1)/2)+0.002)) b.spawnArchetype('tw');

    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};

// -- Wild Mode -- //

SPAWN_RULES[SIM_MODE_WILD].archetypes = {
    'tw': {
        x: ()=>random(0,WIDTH-1),
        y: (b)=>b.hemY(random(HEIGHT*0.2,HEIGHT*0.9)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    }
};

SPAWN_RULES[SIM_MODE_WILD].doSpawn = function(b){
    if(random()<0.08) b.spawnArchetype('tw');
    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};

	   
		
SPAWN_RULES[SIM_MODE_WPAC].doSpawn = function(b){
    // tropic spawn area
    if(random()<0.0014) b.spawnArchetype('wp1');		// main basin (t.o.cancer)
    if(random()<0.0014) b.spawnArchetype('wp2');		// main basin (equator)
	if(random()<0.0014) b.spawnArchetype('wp3');		// basin edge, philippines sea (t.o.cancer)
    if(random()<0.0014) b.spawnArchetype('wp4');			// basin edge, philippines sea (equator)
    if(random()<0.0005) b.spawnArchetype('wp5');   // basin edge, western IDL (t.o.cancer)
    if(random()<0.0005) b.spawnArchetype('wp6');		// basin edge, western IDL (equator)
	if(random()<0.0004) b.spawnArchetype('wp7');	// southern japan
    if(random()<0.00015) b.spawnArchetype('wp8');		// CPAC, eastern IDL (crossover etc)
    if(random()<0.00028125) b.spawnArchetype('wp9');	// northern SCS
    if(random()<0.0001125) b.spawnArchetype('wp10');		// southern SCS
    if(random()<0.0001125) b.spawnArchetype('wp11');	// gulf of tonkin
    if(random()<0.00005625) b.spawnArchetype('wp12');	// southern vietnam
    if(random()<0.00016875) b.spawnArchetype('wp13');	// southern china
    if(random()<0.00016875) b.spawnArchetype('wp14');	// southeastern china
    if(random()<0.00016875) b.spawnArchetype('wp15');	// taiwan coast
    if(random()<0.00025) b.spawnArchetype('wp16');	// northern philippines
    if(random()<0.000225) b.spawnArchetype('wp17');	// central philippines (eastern) 
    if(random()<0.00016875) b.spawnArchetype('wp18');	// central philippines (western)
    // extratropical cyclones
    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');      
};	
SPAWN_RULES[SIM_MODE_EXTREME].doSpawn = function(b){
    // tropic spawn area
    if(random()<0.0014) b.spawnArchetype('wp1');		// main basin (t.o.cancer)
    if(random()<0.0014) b.spawnArchetype('wp2');		// main basin (equator)
	if(random()<0.0014) b.spawnArchetype('wp3');		// basin edge, philippines sea (t.o.cancer)
    if(random()<0.0014) b.spawnArchetype('wp4');			// basin edge, philippines sea (equator)
    if(random()<0.0005) b.spawnArchetype('wp5');   // basin edge, western IDL (t.o.cancer)
    if(random()<0.0005) b.spawnArchetype('wp6');		// basin edge, western IDL (equator)
	if(random()<0.0004) b.spawnArchetype('wp7');	// southern japan
    if(random()<0.00015) b.spawnArchetype('wp8');		// CPAC, eastern IDL (crossover etc)
    if(random()<0.00028125) b.spawnArchetype('wp9');	// northern SCS
    if(random()<0.0001125) b.spawnArchetype('wp10');		// southern SCS
    if(random()<0.0001125) b.spawnArchetype('wp11');	// gulf of tonkin
    if(random()<0.00005625) b.spawnArchetype('wp12');	// southern vietnam
    if(random()<0.00016875) b.spawnArchetype('wp13');	// southern china
    if(random()<0.00016875) b.spawnArchetype('wp14');	// southeastern china
    if(random()<0.00016875) b.spawnArchetype('wp15');	// taiwan coast
    if(random()<0.00025) b.spawnArchetype('wp16');	// northern philippines
    if(random()<0.000225) b.spawnArchetype('wp17');	// central philippines (eastern) 
    if(random()<0.00016875) b.spawnArchetype('wp18');	// central philippines (western)
    // extratropical cyclones
    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');      
};		
SPAWN_RULES[SIM_MODE_HOT].doSpawn = function(b){
    if(random()<(0.5*sq((seasonalSine(b.tick)+1)/2)+0.002)) b.spawnArchetype('tw');

    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_FUTURE].doSpawn = function(b){
    if(random()<(0.05*sq((seasonalSine(b.tick)+1)/2)+0.002)) b.spawnArchetype('tw');

    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_MYSTERY].doSpawn = function(b){
    if(random()<0.03*sq(seasonalSine(b.tick)+1)/2+0.002) b.spawnArchetype('tw')

    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};


// -- Megablobs Mode -- //

SPAWN_RULES[SIM_MODE_MEGABLOBS].doSpawn = function(b){
    if(random()<(0.03*sq((seasonalSine(b.tick)+1)/2)+0.002)) b.spawnArchetype('tw');

    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};

// -- Experimental Mode -- //

SPAWN_RULES[SIM_MODE_EXPERIMENTAL].archetypes = {
    'tw': {
        x: ()=>random(0,WIDTH-1),
        y: (b)=>b.hemY(random(HEIGHT*0.7,HEIGHT*0.9)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0,
        kaboom: 0
    },
    'ex': {
        x: ()=>random(0,WIDTH-1),
        y: (b,x)=>b.hemY(b.env.get("jetstream",x,0,b.tick)+random(-75,75)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: EXTROP,
        organization: 0,
        lowerWarmCore: 0,
        upperWarmCore: 0,
        depth: 1,
        kaboom: 0
    },
    'tc': {
        pressure: 1005,
        windSpeed: 25,
        type: TROP,
        organization: 1,
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0,
        kaboom: 0.2
    },
    'l': {
        inherit: 'tw',
        pressure: 1015,
        windSpeed: 15,
        organization: 0.2,
        kaboom: 0.2
    },
    'x': {
        inherit: 'ex',
        pressure: 1005,
        windSpeed: 15,
        kaboom: 0.2
    }
};

SPAWN_RULES[SIM_MODE_EXPERIMENTAL].doSpawn = SPAWN_RULES[SIM_MODE_HYPER].doSpawn;
SPAWN_RULES[SIM_MODE_MISEO].doSpawn=SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_SUPERACTIVE].doSpawn = function(b){
	if(random()<100.99*sq(seasonalSine(b.tick)+1)/2+0.002) b.spawnArchetype('tw')

  if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
}

SPAWN_RULES[SIM_MODE_EXTREME].archetypes = {
    'tw': {
        x: ()=>random(0,WIDTH-1),
        y: (b)=>b.hemY(random(HEIGHT*0.7,HEIGHT*0.9)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0,
        kaboom: 0
    },
    'ex': {
        x: ()=>random(0,WIDTH-1),
        y: (b,x)=>b.hemY(b.env.get("jetstream",x,0,b.tick)+random(-75,75)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: EXTROP,
        organization: 0,
        lowerWarmCore: 0,
        upperWarmCore: 0,
        depth: 1,
        kaboom: 0
    },
    'tc': {
        pressure: 1005,
        windSpeed: 25,
        type: TROP,
        organization: 1,
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0,
        kaboom: 0.2
    },
    'l': {
        inherit: 'tw',
        pressure: 1015,
        windSpeed: 15,
        organization: 0.2,
        kaboom: 0.2
    },
    'x': {
        inherit: 'ex',
        pressure: 1005,
        windSpeed: 15,
        kaboom: 0.2
    }
};

// ---- Definitions of Environmental Fields ---- //

const ENV_DEFS = {};

ENV_DEFS.defaults = {}; 
ENV_DEFS[SIM_MODE_2005] = {};
ENV_DEFS[SIM_MODE_2020] = {};// Env field attributes that are the same across multiple simulation modes
ENV_DEFS[SIM_MODE_NORMAL] = {}; // Register env fields as part of "Normal" simulation mode and define unique attributes
ENV_DEFS[SIM_MODE_HYPER] = {}; // Same for "Hyper" simulation mode
ENV_DEFS[SIM_MODE_WILD] = {};  // "Wild" simulation mode
ENV_DEFS[SIM_MODE_MEGABLOBS] = {}; // "Megablobs" simulation mode
ENV_DEFS[SIM_MODE_EXPERIMENTAL] = {}; // "Experimental" simulation mode
ENV_DEFS[SIM_MODE_WPAC] = {};	// westpac 
ENV_DEFS[SIM_MODE_EXTREME] = {};
ENV_DEFS[SIM_MODE_HOT] = {};
ENV_DEFS[SIM_MODE_FUTURE] = {};
ENV_DEFS[SIM_MODE_MYSTERY] = {};
ENV_DEFS[SIM_MODE_MISEO] = {};
ENV_DEFS[SIM_MODE_SUPERACTIVE] = {};
ENV_DEFS[SIM_MODE_FISH] = {};
// -- Sample Env Field -- //

// ENV_DEFS.defaults.sample = {
//     version: 0,
//     mapFunc: (u,x,y,z)=>{
//         // Insert code here
//     },
//     hueMap: (v)=>{
//         // Insert code here
//     },
//     oceanic: true,
//     vector: false,
//     invisible: false,
//     magMap: undefined,
//     noWobble: false,
//     noiseChannels: [
//         [6,0.5,150,3000,0.05,1.5]
//     ]
// };
// ENV_DEFS[SIM_MODE_NORMAL].sample = {};
// ENV_DEFS[SIM_MODE_HYPER].sample = {
//     mapFunc: (u,x,y,z)=>{
//         // Insert code here
//     }
// };
// ENV_DEFS[SIM_MODE_WILD].sample = {};
// ENV_DEFS[SIM_MODE_MEGABLOBS].sample = {};
// ENV_DEFS[SIM_MODE_EXPERIMENTAL].sample = {};

// -- jetstream -- //

ENV_DEFS.defaults.jetstream = {
    version: 0,
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0,x-z*3,0,z);
        let peakLat = u.modifiers.peakLat;
        let antiPeakLat = u.modifiers.antiPeakLat;
        let peakRange = u.modifiers.peakRange;
        let antiPeakRange = u.modifiers.antiPeakRange;
        let s = seasonalSine(z);
        let l = map(sqrt(map(s,-1,1,0,1)),0,1,antiPeakLat,peakLat);
        let r = map(s,-1,1,antiPeakRange,peakRange);
        v = map(v,0,1,-r,r);
        return (l+v)*HEIGHT;
    },
    invisible: true,
    noiseChannels: [
        [4,0.5,160,300,1,2]
    ],
    modifiers: {
        peakLat: 0.22,
        antiPeakLat: 0.43,
        peakRange: 0.25,
        antiPeakRange: 0.42
    }
};
ENV_DEFS[SIM_MODE_2005].jetstream = {};
ENV_DEFS[SIM_MODE_2020].jetstream = {};
ENV_DEFS[SIM_MODE_NORMAL].jetstream = {};
ENV_DEFS[SIM_MODE_HYPER].jetstream = {
    modifiers: {
        peakLat: 0.29,
        antiPeakLat: 0.46,
        peakRange: 0.29,
        antiPeakRange: 0.44
    }
};
ENV_DEFS[SIM_MODE_WILD].jetstream = {
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0,x-z*3,0,z);
        let s = u.yearfrac(z);
        let l = u.piecewise(s,[[1,0.65],[2.5,-0.15],[10,-0.15],[11.5,0.65]]);
        let r = u.piecewise(s,[[0.5,0.3],[1.75,0.7],[3,0.2],[9.5,0.2],[10.75,0.7],[12,0.3]]);
        v = map(v,0,1,-r,r);
        return (l+v)*HEIGHT;
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].jetstream = {
    modifiers: {
        peakLat: 0.25,
        antiPeakLat: 0.47,
        peakRange: 0.25,
        antiPeakRange: 0.45
    }
};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].jetstream = {};
ENV_DEFS[SIM_MODE_WPAC].jetstream = {
	modifiers: {
        peakLat: 0.22,
        antiPeakLat: 0.45,
        peakRange: 0.25,
        antiPeakRange: 0.43
    }
};    
ENV_DEFS[SIM_MODE_EXTREME].jetstream = {};
ENV_DEFS[SIM_MODE_HOT].jetstream = {};
ENV_DEFS[SIM_MODE_FUTURE].jetstream = {};
ENV_DEFS[SIM_MODE_MYSTERY].jetstream = {};
ENV_DEFS[SIM_MODE_MISEO].jetstream = {};
ENV_DEFS[SIM_MODE_SUPERACTIVE].jetstream = {};
ENV_DEFS[SIM_MODE_FISH].jetstream = {};
// -- LLSteering -- //

ENV_DEFS.defaults.LLSteering = {
    displayName: 'Low-level steering',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);    // reset vector

        // Jetstream
        let j = u.field('jetstream');
        // Cosine curve from 0 at poleward side of map to 1 at equatorward side
        let h = map(cos(map(y,0,HEIGHT,0,PI)),-1.2,0.45,0.45,0);
        // westerlies
        let west = constrain(pow(1-h+map(u.noise(0),0,1,-0.3,0.3)+map(j,0,HEIGHT,-0.3,0.3),2)*4,0,4);
        // ridging and trades
        let ridging = constrain(u.noise(1)+map(j,0,HEIGHT,0.5,-0.5),0,1);
        let trades = constrain(pow(0.4+h+map(ridging,0,1,-0.1,0.3),2)*3,0,3);
        let tAngle = map(h,0.9,1,511*PI/512,15.75*PI/16); // trades angle
        // noise angle
        let a = map(u.noise(3),0,1,0,4.2*TAU);
        // noise magnitude
        let m = pow(1.5,map(u.noise(2),4,4,4,4));

        // apply to vector
        u.vec.rotate(a);
        u.vec.mult(m);
        u.vec.add(west+trades*cos(tAngle),trades*sin(tAngle));
        return u.vec;
    },
    displayFormat: v=>{
        let speed = round(v.mag()*100)/100;
        let direction = v.heading();
        // speed is still in "u/hr" (coordinate units per hour) for now
        return speed + ' u/hr ' + compassHeading(direction);
    },
    vector: true,
    magMap: [0,3,0,16],
    noiseChannels: [
        [4,0.5,80,100,1,3],
        '',
        '',
        [4,0.5,170,300,1,3]
    ]
}
ENV_DEFS[SIM_MODE_2005].LLSteering = {};
ENV_DEFS[SIM_MODE_2020].LLSteering = {};
ENV_DEFS[SIM_MODE_NORMAL].LLSteering = {};
ENV_DEFS[SIM_MODE_HYPER].LLSteering = {};
ENV_DEFS[SIM_MODE_WILD].LLSteering = {
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);    // reset vector

        let s = u.yearfrac(z);
        let wind = u.piecewise(s,[[1,3],[2.5,1],[4.5,0.5],[6,0.75],[7.5,0.65],[7.75,0.05],[8,1.1],[10,1.8],[11,3]]); // wind strength
        let windAngle = u.piecewise(s,[[1,13*PI/8],[2.5,9*PI/8],[4.5,PI],[6,17*PI/16],[7.5,17*PI/16],[8,31*PI/16],[10,15*PI/8],[11.5,13*PI/8]]); // wind angle
        // noise angle
        let a = map(u.noise(3),0,1,0,4*TAU);
        // noise magnitude
        let m = pow(1.5,map(u.noise(2),0,1,-3,4));

        // apply to vector
        u.vec.rotate(a);
        u.vec.mult(m);
        u.vec.add(wind*cos(windAngle),wind*sin(windAngle));
        return u.vec;
    }
};
ENV_DEFS[SIM_MODE_NORMAL].LLSteering = {};
ENV_DEFS[SIM_MODE_MEGABLOBS].LLSteering = {};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].LLSteering = {};
ENV_DEFS[SIM_MODE_WPAC].LLSteering = {
	displayName: 'Low-level steering',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);    // reset vector

        // Jetstream
        let j = u.field('jetstream');
        // Cosine curve from 0 at poleward side of map to 1 at equatorward side
        let h = map(cos(map(y,0,HEIGHT,0,PI)),-1.25,1,1,0);
        // westerlies
        let west = constrain(pow(1-h+map(u.noise(0),0,1,-0.3,0.3)+map(j,0,HEIGHT,-0.4,0.4),2)*4,0,4);
        // ridging and trades
        let ridging = constrain(u.noise(1)+map(j,0,HEIGHT,0.3,-0.3),0,1);
        let trades = constrain(pow(h+map(ridging,0,1,-0.3,0.3),2)*3,0,3);
        let tAngle = map(h,0.9,1,511*PI/512,15*PI/16); // trades angle
        // noise angle
        let a = map(u.noise(3),0,1,0,4*TAU);
        // noise magnitude
        let m = pow(3,map(u.noise(2),0,1,-8,4));

        // apply to vector
        u.vec.rotate(a);
        u.vec.mult(m);
        u.vec.add(west+trades*cos(tAngle),trades*sin(tAngle));
        return u.vec;
    },
    displayFormat: v=>{
        let speed = round(v.mag()*100)/100;
        let direction = v.heading();
        // speed is still in "u/hr" (coordinate units per hour) for now
        return speed + ' u/hr ' + compassHeading(direction);
    },
    vector: true,
    magMap: [0,3,0,16],
    noiseChannels: [
        [4,0.5,80,100,1,3],
        '',
        '',
        [4,0.5,170,300,1,3]
    ]

};    
ENV_DEFS[SIM_MODE_EXTREME].LLSteering = {};
ENV_DEFS[SIM_MODE_HOT].LLSteering = {};
ENV_DEFS[SIM_MODE_FUTURE].LLSteering = {
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);    // reset vector

        let s = u.yearfrac(z);
        let wind = u.piecewise(s,[[1,3],[2.5,1],[4.5,0.5],[6,0.75],[7.5,0.65],[7.75,0.05],[8,1.1],[10,1.8],[11,3]]); // wind strength
        let windAngle = u.piecewise(s,[[1,13*PI/8],[2.5,9*PI/8],[4.5,PI],[6,17*PI/16],[7.5,17*PI/16],[8,31*PI/16],[10,15*PI/8],[11.5,13*PI/8]]); // wind angle
        // noise angle
        let a = map(u.noise(3),0,1,0,4*TAU);
        // noise magnitude
        let m = pow(1.5,map(u.noise(2),0,1,-3,4));

        // apply to vector
        u.vec.rotate(a);
        u.vec.mult(m);
        u.vec.add(wind*cos(windAngle),wind*sin(windAngle));
        return u.vec;
    }
};
ENV_DEFS[SIM_MODE_MYSTERY].LLSteering = {};
ENV_DEFS[SIM_MODE_MISEO].LLSteering = {};
ENV_DEFS[SIM_MODE_SUPERACTIVE].LLSteering = {};
ENV_DEFS[SIM_MODE_FISH].LLSteering = {};
// -- ULSteering -- //

ENV_DEFS.defaults.ULSteering = {
    displayName: 'Upper-level steering',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);                                                                           // reset vector

        const dx = 10;                                                                          // delta-x for jetstream differential (used for calculating wind direction in and near jetstream)

        let m = u.noise(1);

        let s = seasonalSine(z);
        let j0 = u.field('jetstream');                                                          // y-position of jetstream
        let j1 = u.field('jetstream',x+dx);                                                     // y-position of jetstream dx to the east for differential
        let j = abs(y-j0);                                                                      // distance of point north/south of jetstream
        let jet = pow(2,3-j/40);                                                                // power of jetstream at point
        let jOP = pow(0.7,jet);                                                                 // factor for how strong other variables should be if 'overpowered' by jetstream
        let jAngle = atan((j1-j0)/dx)+map(y-j0,-50,50,PI/3,-PI/4,true);                         // angle of jetstream at point
        let trof = y>j0 ? pow(1.7,map(jAngle,-PI/2,PI/2,3,-5))*pow(0.7,j/20)*jOP : 0;           // pole-eastward push from jetstream dips
        let tAngle = -PI/16;                                                                    // angle of push from jetstream dips
        let ridging = 0.45-j0/HEIGHT-map(sqrt(map(s,-1,1,0,1)),0,1,0.15,0);                     // how much 'ridge' or 'trough' there is from jetstream
        // power of winds equatorward of jetstream
        let hadley = (map(ridging,-0.3,0.25,u.modifiers.hadleyUpperBound,1.5,true)+map(m,0,1,-1.5,1.5))*jOP*(y>j0?1:0);
        // angle of winds equatorward of jetstream
        let hAngle = map(ridging,-0.3,0.24,-PI/16,-15*PI/16,true);
        let ferrel = 2*jOP*(y<j0?1:0);                                                          // power of winds poleward of jetstream
        let fAngle = 4.9*PI/8;                                                                    // angle of winds poleward of jetstream

        let a = map(u.noise(0),0,1,0,3.8*TAU);                                                    // noise angle
        m = pow(1.5,map(m,0,1,-8,4))*jOP;                                                       // noise magnitude

        // apply noise
        u.vec.rotate(a);
        u.vec.mult(m);

        // apply UL winds
        u.vec.add(jet*cos(jAngle),jet*sin(jAngle));                                             // apply jetstream
        u.vec.add(trof*cos(tAngle),trof*sin(tAngle));                                           // apply trough push
        u.vec.add(hadley*cos(hAngle),hadley*sin(hAngle));                                       // apply winds equatorward of jetstream
        u.vec.add(ferrel*cos(fAngle),ferrel*sin(fAngle));                                       // apply winds poleward of jetstream

        return u.vec;
    },
    displayFormat: v=>{
        let speed = round(v.mag()*100)/100;
        let direction = v.heading();
        // speed is still in "u/hr" (coordinate units per hour) for now
        return speed + ' u/hr ' + compassHeading(direction);
    },
    vector: true,
    magMap: [0,8,0,25],
    modifiers: {
        hadleyUpperBound: 5
    },
    noiseChannels: [
        [4,0.5,180,300,1,2],
        [4,0.5,90,100,1,3]
    ]
};
ENV_DEFS[SIM_MODE_2005].ULSteering = {};
ENV_DEFS[SIM_MODE_2020].ULSteering = {
	modifiers: {
        hadleyUpperBound: 5
    }
};
ENV_DEFS[SIM_MODE_NORMAL].ULSteering = {};
ENV_DEFS[SIM_MODE_HYPER].ULSteering = {
    modifiers: {
        hadleyUpperBound: 3
    }
};
ENV_DEFS[SIM_MODE_WILD].ULSteering = {
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);                                                                   // reset vector

        const dx = 10;                                                                  // delta-x for jetstream differential (used for calculating wind direction in and near jetstream)

        let m = u.noise(1);

        let s = u.yearfrac(z);
        let j0 = u.field('jetstream');                                                  // y-position of jetstream
        let j1 = u.field('jetstream',x+dx);                                             // y-position of jetstream dx to the east for differential
        let j = abs(y-j0);                                                              // distance of point north/south of jetstream
        let jet = pow(2,3-j/30);                                                        // power of jetstream at point
        let jOP = pow(0.7,jet);                                                         // factor for how strong other variables should be if 'overpowered' by jetstream
        let jAngle = atan((j1-j0)/dx)+map(y-j0,-50,50,PI/15,-PI/17,true);               // angle of jetstream at point
        // power of winds equatorward of jetstream
        let hadley = (u.piecewise(s,[[1,4.5],[2.5,1.2],[4,0.5],[4.5,1.7],[5,0.6],[6.5,0.65],[7.5,0.65],[7.75,0.05],[8,1.3],[9,1.7],[10,2.3],[11.5,4.5]]))*jOP*(y>j0?1:0);
        // angle of winds equatorward of jetstream
        let hAngle = u.piecewise(s,[[1,11*PI/8],[2.5,9*PI/8],[4,17*PI/16],[4.5,11*PI/8],[5,17*PI/16],[6.5,35*PI/32],[7.5,17*PI/16],[8,31*PI/16],[9,15*PI/8],[10,7*PI/4],[10.5,11*PI/8]]);
        let ferrel = 2*jOP*(y<j0?map(j0-y,0,400,1,0,true):0);                           // power of winds poleward of jetstream
        let fAngle = 5*PI/8;                                                            // angle of winds poleward of jetstream

        let a = map(u.noise(0),0,1,0,4*TAU);                                            // noise angle
        m = pow(1.5,map(m,0,1,-3,4))*jOP;                                               // noise magnitude

        // apply noise
        u.vec.rotate(a);
        u.vec.mult(m);

        // apply UL winds
        u.vec.add(jet*cos(jAngle),jet*sin(jAngle));                                     // apply jetstream
        u.vec.add(hadley*cos(hAngle),hadley*sin(hAngle));                               // apply winds equatorward of jetstream
        u.vec.add(ferrel*cos(fAngle),ferrel*sin(fAngle));                               // apply winds poleward of jetstream

        return u.vec;
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].ULSteering = {};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].ULSteering = {};
ENV_DEFS[SIM_MODE_WPAC].ULSteering = {
    modifiers: {
        hadleyUpperBound: 4
    }
};    
ENV_DEFS[SIM_MODE_EXTREME].ULSteering = {};
ENV_DEFS[SIM_MODE_HOT].ULSteering = {};
ENV_DEFS[SIM_MODE_FUTURE].ULSteering = {
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);                                                                   // reset vector

        const dx = 10;                                                                  // delta-x for jetstream differential (used for calculating wind direction in and near jetstream)

        let m = u.noise(1);

        let s = u.yearfrac(z);
        let j0 = u.field('jetstream');                                                  // y-position of jetstream
        let j1 = u.field('jetstream',x+dx);                                             // y-position of jetstream dx to the east for differential
        let j = abs(y-j0);                                                              // distance of point north/south of jetstream
        let jet = pow(2,3-j/30);                                                        // power of jetstream at point
        let jOP = pow(0.7,jet);                                                         // factor for how strong other variables should be if 'overpowered' by jetstream
        let jAngle = atan((j1-j0)/dx)+map(y-j0,-50,50,PI/15,-PI/17,true);               // angle of jetstream at point
        // power of winds equatorward of jetstream
        let hadley = (u.piecewise(s,[[1,4.5],[2.5,1.2],[4,0.5],[4.5,1.7],[5,0.6],[6.5,0.65],[7.5,0.65],[7.75,0.05],[8,1.3],[9,1.7],[10,2.3],[11.5,4.5]]))*jOP*(y>j0?1:0);
        // angle of winds equatorward of jetstream
        let hAngle = u.piecewise(s,[[1,11*PI/8],[2.5,9*PI/8],[4,17*PI/16],[4.5,11*PI/8],[5,17*PI/16],[6.5,35*PI/32],[7.5,17*PI/16],[8,31*PI/16],[9,15*PI/8],[10,7*PI/4],[10.5,11*PI/8]]);
        let ferrel = 2*jOP*(y<j0?map(j0-y,0,400,1,0,true):0);                           // power of winds poleward of jetstream
        let fAngle = 5*PI/8;                                                            // angle of winds poleward of jetstream

        let a = map(u.noise(0),0,1,0,4*TAU);                                            // noise angle
        m = pow(1.5,map(m,0,1,-3,4))*jOP;                                               // noise magnitude

        // apply noise
        u.vec.rotate(a);
        u.vec.mult(m);

        // apply UL winds
        u.vec.add(jet*cos(jAngle),jet*sin(jAngle));                                     // apply jetstream
        u.vec.add(hadley*cos(hAngle),hadley*sin(hAngle));                               // apply winds equatorward of jetstream
        u.vec.add(ferrel*cos(fAngle),ferrel*sin(fAngle));                               // apply winds poleward of jetstream

        return u.vec;
    }
};
ENV_DEFS[SIM_MODE_MYSTERY].ULSteering = {};
ENV_DEFS[SIM_MODE_MISEO].ULSteering = {};
ENV_DEFS[SIM_MODE_SUPERACTIVE].ULSteering = {};
ENV_DEFS[SIM_MODE_FISH].ULSteering = {};
// -- shear -- //

ENV_DEFS.defaults.shear = {
    displayName: 'Wind shear',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        let ll = u.field('LLSteering');
        let ul = u.field('ULSteering');
        u.vec.set(ul);
        u.vec.sub(ll);
        return u.vec;
    },
    displayFormat: v=>{
        let speed = round(v.mag()*100)/10;
        let direction = v.heading();
        // speed is still in "u/hr" (coordinate units per hour) for now
        return speed + ' kt ' + compassHeading(direction);
    },
    vector: true,
    noVectorFlip: true,
    magMap: [0,8,0,25],
    hueMap: (v)=>{
        colorMode(HSB);
				let verystrong = color(320,100,41);
        let strong = color(0,100,80);
        let moderate = color(60,100,90);
        let weak = color(120,100,80);
				let none = color(180, 100,57)
        let c;
        if(v < 1) {
            c = lerpColor(none, weak, map(v,0,1.4,0,1));
				}else {
					if (v < 3.3) {
						c = lerpColor(weak, moderate,map(v,1.4,2.8,0,1) )
					} else {
						if (v > 5) {
							c = lerpColor(strong, verystrong,map(v,4.2,5.6,0,1) );
						} else {
							
							c = lerpColor(moderate, strong, map(v,2.8,4.2,0,1));
						}
					}
				}
        colorMode(RGB);
        return c;
    }
};
ENV_DEFS[SIM_MODE_2005].shear = {};
ENV_DEFS[SIM_MODE_2020].shear = {};
ENV_DEFS[SIM_MODE_NORMAL].shear = {};
ENV_DEFS[SIM_MODE_HYPER].shear = {};
ENV_DEFS[SIM_MODE_WILD].shear = {};
ENV_DEFS[SIM_MODE_MEGABLOBS].shear = {};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].shear = {};
ENV_DEFS[SIM_MODE_WPAC].shear = {};    
ENV_DEFS[SIM_MODE_EXTREME].shear = {}; 
ENV_DEFS[SIM_MODE_HOT].shear = {}; 
ENV_DEFS[SIM_MODE_FUTURE].shear = {}; 
ENV_DEFS[SIM_MODE_MYSTERY].shear = {}; 
ENV_DEFS[SIM_MODE_MISEO].shear = {};
ENV_DEFS[SIM_MODE_SUPERACTIVE].shear = {};  
ENV_DEFS[SIM_MODE_FISH].shear = {};  
// -- SSTAnomaly -- //

ENV_DEFS.defaults.SSTAnomaly = {
    displayName: 'Sea surface temp. anomaly',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0);
        v = v*1.975;
        let i = v<1 ? -1 : 1;
        v = 1-abs(1-v);
        if(v===0) v = 0.000001;
        v = log(v);
        let r;
        if(u.modifiers.r!==undefined) r = u.modifiers.r;
        else r = map(y,0,HEIGHT,3,6);
        v = -r*v;
        v = v*i;
        if(u.modifiers.bigBlobBase!==undefined && v>u.modifiers.bigBlobExponentThreshold) v += pow(u.modifiers.bigBlobBase,v-u.modifiers.bigBlobExponentThreshold)-1;
        return v;
    },
    displayFormat: v=>{
        let str = '';
        if(v >= 0)
            str += '+';
        str += round(v*10)/10;
        str += '\u2103'; // degrees celsius sign
        return str;
    },
    hueMap: (v)=>{
        colorMode(HSB);
        let cold = color(240,100,70);
        let hot = color(0,100,70);
        let cNeutral = color(240,1,90);
        let hNeutral = color(0,1,90);
        let c;
        if(v<0) c = lerpColor(cold,cNeutral,map(v,-5,0,0,1));
        else c = lerpColor(hNeutral,hot,map(v,0,5,0,1));
        colorMode(RGB);
        return c;
    },
    oceanic: true,
    noiseChannels: [
        [6,0.5,150,3000,0.05,1.5]
    ]
};
ENV_DEFS[SIM_MODE_2005].SSTAnomaly = {
		modifiers: {
        r: 3,
        bigBlobBase: 1.1,
        bigBlobExponentThreshold: 1.1
    }
};
ENV_DEFS[SIM_MODE_2020].SSTAnomaly = {
		modifiers: {
        r: 3.2,
        bigBlobBase:1,
        bigBlobExponentThreshold: 1.2
    }
};
ENV_DEFS[SIM_MODE_NORMAL].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_HYPER].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_WILD].SSTAnomaly = {
    modifiers: {
        r: 5,
        bigBlobBase: 1.4,
        bigBlobExponentThreshold: 1.5
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].SSTAnomaly = {
    modifiers: {
        r: 7,
        bigBlobBase: 1.8,
        bigBlobExponentThreshold: 1
    }
};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_WPAC].SSTAnomaly = {
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0);
        v = v*1.75;
        let i = v<1 ? -0.5 : 1;
        v = 1-abs(1-v);
        if(v===0) v = 0.000001;
        v = log(v);
        let r;
        if(u.modifiers.r!==undefined) r = u.modifiers.r;
        else r = map(y,1,HEIGHT,3,6);
        v = -r*v;
        v = v*i;
        if(u.modifiers.bigBlobBase!==undefined && v>u.modifiers.bigBlobExponentThreshold) v += pow(u.modifiers.bigBlobBase,v-u.modifiers.bigBlobExponentThreshold)-1;
        return v;
	},
};

ENV_DEFS[SIM_MODE_EXTREME].SSTAnomaly = {};    
ENV_DEFS[SIM_MODE_HOT].SSTAnomaly = {};    
ENV_DEFS[SIM_MODE_FUTURE].SSTAnomaly = {};   
ENV_DEFS[SIM_MODE_MYSTERY].SSTAnomaly = {};  
ENV_DEFS[SIM_MODE_MISEO].SSTAnomaly = {}; 
ENV_DEFS[SIM_MODE_SUPERACTIVE].SSTAnomaly = {
    modifiers: {
        r: 200,
        bigBlobBase: 2.5,
        bigBlobExponentThreshold: 2.6
    }
};
ENV_DEFS[SIM_MODE_FISH].SSTAnomaly = {
		modifiers: {
        r: 4.2,
        bigBlobBase:1,
        bigBlobExponentThreshold: 1.3
    }
};
// -- SST -- //

ENV_DEFS.defaults.SST = {
    displayName: 'Sea surface temperature',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        if(y<0) return 0;
        let anom = u.field('SSTAnomaly');
        let s = seasonalSine(z);
        let w = map(cos(map(x,0,WIDTH,0,PI)),-1,1,0.83,1);
        let h0 = y/HEIGHT;
        let h1 = (sqrt(h0)+h0)/2;
        let h2 = sqrt(sqrt(h0));
        let h = map(cos(lerp(PI,0,lerp(h1,h2,sq(w)))),-1,1,0,1);
        let ospt = u.modifiers.offSeasonPolarTemp;
        let pspt = u.modifiers.peakSeasonPolarTemp;
        let ostt = u.modifiers.offSeasonTropicsTemp;
        let pstt = u.modifiers.peakSeasonTropicsTemp;
        let t = lerp(map(s,-1,1,ospt,pspt),map(s,-1,1,ostt,pstt),h);
        return t+anom;
    },
    displayFormat: v=>{
        let str = '';
        str += round(v*10)/10;
        str += '\u2103'; // degrees celsius sign
        return str;
    },
    hueMap: (v)=>{
        colorMode(HSB);
        let c;
        if(v<10) c = lerpColor(color(240,1,100),color(240,100,70),map(v,0,10,0,1));
        else if(v<20) c = lerpColor(color(240,100,70),color(180,50,90),map(v,10,20,0,1));
        else if(v<26) c = lerpColor(color(180,50,90),color(120,100,65),map(v,20,26,0,1));
        else if(v<29) c = lerpColor(color(60,100,100),color(0,100,70),map(v,26,29,0,1));
        else if(v<34) c = lerpColor(color(359,100,70),color(300,5,100),map(v,29,34,0,1));
        else if(v<40) c = lerpColor(color(300,5,100),color(150,10,90),map(v,34,40,0,1));
        else if(v<50) c = lerpColor(color(150,10,90),color(150,60,75),map(v,40,50,0,1));
        else if(v<75) c = lerpColor(color(30,90,90),color(30,30,90),map(v,50,75,0,1));
        else if(v<150) c = lerpColor(color(0,0,35),color(0,0,95),map(v,75,150,0,1));
        else c = lerpColor(color(0,0,25),color(0,0,95),map(v%150,0,150,0,1));
        colorMode(RGB);
        return c;
    },
    oceanic: true,
    modifiers: {
        offSeasonPolarTemp: 0,
        peakSeasonPolarTemp: 10,
        offSeasonTropicsTemp: 28,
        peakSeasonTropicsTemp: 34
    }
};
ENV_DEFS[SIM_MODE_2005].SST = {
    modifiers: {
        offSeasonPolarTemp: -3,
        peakSeasonPolarTemp:0,
        offSeasonTropicsTemp: 20,
        peakSeasonTropicsTemp: 27.5
    }
};
ENV_DEFS[SIM_MODE_2020].SST = {
    modifiers: {
        offSeasonPolarTemp: -5,
        peakSeasonPolarTemp:11,
        offSeasonTropicsTemp: 24,
        peakSeasonTropicsTemp: 27.6
    }
};
ENV_DEFS[SIM_MODE_NORMAL].SST = {
		modifiers: {
        offSeasonPolarTemp: 5,
        peakSeasonPolarTemp: 15,
        offSeasonTropicsTemp: 24,
        peakSeasonTropicsTemp: 29.5
    }
};
ENV_DEFS[SIM_MODE_HYPER].SST = {
    modifiers: {
        offSeasonPolarTemp: 15,
        peakSeasonPolarTemp: 25,
        offSeasonTropicsTemp: 30,
        peakSeasonTropicsTemp: 50
    }
};
ENV_DEFS[SIM_MODE_WILD].SST = {
    mapFunc: (u,x,y,z)=>{
        if(y<0) return 0;
        let anom = u.field('SSTAnomaly');
        let s = u.yearfrac(z);
        let t = u.piecewise(s,[[130,57],[87,94.5],[45,84],[55,86.5],[235,57],[22,120],[66.75,41],[77,280],[99,67],[100,260],[110,78]]);
        return t+anom;
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].SST = {
    modifiers: {
        offSeasonPolarTemp: 10,
        peakSeasonPolarTemp: 30,
        offSeasonTropicsTemp: 60,
        peakSeasonTropicsTemp: 80
    }
};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: 400,
        peakSeasonPolarTemp: -150,
        offSeasonTropicsTemp: -250,
        peakSeasonTropicsTemp: 250
    }
};
ENV_DEFS[SIM_MODE_WPAC].SST = {
	mapFunc: (u,x,y,z)=>{
        if(y<0) return 0;
        let anom = u.field('SSTAnomaly');
        let s = seasonalSine(z);
        let w = map(cos(map(x,0,WIDTH,0,PI)),-0.8125,0.8125,0.8125,0.8125);
        let h0 = y/HEIGHT;
        let h1 = (sqrt(h0)+h0)/2;
        let h2 = sqrt(sqrt(h0));
        let h = map(cos(lerp(PI,0,lerp(h1,h2,sq(w)))),-1,1,0,1);
        let ospt = u.modifiers.offSeasonPolarTemp;
        let pspt = u.modifiers.peakSeasonPolarTemp;
        let ostt = u.modifiers.offSeasonTropicsTemp;
        let pstt = u.modifiers.peakSeasonTropicsTemp;
        let t = lerp(map(s,-1,1,ospt,pspt),map(s,-1,1,ostt,pstt),h);
        return t+anom;
    },
    modifiers: {
        peakSeasonPolarTemp: 4,
        offSeasonPolarTemp: -3,
        offSeasonTropicsTemp: 26.5,
        peakSeasonTropicsTemp: 29.6
    }
};       
ENV_DEFS[SIM_MODE_EXTREME].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: 500,
        peakSeasonPolarTemp: -500,
        offSeasonTropicsTemp: -200,
        peakSeasonTropicsTemp: 400
    }
};
ENV_DEFS[SIM_MODE_HOT].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: 500,
        peakSeasonPolarTemp: 500,
        offSeasonTropicsTemp: 700,
        peakSeasonTropicsTemp: 700
    }
};
ENV_DEFS[SIM_MODE_FUTURE].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: 500,
        peakSeasonPolarTemp: 500,
        offSeasonTropicsTemp: 700,
        peakSeasonTropicsTemp: 700
    }
};
ENV_DEFS[SIM_MODE_MYSTERY].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: Math.floor(Math.random() * 100) + 10,
        peakSeasonPolarTemp: Math.floor(Math.random() * 100) + 10,
        offSeasonTropicsTemp: Math.floor(Math.random() * 100) + 10,
        peakSeasonTropicsTemp: Math.floor(Math.random() * 100) + 10
    }
};
ENV_DEFS[SIM_MODE_MISEO].SST={
	mapFunc: (u,x,y,z)=>{
				if(y<0) return 0;
				let s = seasonalSine(z);
				let h0 = y/HEIGHT;
				let h1 = (sqrt(h0)+h0)/2;
				let h2 = sqrt(sqrt(h0));
				let w = map(cos(map(x,0,WIDTH,0,PI)),-0.8125,0.8125,0.8125,0.8125);
				let anom = u.field('SSTAnomaly');
				let h = map(cos(lerp(PI,0,lerp(h1,h2,sq(w)))),-1,1,0,1);
				
        
				let ospt = u.modifiers.offSeasonPolarTemp;
        let pspt = u.modifiers.peakSeasonPolarTemp;
        let ostt = u.modifiers.offSeasonTropicsTemp;
        let pstt = u.modifiers.peakSeasonTropicsTemp;
        let d = Math.hypot(x - u.modifiers.blobX, y - u.modifiers.blobY);
				let t = lerp(map(s, -1, 1, ospt, pspt), map(s, -1, 1, ostt, pstt), h);
				if(d <= u.modifiers.blobR)
					t += map(d, u.modifiers.blobR, 0, 0, u.modifiers.blobAmt);
				return t + anom;
				
    },
    modifiers: {
        peakSeasonPolarTemp: 10,
        offSeasonPolarTemp: -3,
        offSeasonTropicsTemp: 29,
        peakSeasonTropicsTemp: 25,
				blobX: 150,
				blobY: 150,
				blobR: 100,
				blobAmt: 5
    }
}
ENV_DEFS[SIM_MODE_SUPERACTIVE].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: 500,
        peakSeasonPolarTemp: 500,
        offSeasonTropicsTemp: 700,
        peakSeasonTropicsTemp: 700
    }
};
ENV_DEFS[SIM_MODE_FISH].SST = {
    modifiers: {
        offSeasonPolarTemp: 4,
        peakSeasonPolarTemp:16,
        offSeasonTropicsTemp: 24,
        peakSeasonTropicsTemp: 27.8
    }
};
// -- moisture -- //

ENV_DEFS.defaults.moisture = {
    displayName: 'Relative humidity',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0);
        v = v*1.08;
        let s = seasonalSine(z);
        let l = land.get(x,u.basin.hemY(y));
        let pm = u.modifiers.polarMoisture;
        let tm = u.modifiers.tropicalMoisture;
        let mm = u.modifiers.mountainMoisture;
        let m = map(l,0.5,0.7,map(y,0,HEIGHT,pm,tm),mm,true);
        m += map(s,-1,1,-0.08,0.08);
        m += map(v,0,1,-0.3,0.3);
        m = constrain(m,0,1);
        return m;
    },
    displayFormat: v=>{
        return round(v*1000)/10 + '%';
    },
    hueMap: v=>{
        colorMode(HSB);
        let c;
        if(v<0.5) c = lerpColor(color(45,100,30),color(45,1,90),map(v,0,0.5,0,1));
        else c = lerpColor(color(180,1,90),color(180,100,30),map(v,0.5,1,0,1));
        colorMode(RGB);
        return c;
    },
    modifiers: {
        polarMoisture: 0.68,
        tropicalMoisture: 0.88,
        mountainMoisture: 0.56
    },
    noiseChannels: [
        [4,0.5,120,120,0.3,2]
    ]
};
ENV_DEFS[SIM_MODE_2005].moisture = {};
ENV_DEFS[SIM_MODE_2020].moisture = {};
ENV_DEFS[SIM_MODE_NORMAL].moisture = {
		modifiers: {
        polarMoisture: 0.99,
        tropicalMoisture: 0.99,
        mountainMoisture: 0.99
    }
};
ENV_DEFS[SIM_MODE_HYPER].moisture = {
    modifiers: {
        polarMoisture: 0.99,
        tropicalMoisture: 0.99,
        mountainMoisture: 0.99
    }
};
ENV_DEFS[SIM_MODE_WILD].moisture = {
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0);
        let s = u.yearfrac(z);
        let l = land.get(x,u.basin.hemY(y));
        let om = u.piecewise(s,[
            [0.5,0.35],[2,0.55],[4,0.6],[5.75,0.58],[6,0.1],[7,0.2],[7.25,0.6],[8.5,0.72],[10,0.55],[11.5,0.35]
        ]);
        let mm = u.modifiers.mountainMoisture;
        let m = map(l,0.5,0.7,om,mm,true);
        m += map(v,0,1,-0.3,0.3);
        m = constrain(m,0,1);
        return m;
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].moisture = {};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].moisture = {};
ENV_DEFS[SIM_MODE_WPAC].moisture = {
    modifiers: {
        polarMoisture: 0.45,
        tropicalMoisture: 0.77,
        mountainMoisture: 0
    }
};    
ENV_DEFS[SIM_MODE_EXTREME].moisture = {};
ENV_DEFS[SIM_MODE_HOT].moisture = {
    modifiers: {
        polarMoisture: 0.99,
        tropicalMoisture: 0.99,
        mountainMoisture: 0.99
    }
};
ENV_DEFS[SIM_MODE_FUTURE].moisture = {
    modifiers: {
        polarMoisture: 0.99,
        tropicalMoisture: 0.99,
        mountainMoisture: 0.99
    }
};
var moisturePolar = Math.floor(Math.random() * 90) + 10
var moistureTropical = Math.floor(Math.random() * 90) + 10
var moistureMountain = Math.floor(Math.random() * 90) + 10
ENV_DEFS[SIM_MODE_MYSTERY].moisture = {
    modifiers: {
        polarMoisture: moisturePolar,
        tropicalMoisture: moistureTropical,
        mountainMoisture: moistureMountain
    },
};
ENV_DEFS[SIM_MODE_MISEO].moisture = {};
ENV_DEFS[SIM_MODE_SUPERACTIVE].moisture = {
    modifiers: {
        polarMoisture: 0.99,
        tropicalMoisture: 0.99,
        mountainMoisture: 0.99
    }
};
ENV_DEFS[SIM_MODE_FISH].moisture = {};
// ---- Active Storm System Algorithm ---- //

const STORM_ALGORITHM = {};

STORM_ALGORITHM.defaults = {};
STORM_ALGORITHM[SIM_MODE_2005] = {};  
STORM_ALGORITHM[SIM_MODE_2020] = {};  
STORM_ALGORITHM[SIM_MODE_NORMAL] = {};
STORM_ALGORITHM[SIM_MODE_HYPER] = {};
STORM_ALGORITHM[SIM_MODE_WILD] = {};
STORM_ALGORITHM[SIM_MODE_MEGABLOBS] = {};
STORM_ALGORITHM[SIM_MODE_EXPERIMENTAL] = {};
STORM_ALGORITHM[SIM_MODE_WPAC] = {};    
STORM_ALGORITHM[SIM_MODE_EXTREME] = {};  
STORM_ALGORITHM[SIM_MODE_HOT] = {};
STORM_ALGORITHM[SIM_MODE_FUTURE] = {};    
STORM_ALGORITHM[SIM_MODE_MYSTERY] = {};  
STORM_ALGORITHM[SIM_MODE_MISEO] = {};
STORM_ALGORITHM[SIM_MODE_SUPERACTIVE] = {};   
STORM_ALGORITHM[SIM_MODE_FISH] = {};   
// -- Steering -- //

STORM_ALGORITHM.defaults.steering = function(sys,vec,u){
    let ll = u.f("LLSteering");
    let ul = u.f("ULSteering");
    let d = sqrt(sys.depth)+0.17;
    let x = lerp(ll.x,ul.x,d);       // Deeper systems follow upper-level steering more and lower-level steering less
    let y = lerp(ll.y,ul.y,d);
    vec.set(x,y);
};

// -- Core -- //

STORM_ALGORITHM.defaults.core = function(sys,u){
    let SST = u.f("SST");
    let jet = u.f("jetstream");
    jet = sys.basin.hemY(sys.pos.y)-jet;
    let lnd = u.land();
    let moisture = u.f("moisture");
    let shear = u.f("shear").mag()+sys.interaction.shear;
    
    let targetWarmCore = (lnd ?
        sys.lowerWarmCore :
        max(pow(map(SST,10,25,0,1,true),3),sys.lowerWarmCore)
    )*map(jet,0,75,sq(1-sys.depth),1,true);
    sys.lowerWarmCore = lerp(sys.lowerWarmCore,targetWarmCore,sys.lowerWarmCore>targetWarmCore ? map(jet,0,75,0.4,0.06,true) : 0.04);
    sys.upperWarmCore = lerp(sys.upperWarmCore,sys.lowerWarmCore,sys.lowerWarmCore>sys.upperWarmCore ? 0.05 : 0.4);
    sys.lowerWarmCore = constrain(sys.lowerWarmCore,0,1);
    sys.upperWarmCore = constrain(sys.upperWarmCore,0,1);
    let tropicalness = constrain(map(sys.lowerWarmCore,0.5,1,0,1),0,sys.upperWarmCore);
    let nontropicalness = constrain(map(sys.lowerWarmCore,0.75,0,0,1),0,1);

    sys.organization *= 100;
    if(!lnd) sys.organization += sq(map(SST,20,29,0,1,true))*3*tropicalness;
    if(!lnd && sys.organization<40) sys.organization += lerp(0,3,nontropicalness);
    // if(lnd) sys.organization -= pow(10,map(lnd,0.5,1,-3,1));
    // if(lnd && sys.organization<70 && moisture>0.3) sys.organization += pow(5,map(moisture,0.3,0.5,-1,1,true))*tropicalness;
    sys.organization -= pow(2,4-((HEIGHT-sys.basin.hemY(sys.pos.y))/(HEIGHT*0.01)));
    sys.organization -= (pow(map(sys.depth,0,1,1.17,1.31),shear)-1)*map(sys.depth,0,1,4.7,1.2);
    sys.organization -= map(moisture,0,0.65,3,0,true)*shear;
    sys.organization += sq(map(moisture,0.6,1,0,1,true))*4;
    sys.organization -= pow(1.3,20-SST)*tropicalness;
    sys.organization = constrain(sys.organization,0,100);
    sys.organization /= 100;

    let targetPressure = 1010-25*log((lnd||SST<25)?1:map(SST,25,30,1,2))/log(1.17);
    targetPressure = lerp(1010,targetPressure,pow(sys.organization,3));
    sys.pressure = lerp(sys.pressure,targetPressure,(sys.pressure>targetPressure?0.05:0.08)*tropicalness);
    sys.pressure -= random(-3,3.5)*nontropicalness;
    if(sys.organization<0.3) sys.pressure += random(-2,2.5)*tropicalness;
    sys.pressure += random(constrain(970-sys.pressure,0,40))*nontropicalness;
    sys.pressure += 0.5*sys.interaction.shear/(1+map(sys.lowerWarmCore,0,1,4,0));
    sys.pressure += map(jet,0,75,5*pow(1-sys.depth,4),0,true);

    let targetWind = map(sys.pressure,1030,900,1,160)*map(sys.lowerWarmCore,1,0,1,0.6);
    sys.windSpeed = lerp(sys.windSpeed,targetWind,0.15);

    let targetDepth = map(
        sys.upperWarmCore,
        0,1,
        1,map(
            sys.organization,
            0,1,
            sys.depth*pow(0.95,shear),max(map(sys.pressure,1010,950,0,0.7,true),sys.depth)
        )
    );
    sys.depth = lerp(sys.depth,targetDepth,0.05);

    if(sys.pressure > 1030)
        sys.kill = true;
};

STORM_ALGORITHM[SIM_MODE_EXPERIMENTAL].core = function(sys,u){
    let SST = u.f("SST");
    let jet = u.f("jetstream");
    jet = sys.basin.hemY(sys.pos.y)-jet;
    let lnd = u.land();
    let moisture = u.f("moisture");
    let shear = u.f("shear").mag()+sys.interaction.shear;
    
    sys.lowerWarmCore = lerp(sys.lowerWarmCore,0,map(jet,0,75,0.07,0));
    sys.lowerWarmCore = lerp(sys.lowerWarmCore,1,map(jet,50,100,0,map(SST,16,26,0,0.13,true),true));
    if(sys.upperWarmCore > sys.lowerWarmCore)
        sys.upperWarmCore = sys.lowerWarmCore;
    else
        sys.upperWarmCore = lerp(sys.upperWarmCore,sys.lowerWarmCore,0.015);
    sys.lowerWarmCore = constrain(sys.lowerWarmCore,0,1);
    sys.upperWarmCore = constrain(sys.upperWarmCore,0,1);
    let tropicalness = (sys.lowerWarmCore+sys.upperWarmCore)/2;

    if(!lnd)
        sys.organization = lerp(sys.organization,1,sq(tropicalness)*map(SST,21,31,0,0.05,true));
    sys.organization = lerp(sys.organization,0,pow(3,shear*(1-moisture)*2.3)*0.0005);
    if(lnd>0.7)
        sys.organization = lerp(sys.organization,0,0.03);
    sys.organization = constrain(sys.organization,0,1);

    let hardCeiling = map(SST,21,31,1015,880);
    if(lnd)
        hardCeiling = 990;
    let softCeiling = map(sys.organization,0.93,0.98,lerp(1020,hardCeiling,0.7),hardCeiling,true);
    sys.pressure = lerp(sys.pressure,1032,0.006);
    sys.pressure = lerp(sys.pressure,980,(1-tropicalness)*map(jet,0,75,0.025,0,true));
    sys.pressure = lerp(sys.pressure,softCeiling,tropicalness*sys.organization*0.03);
    if(sys.pressure<1000)
        sys.pressure = lerp(sys.pressure,1000,tropicalness*(1-sys.organization)*0.01);
    sys.pressure = lerp(sys.pressure,1040,map(sys.pos.y,HEIGHT*0.97,HEIGHT,0,0.15,true));
    sys.pressure = lerp(sys.pressure,1040,map(lnd,0.8,0.93,0,0.2,true));
    sys.pressure += random(-1,1);

    let targetWind = map(sys.pressure,1030,900,1,160)*map(sys.lowerWarmCore,1,0,1,0.6);
    sys.windSpeed = lerp(sys.windSpeed,targetWind,0.15);

    sys.depth = lerp(sys.depth,1,(1-tropicalness)*0.02);
    sys.depth = lerp(sys.depth,0,tropicalness*(1-sys.organization)*0.02);
    sys.depth = lerp(sys.depth,lnd ? 0.5 : map(SST,26,29,0.5,0.65,true),tropicalness*sys.organization*0.025);

    if(sys.kaboom > 0 && sys.kaboom < 1)
        sys.kaboom = random()<sys.kaboom ? 1 : 0;

    let namedBoom = false;
    if(sys.fetchStorm()){
        let d = sys.fetchStorm().designations.primary;
        for(let i = 0; i < d.length; i++){
            if(d[i].value === 'Boom'){
                namedBoom = true;
                sys.kaboom = 2;
            }
        }
    }

    if(sys.kaboom){
        if((!lnd || namedBoom) && (sys.organization > 0.8 || sys.kaboom === 2)){
            sys.kaboom = 2;
            if(sys.pressure > 600)
                sys.pressure -= random(5,10);
            sys.organization = 1;
            sys.lowerWarmCore = 1;
            if(sys.upperWarmCore < 0.5)
                sys.upperWarmCore = 0.5;
            sys.depth = 0.8;
        }

        if(lnd && !namedBoom){
            if(sys.kaboom === 2)
                sys.kaboom = 1;
            sys.organization = 0;
        }
    }else if(random()<0.0001)
        sys.kaboom = 1;

    if(sys.pressure > 1030)
        sys.kill = true;
};

// -- Type Determination -- //

STORM_ALGORITHM.defaults.typeDetermination = function(sys,u){
    switch(sys.type){
        case TROP:
            sys.type = sys.lowerWarmCore<0.55 ? EXTROP : ((sys.organization<0.4 && sys.windSpeed<50) || sys.windSpeed<20) ? sys.upperWarmCore<0.56 ? EXTROP : TROPWAVE : sys.upperWarmCore<0.56 ? SUBTROP : TROP;
            break;
        case SUBTROP:
            sys.type = sys.lowerWarmCore<0.55 ? EXTROP : ((sys.organization<0.4 && sys.windSpeed<50) || sys.windSpeed<20) ? sys.upperWarmCore<0.57 ? EXTROP : TROPWAVE : sys.upperWarmCore<0.57 ? SUBTROP : TROP;
            break;
        case TROPWAVE:
            sys.type = sys.lowerWarmCore<0.55 ? EXTROP : (sys.organization<0.45 || sys.windSpeed<25) ? sys.upperWarmCore<0.56 ? EXTROP : TROPWAVE : sys.upperWarmCore<0.56 ? SUBTROP : TROP;
            break;
        default:
            sys.type = sys.lowerWarmCore<0.6 ? EXTROP : (sys.organization<0.45 || sys.windSpeed<25) ? sys.upperWarmCore<0.57 ? EXTROP : TROPWAVE : sys.upperWarmCore<0.57 ? SUBTROP : TROP;
    }
};

// -- Version -- //
// Version number of a simulation mode's storm algorithm
// Used for upgrading the active attribute values if needed
STORM_ALGORITHM[SIM_MODE_2020].version = 0;
STORM_ALGORITHM[SIM_MODE_NORMAL].version = 0;
STORM_ALGORITHM[SIM_MODE_HYPER].version = 0;
STORM_ALGORITHM[SIM_MODE_WILD].version = 0;
STORM_ALGORITHM[SIM_MODE_MEGABLOBS].version = 0;
STORM_ALGORITHM[SIM_MODE_EXPERIMENTAL].version = 1;
STORM_ALGORITHM[SIM_MODE_WPAC].version = 0;    
STORM_ALGORITHM[SIM_MODE_EXTREME].version = 0;  
STORM_ALGORITHM[SIM_MODE_HOT].version = 0;  
STORM_ALGORITHM[SIM_MODE_FUTURE].version = 0;
STORM_ALGORITHM[SIM_MODE_MYSTERY].version = 0;
STORM_ALGORITHM[SIM_MODE_MISEO].version = 0;
STORM_ALGORITHM[SIM_MODE_SUPERACTIVE].version = 0;
STORM_ALGORITHM[SIM_MODE_FISH].version = 0;
// -- Upgrade -- //
// Converts active attributes in case an active system is loaded after an algorithm change breaks old values

// STORM_ALGORITHM[SIM_MODE_NORMAL].upgrade = function(sys,data,oldVersion){

// };

// STORM_ALGORITHM[SIM_MODE_HYPER].upgrade = function(sys,data,oldVersion){

// };

// STORM_ALGORITHM[SIM_MODE_WILD].upgrade = function(sys,data,oldVersion){

// };

// STORM_ALGORITHM[SIM_MODE_MEGABLOBS].upgrade = function(sys,data,oldVersion){

// };

STORM_ALGORITHM[SIM_MODE_EXPERIMENTAL].upgrade = function(sys,data,oldVersion){
    if(oldVersion < 1){
        sys.organization = data.organization;
        sys.lowerWarmCore = data.lowerWarmCore;
        sys.upperWarmCore = data.upperWarmCore;
        sys.depth = data.depth;
        sys.kaboom = 0;
    }
};
