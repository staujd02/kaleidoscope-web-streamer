const SourceList: Array<Source> = [
    {
        source: "https://earth.nullschool.net/#current/particulates/surface/level/overlay=pm10/stereographic=-89.52,26.53,757/loc=-92.818,-73.479",
        title: "Map displaying particulates dispersion"
    },
    {
        source: "https://earth.nullschool.net/#current/ocean/surface/currents/overlay=currents/stereographic=-89.52,26.53,757/loc=-92.818,-73.479",
        title: "A map of the ocean currents"
    },
].concat(chemistryOverlays()).concat(windOverlays());

function windOverlays(): Array<Source> {
    let sources = [] as Array<Source>;
    ["1000hPa", "850hPa", "700hPa", "500hPa", "250hPa", "10hPa"].forEach((pressure: string) => {
        sources.push({
            source: `https://earth.nullschool.net/#current/wind/isobaric/${pressure}/stereographic=-89.52,26.53,757/loc=-92.818,-73.479`,
            title: `A map of wind patterns at ${pressure} pressure`
        });
    });
    return sources;
}

function chemistryOverlays(): Array<Source> {
    let sources = [] as Array<Source>;
    ["cosc", "co2sc", "so2smass"].forEach((chemical: string) => {
        sources.push({
            source: `https://earth.nullschool.net/#current/chem/surface/level/overlay=${chemical}/stereographic=-89.52,26.53,757/loc=-92.818,-73.479`,
            title: `A map of ${chemical} dispertions`
        });
    });
    return sources;
}

export default SourceList;