export const SYSTEM_GLOBAL_ACTION = [
    {id: "WTK", name: "Wild Attack", button_name: "BRSW.WildAttack",
        skillMod: 2, dmgMod: 2, dmgOverride: "",
        selector_type: "skill", selector_value: "fighting",
        self_add_status: "Vulnerable", group: "BRSW.AttackOption"},
    {id: "DROP", name:"The Drop", button_name: "BRSW.TheDrop", skillMod: 4,
        dmgMod: 4, dmgOverride: "", selector_type: "item_type",
        selector_value: "weapon", group: "BRSW.SituationalModifiers"},
    {id: "HEAD", name:"Called Shot: Head", button_name: "BRSW.CalledHead", skillMod: -4,
        dmgMod: +4, dmgOverride: "", selector_type: "item_type",
        selector_value: "weapon", group: "BRSW.AttackOption"},
    {id:"ELAN", name:"Elan Edge", button_name:"BRSW.EdgeName-Elan", rerollSkillMod:"+2",
        selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-Elan",
        defaultChecked:"on", group: "BRSW.Edges"},
    {id:"NO_MERCY", name:"No Mercy Edge", button_name:"BRSW.EdgeName-NoMercy",
        rerollDamageMod:"+2", selector_type:"actor_has_edge",
        selector_value: "BRSW.EdgeName-NoMercy", defaultChecked:"on", group: "BRSW.Edges"},
    {id:"FRENZY", name:"Frenzy", button_name:"BRSW.EdgeName-Frenzy",
        and_selector: [{selector_type: "skill", selector_value: "fighting"},
            {selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-Frenzy"}],
        defaultChecked:"on", group: "BRSW.Edges", rof: "2"},
    {id: "LightCover", name: "Light Cover", button_name: "BRSW.LightCover", skillMod: "-2",
        selector_type: "item_type", selector_value: "weapon", group: "BRSW.Cover"},
    {id: "MediumCover", name: "Medium Cover", button_name: "BRSW.MediumCover",
        skillMod: "-4", selector_type: "item_type", selector_value: "weapon", group: "BRSW.Cover"},
    {id: "HeavyCover", name: "Heavy Cover", button_name: "BRSW.HeavyCover", skillMod: "-6",
        selector_type: "item_type", selector_value: "weapon", group: "BRSW.Cover"},
    {id: "NearTotalCover", name: "Near Total Cover", button_name: "BRSW.NearTotalCover",
        skillMod: "-8", selector_type: "item_type", selector_value: "weapon", group: "BRSW.Cover"},
    {id: "Dim", name: "Dim", button_name: "BRSW.IlluminationDim", skillMod: "-2", selector_type: "all", group: "BRSW.Illumination"},
    {id: "Dark", name: "Dark", button_name: "BRSW.IlluminationDark", skillMod: "-4", selector_type: "all", group: "BRSW.Illumination"},
    {id: "Pitch", name: "Pitch Dark", button_name: "BRSW.IlluminationPitch", skillMod: "-6", selector_type: "all", group: "BRSW.Illumination"},
    {id: "UNSTABLEPLATFORM", name: "Unstable Platform", button_name: "BRSW.UnstablePlatform", "skillMod": "-2", and_selector:[{
        or_selector:[{"selector_type":"skill","selector_value":"Shooting"}, {"selector_type":"skill","selector_value":"Athletics"}]},
        {not_selector:[{selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Steady-Hands"}]}],
        "group": "BRSW.SituationalModifiers"},
    {id:"MARKSMAN", name:"Marksman", button_name: "BRSW.EdgeName-Marksman", "skillMod": "+1", and_selector:[
        {selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Marksman"},
        {selector_type:"skill", selector_value:"BRSW.Shooting"}], group: "BRSW.Edges"},
    {id:"ALERTNESS", name:"Alertness", button_name:"BRSW.EdgeName-Alertness", skillMod: "+2", and_selector:[
        {selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Alertness"},
        {selector_type:"skill", selector_value:"Notice"}], "defaultChecked":"on", "group": "BRSW.Edges"},
    {id:"MRFIXIT", name:"Mr Fix It", button_name:"BRSW.EdgeName-MrFixIt", skillMod: "+2", and_selector:[
        {selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-MrFixIt"},
        {selector_type:"skill", selector_value:"Repair"}], defaultChecked:"on", group: "BRSW.Edges"},
    {id: "UNARMEDDEFENDER", name: "Unarmed Defender", button_name: "BRSW.UnarmedDefender", skillMod: "+2",
        selector_type: "skill", selector_value: "Fighting", group: "BRSW.SituationalModifiers"},
    {id: "TOUCHATTACK", name: "Touch Attack", button_name: "BRSW.TouchAttack", skillMod: "+2", dmgOverride: "0",
        selector_type: "skill", selector_value: "Fighting", group: "BRSW.SituationalModifiers"},
    {id: "NONLETHALDAMAGE", name: "Nonlethal Damage", button_name: "BRSW.NonlethalDamage", skillMod: "-1",
        selector_type: "skill", selector_value: "Fighting", group: "BRSW.SituationalModifiers"},
    {id:"RAN", name:"Ran", button_name:"BRSW.Ran", skillMod:"-2",
        not_selector:[{selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Steady-Hands"}],
        group:"BRSW.Multi-action"},
    {id:"RANSTEADY", name:"Ran-Steady", button_name:"BRSW.Ran", skillMod:"-1", and_selector:[
        {selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Steady-Hands"}, {selector_type:"all"}],
        "group":"BRSW.Multi-action"},
    {id:"2ACTIONS", name:"2 actions",button_name:"BRSW.Two-actions", skillMod:"-2",selector_type:"all",
        group:"BRSW.Multi-action"},
    {id:"3ACTIONS", name:"3 actions",button_name:"BRSW.Three-actions", skillMod:"-4",selector_type:"all",
        group:"BRSW.Multi-action"}

]
