// Marker icon class
var MarkerIcon = L.Icon.extend({
    options: {
        iconSize: [54, 54],
        popupAnchor: [-3, -3]
    }
});

L.icon = function (options) {
    return new L.Icon(options);
};


// Initialize map
var map = L.map("mapid", {
    center: [43.076416, -89.406823],
    zoom: 15
});

L.tileLayer("https://api.mapbox.com/styles/v1/heong/ciwmkqvbw002z2qnxiywzsgte/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVvbmciLCJhIjoiY2lneWlmaHJnMHZxbDY1bTB3MGx5M3NuciJ9.vsh6zu149YxMB7vlbRWF5w", {
    attribution: "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='http://mapbox.com'>Mapbox</a>",
    minZoom: 0,
    maxZoom: 22,
    id: "heong.3d65f02e",
    accessToken: "pk.eyJ1IjoiaGVvbmciLCJhIjoiY2lneWlmaHJnMHZxbDY1bTB3MGx5M3NuciJ9.vsh6zu149YxMB7vlbRWF5w"
}).addTo(map);


/**
* Initialize sidebar
**/
var sidebar = L.control.sidebar("sidebar", {
    position: "left"
});

map.addControl(sidebar);

// Show sidebar after timeout
setTimeout(function () {
    sidebar.show();
}, 500);

var sidebarContent = "<br>" +
    "<center><a href='http://sustainability.wisc.edu/' target='_blank'><img id='logo' src='img/sustainability-map/sustainabilitylogo.png' alt='Office of Sustianiblity logo' height='200px' width='330px'></a></center>" +
    "<br>" +
    "<br>" +
    "<h2>“The University of Wisconsin–Madison will be a living model for sustainability, exemplifying values and actions that demonstrate our commitment to stewardship of resources, respect for place and the health and well–being of the broader community, now and for the future.”</h2>" +
    "<p>— Sustainability Initiative Task Force Final Report, 2010</p>"+
    "<br>" +
    "<p> Let's take a visual sustainability tour around the campus!</p>"+
    "<br>" +
    "<div>" +
        "<ul class='list-group checked-list-box'>" +
            // Physcial environment
            "<i class='nav-header'>Physical Environment</i>" +
            "<li id='LEED' class='list-group-item'> <img src='img/sustainability-map/leedcertified.png' alt='LEED Certified Building' height='36px' width='36px' position='right'>LEED Certified Building</li>" +
            "<li id='HVAC' class='list-group-item'> <img src='img/sustainability-map/HVAC.png' alt='HVAC Upgraded Building' height='36px' width='36px' position='right'>HVAC Upgraded Building</li>" +
            "<li id='roofGarden' class='list-group-item'> <img src='img/sustainability-map/roofgarden.png' alt='Green Roof' height='36px' width='36px' position='right'>Green Roof</li>" +
            "<li id='gardenPlot' class='list-group-item'> <img src='img/sustainability-map/gardenplot.png' alt='Garden Plots' height='36px' width='36px' position='right'>Garden Plots</li>" +

            // Transportation
            "<br >" +
            "<i class='nav-header'>Transportation</i>" +
            "<li id='biking' class='list-group-item'> <img src='img/sustainability-map/bcycle.png' alt='bcycle' height='36px' width='36px' position='right'>Bcycle </li>" +
            "<li id='bikeLocker' class='list-group-item'><img src='img/sustainability-map/bikelocker.png' alt='bikelocker' height='36px' width='36px' position='right'>Bike locker</li>" +
            "<li id='bikeCage' class='list-group-item'><img src='img/sustainability-map/bikecage.png' alt='bikecage' height='36px' width='36px' position='right'>Bike cage</li>" +
            "<li id='bikeRepair' class='list-group-item'><img src='img/sustainability-map/bikeresource.png' alt='university bike resource center' height='36px' width='36px' position='right'>University bike and repair center</li>" +

            // Waste management
            "<br >" +
            "<i class='nav-header'>Waste Management</i>" +
            "<li id='composting' class='list-group-item'> <img src='img/sustainability-map/compost.png' alt='Composting' height='36px' width='36px' position='right'>Composting</li>" +
            "<li id='recycleClothes' class='list-group-item'><img src='img/sustainability-map/recycleclothes.png' alt='Clothes and Shoes Donation' height='36px' width='36px' position='right'>Clothes and Shoes Donation</li>" +
            "<li id='eWaste' class='list-group-item'><img src='img/sustainability-map/recycleelectronic.png' alt='Electronic Waste Recycling' height='36px' width='36px' position='right'>Electronic Waste Recycling</li>" +
            "<li id='styrofoam' class='list-group-item'><img src='img/sustainability-map/styrofoam.png' alt='Styrofoam Reuse and Recycling' height='36px' width='36px' position='right'>Styrofoam Reuse and Recycling</li>" +
            "<li id='swap' class='list-group-item'><img src='img/sustainability-map/swap.png' alt='SWAP' height='36px' width='36px' position='right'>SWAP</li>" +
            "<li id='weTrade' class='list-group-item'><img src='img/sustainability-map/wetrade.png' alt='We-trade' height='36px' width='36px' position='right'>We-trade</li>" +
            "<li id='disposal' class='list-group-item'><img src='img/sustainability-map/chemical.png' alt='Disposal Serves (EHS)' height='36px' width='36px' position='right'>Disposal Serves (EHS)</li>" +
            "<li id='recyclopedia' class='list-group-item'><img src='img/sustainability-map/recyclopedia.png' alt='Recyclopedia (EHS)' height='36px' width='36px' position='right'>Recyclopedia (EHS)</li>" +

            // Education
            "<br >" +
            "<i class='nav-header'>Education</i>" +
            "<li id='education' class='list-group-item'><img src='img/sustainability-map/education.png' alt='Education' height='36px' width='36px' position='right'>Education</li>" +
        "</ul>" +
        "<p>Credits: Icon is modified from the <a href='https://thenounproject.com/' target='_blank'>Noun Project</a></p>" +
        "<p>Created by <a href='https://tengheong.wordpress.com/' target='_blank'>Teng Heong Ng</a></p>" +
    "</div>";
sidebar.setContent(sidebarContent);


/**
* Physical Environment
*/

// LEED buildings
var goldLEEDIcon = new MarkerIcon({iconUrl: "img/sustainability-map/leedgold.png"}),
    silverLEEDIcon = new MarkerIcon({iconUrl: "img/sustainability-map/leedsilver.png"}),
    platinumLEEDIcon = new MarkerIcon({iconUrl: "img/sustainability-map/leedplatinum.png"});

var LEED1 = L.marker([43.071198, -89.411066], {icon: silverLEEDIcon}).bindPopup("LEED Silver Certified: Student Athlete Performance Center" + "<br>" + "<img src='img/sustainability-map/camprandall.jpg' height='200px' width='250px'>" + "<br>" + "<a href='http://www.cpd.fpm.wisc.edu/Student-Athlete-Performance-Center.htm' target='_blank' >More Details</a>"),
    LEED2 = L.marker([43.069355, -89.397740], {icon: silverLEEDIcon}).bindPopup("LEED Silver Certified: LaBahn Arena" + "<br>" + "<img src='img/sustainability-map/LaBahn.jpg' height='200px' width='250px'>" + "<br>" + "<a href='http://www.cpd.fpm.wisc.edu/LaBahn-Arena.htm' target='_blank' >More Details</a>"),
    LEED3 = L.marker([43.078286, -89.431595], {icon: silverLEEDIcon}).bindPopup(" Tracking LEED Silver Certified: Wisconsin Institutes for Medical Research Phase II" + "<br>" + "<img src='img/sustainability-map/WIMR.jpg' height='200px' width='250px'>" + "<br>" + "<a href='' target='_blank' >More Details</a>"),
    LEED4 = L.marker([43.075632, -89.433078], {icon: goldLEEDIcon}).bindPopup("LEED Gold Certified: UW Medical Foundation Centennial Building" + "<br>" + "<img src='img/sustainability-map/uwmedical.jpg' height='200px' width='250px'>" + "<br>" + "<a href='http://www.cpd.fpm.wisc.edu/UW-Medical-Foundation-Centennial-Building.htm' target='_blank' >More Details</a>"),
    LEED5 = L.marker([43.073078, -89.407884], {icon: goldLEEDIcon}).bindPopup("LEED Gold Certified: Wisconsin Institutes for Discovery" + "<br>" + "<img src='img/sustainability-map/WID.jpg' height='200px' width='250px'>" + "<br>" + "<a href='http://www.cpd.fpm.wisc.edu/Wisconsin-Institutes-for-Discovery.htm' target='_blank' >More Details</a>"
    ),
    LEED6 = L.marker([43.071999, -89.407822], {icon: goldLEEDIcon}).bindPopup("LEED Gold Certified: Union South" + "<br>" + "<img src='img/sustainability-map/unionsouth.jpg' height='200px' width='250px'>" + "<br>" + "<a href='http://www.cpd.fpm.wisc.edu/Union-South.htm' target='_blank' >More Details</a>"),
    LEED7 = L.marker([43.075925, -89.408716], {icon: goldLEEDIcon}).bindPopup("LEED Gold Certified: Nancy Nicholas Hall" + "<br>" + "<img src='img/sustainability-map/nancy.jpg' height='200px' width='250px'>" + "<br>" + "<a href='http://www.cpd.fpm.wisc.edu/Nancy-Nicholas-Hall.htm' target='_blank' >More Details</a>"),
    LEED8 = L.marker([43.073932, -89.413992], {icon: goldLEEDIcon}).bindPopup("LEED Gold Certified: Wisconsin Energy Institute" + "<br>" + "<img src='img/sustainability-map/WEI.jpg' height='200px' width='250px'>" + "<br>" + "<a href='http://www.cpd.fpm.wisc.edu/Wisconsin-Energy-Institute.htm' target='_blank' >More Details</a>"),
    LEED9 = L.marker([43.077855, -89.417756], {icon: goldLEEDIcon}).bindPopup("LEED Gold Certified: Lakeshore Residence Hall" + "<br>" + "<img src='img/sustainability-map/leopold.jpg' height='200px' width='250px'>" + "<br>" + "<a href='http://www.cpd.fpm.wisc.edu/Lakeshore-Residence-Hall-Phase-II-Food-Service-Phase-II.htm' target='_blank' >More Details</a>"),
    LEED10 = L.marker([43.077607, -89.428300], {icon: silverLEEDIcon}).bindPopup("LEED Silver Certified: Signe Skott Cooper Hall" + "<br>" + "<img src='img/sustainability-map/Cooper_Hal.jpg' height='200px' width='250px'>" + "<br>" + "<a href='http://www.cpd.fpm.wisc.edu/Signe-Skott-Cooper-Hall.htm' target='_blank' >More Details</a>"),
    LEED11 = L.marker([43.075634, -89.402260], {icon: platinumLEEDIcon}).bindPopup("LEED Platinum  Certified:  Education Building" + "<br>" + "<img src='img/sustainability-map/education.jpg' height='200px' width='250px'>" + "<br>" + "<a href='http://www.cpd.fpm.wisc.edu/Education-Building.htm' target='_blank' >More Details</a>"),
    LEED = L.layerGroup([LEED1,LEED2,LEED3,LEED4,LEED5,LEED6,LEED7,LEED8,LEED9,LEED10,LEED11]);

// HVAC Upgraded Building
var hvacIcon = new MarkerIcon({iconUrl: "img/sustainability-map/HVAC.png"});

var hvac1 = L.marker([43.075979, -89.422589], {icon: hvacIcon}).bindPopup("HVAC Upgraded Building: Biotron" + "<br>" + "<a href='http://sustainability.wisc.edu/history/' target='_blank' >More Details</a>"),
    hvac2 = L.marker([43.074848, -89.411100], {icon: hvacIcon}).bindPopup("HVAC Upgraded Building: Bock labs" + "<br>" + "<a href='http://sustainability.wisc.edu/history/' target='_blank' >More Details</a>"),
    hvac3 = L.marker([43.073881, -89.409463], {icon: hvacIcon}).bindPopup("HVAC Upgraded Building: University of Wisconsin Biotechnology" + "<br>" + "<a href='http://sustainability.wisc.edu/history/' target='_blank' >More Details</a>"),
    hvac4 = L.marker([43.072656, -89.413430], {icon: hvacIcon}).bindPopup("HVAC Upgraded Building: Engineering Centers Building" + "<br>" + "<a href='http://sustainability.wisc.edu/history/' target='_blank' >More Details</a>"),
    hvac5 = L.marker([43.072523, -89.404564], {icon: hvacIcon}).bindPopup("HVAC Upgraded Building: Chemistry Building" + "<br>" + "<a href='http://sustainability.wisc.edu/history/' target='_blank' >More Details</a>"),
    hvac6 = L.marker([43.071763, -89.410302], {icon: hvacIcon}).bindPopup("HVAC Upgraded Building: Engineering Hall" + "<br>" + "<a href='http://sustainability.wisc.edu/history/' target='_blank' >More Details</a>"),
    hvac7 = L.marker([43.078449, -89.428089], {icon: hvacIcon}).bindPopup("HVAC Upgraded Building: Rennebohm Hall" + "<br>" + "<a href='http://sustainability.wisc.edu/history/' target='_blank' >More Details</a>"),
    hvac8 = L.marker([43.073987, -89.405795], {icon: hvacIcon}).bindPopup("HVAC Upgraded Building: Chamberlin Hall" + "<br>" + "<a href='http://sustainability.wisc.edu/history/' target='_blank' >More Details</a>"),
    HVAC = L.layerGroup([hvac1,hvac2,hvac3,hvac4,hvac5,hvac6,hvac7,hvac8]);

// roofGarden
var roofGardenIcon = new MarkerIcon({iconUrl: "img/sustainability-map/roofgarden.png"});

var roof1 = L.marker([43.076184, -89.397765], {icon: roofGardenIcon}).bindPopup("FH King green roof at Pyle Center" + "<br>" + "<a href='https://allencentennialgarden.org/explore_blog.php?id=53' target='_blank' >More Details</a>"),
    roof2 = L.marker([43.075749, -89.412105], {icon: roofGardenIcon}).bindPopup("Microbial Sciences Green Roofs" + "<br>" + "<a href='https://allencentennialgarden.org/explore_blog.php?id=53' target='_blank' >More Details</a>"),
    roof3 = L.marker([43.071248, -89.398557], {icon: roofGardenIcon}).bindPopup("Gordon Event Center Green Roof" + "<br>" + "<a href='https://allencentennialgarden.org/explore_blog.php?id=53' target='_blank' >More Details</a>"),
    roof4 = L.marker([43.075750, -89.402272], {icon: roofGardenIcon}).bindPopup("Education Building 3rd floor Green Roof AND Green Roof plaza" + "<br>" + "<a href='https://allencentennialgarden.org/explore_blog.php?id=53' target='_blank' >More Details</a>"),
    roof5 = L.marker([43.075706, -89.408802], {icon: roofGardenIcon}).bindPopup("Nancy Nicholas Hall Green Roofs" + "<br>" + "<a href='http://fhkingstudents.wixsite.com/fhking/rooftop-garden' target='_blank' >More Details</a>"),
    roofGarden = L.layerGroup([roof1,roof2,roof3,roof4,roof5]);

// Garden plot
var gardenIcon = new MarkerIcon({iconUrl: "img/sustainability-map/gardenplot.png"});

var garden1 = L.marker([43.087558, -89.432083], {icon: gardenIcon}).bindPopup("Eagle Heights Community Gardens" + "<br>" + "<a href='http://www.eagleheightsgardens.org/' target='_blank' >More Details</a>"),
    garden2 = L.marker([43.083008, -89.443748], {icon: gardenIcon}).bindPopup("University Community Gardens" + "<br>" + "<a href='http://www.eagleheightsgardens.org/' target='_blank' >More Details</a>"),
    garden3 = L.marker([43.076184, -89.397765], {icon: gardenIcon}).bindPopup("FH King Rooftop Garden" + "<br>" + "<a href='http://fhkingstudents.wixsite.com/fhking/rooftop-garden' target='_blank' >More Details</a>"),
    gardenPlot = L.layerGroup([garden1,garden2,garden3]);

/**
* Transportation
*/

// bcycle
var bcycleIcon = new MarkerIcon({iconUrl: "img/sustainability-map/bcycle.png"});

var bcycle1 = L.marker([43.075869, -89.433984], {icon: bcycleIcon}).bindPopup("Madison B-cycle Station – UW Children's Hospital" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_sharing.aspx' target='_blank' >More Details</a>"),
    bcycle2 = L.marker([43.076686,  -89.420300], {icon: bcycleIcon}).bindPopup("Madison B-cycle Station – Observatory Dr. @ Natatorium Gym" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_sharing.aspx' target='_blank' >More Details</a>"),
    bcycle3 = L.marker([43.072097, -89.407862], {icon: bcycleIcon}).bindPopup("Madison B-cycle Station – Union South" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_sharing.aspx' target='_blank' >More Details</a>"),
    bcycle = L.layerGroup([bcycle1,bcycle2,bcycle3]);

// bike lockers
var bikeLockerIcon = new MarkerIcon({iconUrl: "img/sustainability-map/bikelocker.png"});

var bLocker1 = L.marker([43.076897, -89.433650], {icon: bikeLockerIcon}).bindPopup("Bike locker at AFCH/Lot 63B (28 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker2 = L.marker([43.075729, -89.410291], {icon: bikeLockerIcon}).bindPopup("Bike locker at Agriculture Hall (2 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker3 = L.marker([43.074939, -89.411182], {icon: bikeLockerIcon}).bindPopup("Bike locker at Bock Labs (4 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker4 = L.marker([43.071455, -89.406719], {icon: bikeLockerIcon}).bindPopup("Bike locker at Computer Sciences (22 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker5 = L.marker([43.072870, -89.401506], {icon: bikeLockerIcon}).bindPopup("Bike locker at Grainger Hall (10 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker6 = L.marker([43.076156, -89.414003], {icon: bikeLockerIcon}).bindPopup("Bike locker at Lot 36 (1 stall, interior room in ramp)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker7 = L.marker([43.075099, -89.397766], {icon: bikeLockerIcon}).bindPopup("Bike locker at Memorial Library (4 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker8 = L.marker([43.076795, -89.405292], {icon: bikeLockerIcon}).bindPopup("Bike locker at Social Sciences (2 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker9 = L.marker([43.076356, -89.413404], {icon: bikeLockerIcon}).bindPopup("Bike locker at Steenbock Library (6 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker10 = L.marker([43.074512, -89.409404], {icon: bikeLockerIcon}).bindPopup("Bike locker at Taylor Hall (8 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker11 = L.marker([43.075530, -89.433110], {icon: bikeLockerIcon}).bindPopup("UWMF Centennial Building (2 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker12 = L.marker([43.075260,  -89.420191], {icon: bikeLockerIcon}).bindPopup("Veterinary Medicine (4 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker13 = L.marker([43.078632,  -89.433946], {icon: bikeLockerIcon}).bindPopup("Bike locker at Waisman Center (8 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bLocker14 = L.marker([43.076460, -89.426063], {icon: bikeLockerIcon}).bindPopup("Bike locker at WARF (10 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>");
var bikeLocker = L.layerGroup([bLocker1, bLocker2,bLocker3,bLocker4,bLocker5,bLocker6,bLocker7,bLocker8,bLocker9,bLocker10,bLocker11,bLocker12,bLocker13,bLocker14]);

// bike cage
var bikeCageIcon = new MarkerIcon({iconUrl: "img/sustainability-map/bikecage.png"});

var bikeCage1 = L.marker([43.075634, -89.402260], {icon: bikeCageIcon}).bindPopup("MLot 10, Education (16 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bikeCage2 = L.marker([43.075732,  -89.409525], {icon: bikeCageIcon}).bindPopup("Lot 27, Nancy Nicholas Garage (18 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bikeCage3 = L.marker([43.068457, -89.399866], {icon: bikeCageIcon}).bindPopup("Lot 29, Welcome Center (15 stalls)" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_paidparking.aspx' target='_blank' >More Details</a>"),
    bikeCage = L.layerGroup([bikeCage1, bikeCage2, bikeCage3]);

// bike repair
var bikeRepairIcon = new MarkerIcon({iconUrl: "img/sustainability-map/bikeresource.png"});

var bikeRepair1 = L.marker([43.075634, -89.402260], {icon: bikeRepairIcon}).bindPopup("University Bicycle Resource Center: Hellen C. White Hall" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair2 = L.marker([43.073737,  -89.401157], {icon: bikeRepairIcon}).bindPopup("University Bike and Repair Center: Chardborne Residence Hall" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair3 = L.marker([43.068433, -89.399941], {icon: bikeRepairIcon}).bindPopup("University Bike and Repair Center: Welcome Center and Visitor Information" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair4 = L.marker([43.071732, -89.399351], {icon: bikeRepairIcon}).bindPopup("University Bicycle Resource Center: Sellery Hall" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair5 = L.marker([43.073736,  -89.406541], {icon: bikeRepairIcon}).bindPopup("University Bike and Repair Center: Medical Science Center" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair6 = L.marker([43.075761, -89.411792], {icon: bikeRepairIcon}).bindPopup("University Bike and Repair Center: Microbial Sciences Building" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair7 = L.marker([43.078356, -89.414332], {icon: bikeRepairIcon}).bindPopup("University Bike and Repair Center: Kronshage Hall" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair8 = L.marker([43.075331,  -89.420105], {icon: bikeRepairIcon}).bindPopup("University Bike and Repair Center: Veterinary Medicine Building" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair9 = L.marker([43.076405, -89.426138], {icon: bikeRepairIcon}).bindPopup("University Bike and Repair Center: Warf Office Building" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair10 = L.marker([43.077598,  -89.430406], {icon: bikeRepairIcon}).bindPopup("University Bike and Repair Center: Health Sciences Learning Center" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair11 = L.marker([43.088495,  -89.436500], {icon: bikeRepairIcon}).bindPopup("University Bike and Repair Center: Eagle Heights Community Center" + "<br>" + "<a href='https://transportation.wisc.edu/transportation/bike_annex.aspx' target='_blank' >More Details</a>"),
    bikeRepair = L.layerGroup([bikeRepair1, bikeRepair2, bikeRepair3,bikeRepair4, bikeRepair5, bikeRepair6, bikeRepair7, bikeRepair8, bikeRepair9, bikeRepair10, bikeRepair11]);


/**
* Waste Management
*/
// Composting
var compostIcon = new MarkerIcon({iconUrl: "img/sustainability-map/compost.png"});

var compost1 = L.marker([43.079622, -89.428863], {icon: compostIcon}).bindPopup("Campus Compost Bin: Parking Lot 76" + "<br>" + "<a href='http://sustainability.wisc.edu/campus-composting/' target='_blank' >More Details</a>"),
    compost2 = L.marker([43.079763, -89.4263559], {icon: compostIcon}).bindPopup("Campus Compost Bin: Parking Lot 60" + "<br>" + "<a href='http://sustainability.wisc.edu/campus-composting/' target='_blank' >More Details</a>"),
    compost3 = L.marker([43.075929, -89.401315], {icon: compostIcon}).bindPopup("Campus Compost Bin: Parking Lot 9" + "<br>" + "<a href='http://sustainability.wisc.edu/campus-composting/' target='_blank' >More Details</a>"),
    compost4 = L.marker([43.076055, -89.420443], {icon: compostIcon}).bindPopup("Campus Compost Bin: Parking Lot 62" + "<br>" + "<a href='http://sustainability.wisc.edu/campus-composting/' target='_blank' >More Details</a>"),
    compost5 = L.marker([43.077908, -89.417741], {icon: compostIcon}).bindPopup("Dejope Dining Hall" + "<br>" + "<a href='http://sustainability.wisc.edu/campus-composting/' target='_blank' >More Details</a>"),
    compost6 = L.marker([43.071186, -89.398566], {icon: compostIcon}).bindPopup("Gordon Commons" + "<br>" + "<a href='' target='_blank' >More Details</a>"),
    compost7 = L.marker([43.073800, -89.402095], {icon: compostIcon}).bindPopup("Rhetas" + "<br>" + "<a href='http://sustainability.wisc.edu/campus-composting/' target='_blank'>More Details</a>"),
    compost8 = L.marker([43.077146, -89.411234], {icon: compostIcon}).bindPopup("Carson Gulley" + "<br>" + "<a href='http://sustainability.wisc.edu/campus-composting/' target='_blank' >More Details</a>"),
    composting = L.layerGroup([compost1,compost2,compost3,compost4,compost5,compost6,compost7,compost8]);

// Clothes Donation
var recycleClothesIcon = new MarkerIcon({iconUrl: "img/sustainability-map/recycleclothes.png"}),
    recycleShoeIcon = new MarkerIcon({iconUrl: "img/sustainability-map/shoe.png"});

var clothes1 = L.marker([43.077098, -89.419928], {icon: recycleClothesIcon}).bindPopup("UW Clothing Drop-off Site: UW Natatorium" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    clothes2 = L.marker([43.076833, -89.401450], {icon: recycleShoeIcon}).bindPopup(" Shoes Recycle: Helen C. White" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    clothes3 = L.marker([43.070407, -89.398350], {icon: recycleShoeIcon}).bindPopup("Shoes Recycle: Southeast Recreational Facility (SERF)" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),

    recycleClothes = L.layerGroup([clothes1,clothes2,clothes3]);

// Recycle Electronics
var eWasteIcon = new MarkerIcon({iconUrl: "img/sustainability-map/recycleelectronic.png"});

var eWaste1 = L.marker([43.071999, -89.407822], {icon: eWasteIcon}).bindPopup("Located below the main staircase. Acceptable Recyclables:Ink Cartridges, Batteries (any types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste2 = L.marker([43.071763, -89.410302], {icon: eWasteIcon}).bindPopup("Located in loading dock. (soon to be moved)Acceptable Recyclables: Ink Cartridges, Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste" + "<br>" + "<a href='' target='_blank' >More Details</a>"),
    eWaste3 = L.marker([43.072870, -89.401506], {icon: eWasteIcon}).bindPopup("Acceptable Recyclables: Ink Cartridges, Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste4 = L.marker([43.070407, -89.398350], {icon: eWasteIcon}).bindPopup("Located to the left upon entrance. Acceptable Recyclables: Ink Cartridges, Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste5 = L.marker([43.075910, -89.412248], {icon: eWasteIcon}).bindPopup("Acceptable Recyclables:Ink Cartridges, Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste" + "<br>" + "<a href='' target='_blank' >More Details</a>"),
    eWaste6 = L.marker([43.075403, -89.420198], {icon: eWasteIcon}).bindPopup("Located on the second floor across from the lounge. Acceptable Recyclables: Ink Cartridges, Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste7 = L.marker([43.076833, -89.401450], {icon: eWasteIcon}).bindPopup("Located outside to the left of the main entrance. Acceptable Recyclables: Ink Cartridges, Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Large E-Waste, Clothes" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste8 = L.marker([43.075634, -89.402260], {icon: eWasteIcon}).bindPopup("Located on the main floor across from the cafe. Acceptable Recyclables: Ink Cartridges, Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste9 = L.marker([43.072451, -89.398530], {icon: eWasteIcon}).bindPopup("Located to the left once you enter the first set of doors. Acceptable Recyclables: Ink Cartridges, Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste10 = L.marker([43.068433, -89.399941], {icon: eWasteIcon}).bindPopup("Located on the first floor before the elevators. Acceptable Recyclables: Ink Cartridges, Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste"),
    eWaste11 = L.marker([43.076492, -89.399774], {icon: eWasteIcon}).bindPopup("Acceptable Recyclables: Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste12 = L.marker([43.072720, -89.404678], {icon: eWasteIcon}).bindPopup("Located outside the main lecture halls on first floor. Acceptable Recyclables: Batteries (all types), Cell Phones, Media (CD's, VHS, DVD, etc.), Small E-Waste" + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste13 = L.marker([43.074335, -89.411078], {icon: eWasteIcon}).bindPopup("Located in the Biochemistry research building. Go through the main doors go straight back and take a right into a closed door area." + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste14 = L.marker([43.069004, -89.404387], {icon: eWasteIcon}).bindPopup("Located in the workshop area on the main floor next to the various item vending machines. Batteries, Eyeglasses, Printer Cartridges, and Cell phones are collected at this site." + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste15 = L.marker([43.076833, -89.401450], {icon: eWasteIcon}).bindPopup("Located on the lower main level, ground entrance, this tower is located just to the left once you enter the doors next to the UPS shipment dropoff. " + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste16 = L.marker([43.075624, -89.406904], {icon: eWasteIcon}).bindPopup("Located next to the elevator as you walk in the front doors main entrance. This location collects: Batteries, Printer cartridges, Eye Glasses, and Cell phones." + "<br>" + "<a href='http://sustainability.wisc.edu/commonly-trashed-recyclables/' target='_blank' >More Details</a>"),
    eWaste17 = L.marker([43.071732, -89.399351], {icon: eWasteIcon}).bindPopup("Located in the main lobby, the location is open for recycling the following items: printer cartridges, eye glasses, cell phones, and batteries." + "<br>" + "<a href='' target='_blank' >More Details</a>"),
    eWaste = L.layerGroup([eWaste1,eWaste2,eWaste3, eWaste4,eWaste5,eWaste6,eWaste7,eWaste8,eWaste9,eWaste10,eWaste11,eWaste12,eWaste13,eWaste14,eWaste15,eWaste16,eWaste17]);

// Recycle styrofoam
var styrofoamIcon = new MarkerIcon({iconUrl: "img/sustainability-map/styrofoam.png"});

var styrofoam1 = L.marker([43.076271, -89.415253], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Animal Science Building" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam2 = L.marker([43.075008, -89.413589], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Babcock Hall" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam3 = L.marker([43.074335, -89.411078], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Biochemistry Building" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam4 = L.marker([43.075091, -89.411089], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Bock Laboratories" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam5 = L.marker([43.072474, -89.406270], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Brogden Psychology Building" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam6 = L.marker([43.072969, -89.404937], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Chemistry Building" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam7 = L.marker([43.071728, -89.406714], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Computer Sciences and Statistics" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam8 = L.marker([43.071982, -89.410356], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Engineering Hall" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam9 = L.marker([43.073839, -89.409151], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Genetics-Biotechnology Center Building" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam10 = L.marker([43.074860, -89.412124], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Horticulture Building" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam11 = L.marker([43.076825, -89.401214], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Helen C. White Hall" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam12 = L.marker([43.072783, -89.412336], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Mechanical Engineering Building" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam13 = L.marker([43.075714, -89.411867], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Microbial Sciences Building" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam14 = L.marker([43.071676, -89.404445], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Noland Zoology Building" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam15 = L.marker([43.075728, -89.413588], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Russell Laboratories" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam16 = L.marker([43.075624, -89.406904], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Stovall Building (Wisconsin State Laboratory of Hygiene)" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam17 = L.marker([43.074994, -89.409868], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Veterinary Medicine" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam18 = L.marker([43.073943, -89.414076], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Wisconsin Energy Institute" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam19 = L.marker([43.073149, -89.407948], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Wisconsin Institutes for Discovery Building" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam20 = L.marker([43.068739, -89.406923], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Wisconsin Primate Center" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam21 = L.marker([43.074593, -89.421524], {icon: styrofoamIcon}).bindPopup("Styrofoam Reuse and Recycling: Wisconsin Veterinary Diagnostics Laboratory" + "<br>" + "<a href='http://sustainability.wisc.edu/styrofoam/' target='_blank' >More Details</a>"),
    styrofoam = L.layerGroup([styrofoam1,styrofoam2,styrofoam3, styrofoam4,styrofoam5,styrofoam6,styrofoam7,styrofoam8,styrofoam9,styrofoam10,styrofoam11,styrofoam12,styrofoam13,styrofoam14,styrofoam15,styrofoam16,styrofoam17, styrofoam18, styrofoam19, styrofoam20, styrofoam21]);

// SWAP
var swapIcon = new MarkerIcon({iconUrl: "img/sustainability-map/swap.png"});

var swap = L.marker([42.969385, -89.505466], {icon: swapIcon}).bindPopup("UW SWAP Shop: a multi-faceted surplus property disposal operation that serves all University of Wisconsin-Madison departments, UW System Schools, Municipalities and State of Wisconsin agencies." + "<br>" + "<a href='http://swap.wisc.edu/map.htm' target='_blank' >More Details</a>");

// We Trade
var weTradeIcon = new MarkerIcon({iconUrl: "img/sustainability-map/wetrade.png"});

var weTrade = L.marker([43.071709, -89.406620], {icon: weTradeIcon}).bindPopup("We-Trade: Computer Sciences and Statistics" + "<br>" + "<a href='https://techstore.wisc.edu/trade-up/' target='_blank' >More Details</a>");

// Disposal Services (EHS)
var disposalIcon = new MarkerIcon({iconUrl: "img/sustainability-map/chemical.png"});

var disposal = L.marker([43.068759, -89.399734], {icon: disposalIcon}).bindPopup("Chemical Disposal/Surplus Pickup & Animal Tissue Pickup" + "<br>" + "<a href='http://www.ehs.wisc.edu/disposalservices.htm' target='_blank' >More Details</a>");

// Recyclopedia (EHS)
var recyclopediaIcon = new MarkerIcon({iconUrl: "img/sustainability-map/recyclopedia.png"});

var recyclopedia = L.marker([43.068759, -89.399734], {icon: recyclopediaIcon}).bindPopup("Guidelines for Unwanted Material Disposal" + "<br>" + "<a href='http://www.ehs.wisc.edu/recyclopedia.htm' target='_blank' >More Details</a>");


/**
* Education
*/
var educationIcon = new MarkerIcon({iconUrl: "img/sustainability-map/education.png"});
var education1 = L.marker([43.075926, -89.401037], {icon: educationIcon}).bindPopup("Sustainability Certificate from Nelson Institute for Environmental Studies" + "<br>" + "<a href='https://nelson.wisc.edu/undergraduate/sustainability-certificate/index.php' target='_blank' >More Details</a>"),
    education2 = L.marker([43.072880, -89.401874], {icon: educationIcon}).bindPopup("Certificate in Business, Environment & Social Responsibility from School of Buisness" + "<br>" + "<a href='https://bus.wisc.edu/mba/current-students/certificate-programs/sustainability' target='_blank' >More Details</a>"),
    education = L.layerGroup([education1, education2]);


$("li").click(function(){
    if ($(this).hasClass("highlight_stay")) {
        $(this).removeClass("highlight_stay");
    } else {
        $(this).addClass("highlight_stay");
    }
});
/**
* Sidebar filter click events
**/
// Dictionary to keep track of the filter toggle value
var showLayer = {};

// LEED
$("#LEED").click(function (e) {
    e.preventDefault();

    if (!showLayer.LEED) {
        LEED.addTo(map);
        showLayer.LEED = true;
    } else {
        map.removeLayer(LEED);
        showLayer.LEED = false;
    }
});

// HVAC
$("#HVAC").click(function (e) {
    e.preventDefault();

    if (!showLayer.HVAC) {
        HVAC.addTo(map);
        showLayer.HVAC = true;
    } else {
        map.removeLayer(HVAC);
        showLayer.HVAC = false;
    }
});

// Roof Garden
$("#roofGarden").click(function (e) {
    e.preventDefault();

    if (!showLayer.roofGarden) {
        roofGarden.addTo(map);
        showLayer.roofGarden = true;
    } else {
        map.removeLayer(roofGarden);
        showLayer.roofGarden = false;
    }
});

// Garden plot
$("#gardenPlot").click(function (e) {
    e.preventDefault();

    if (!showLayer.gardenPlot) {
        gardenPlot.addTo(map);
        showLayer.gardenPlot = true;
    } else {
        map.removeLayer(gardenPlot);
        showLayer.gardenPlot = false;
    }
});

// Biking
$("#biking").click(function (e) {
    e.preventDefault();

    if (!showLayer.biking) {
        bcycle.addTo(map);
        showLayer.biking = true;
    } else {
        map.removeLayer(bcycle);
        showLayer.biking = false;
    }
});

// Bike Locker
$("#bikeLocker").click(function (e) {
    e.preventDefault();

    if (!showLayer.bikeLocker) {
        bikeLocker.addTo(map);
        showLayer.bikeLocker = true;
    } else {
        map.removeLayer(bikeLocker);
        showLayer.bikeLocker= false;
    }
});

// Bike Cage
$("#bikeCage").click(function (e) {
    e.preventDefault();

    if (!showLayer.bikeCage) {
        bikeCage.addTo(map);
        showLayer.bikeCage = true;
    } else {
        map.removeLayer(bikeCage);
        showLayer.bikeCage = false;
    }
});


// Bike Repair
$("#bikeRepair").click(function (e) {
    e.preventDefault();

    if (!showLayer.bikeRepair) {
        bikeRepair.addTo(map);
        showLayer.bikeRepair = true;
    } else {
        map.removeLayer(bikeRepair);
        showLayer.bikeRepair = false;
    }
});

// Composting
$("#composting").click(function (e) {
    e.preventDefault();

    if (!showLayer.composting) {
        composting.addTo(map);
        showLayer.composting = true;
    } else {
        map.removeLayer(composting);
        showLayer.composting = false;
    }
});

// Recycle Clothes
$("#recycleClothes").click(function (e) {
    e.preventDefault();

    if (!showLayer.recycleClothes) {
        recycleClothes.addTo(map);
        showLayer.recycleClothes = true;
    } else {
        map.removeLayer(recycleClothes);
        showLayer.recycleClothes = false;
    }
});

// Recycle electronics
$("#eWaste").click(function (e) {
    e.preventDefault();

    if (!showLayer.eWaste) {
        eWaste.addTo(map);
        showLayer.eWaste = true;
    } else {
        map.removeLayer(eWaste);
        showLayer.eWaste = false;
    }
});

// Recycle styrofoam
$("#styrofoam").click(function (e) {
    e.preventDefault();

    if (!showLayer.styrofoam) {
        styrofoam.addTo(map);
        showLayer.styrofoam = true;
    } else {
        map.removeLayer(styrofoam);
        showLayer.styrofoam = false;
    }
});

// SWAP
$("#swap").click(function (e) {
    e.preventDefault();

    if (!showLayer.swap) {
        swap.addTo(map);
        showLayer.swap = true;
    } else {
        map.removeLayer(swap);
        showLayer.swap = false;
    }
});

// We-trade
$("#weTrade").click(function (e) {
    e.preventDefault();

    if (!showLayer.weTrade) {
        weTrade.addTo(map);
        showLayer.weTrade = true;
    } else {
        map.removeLayer(weTrade);
        showLayer.weTrade = false;
    }
});

// Chemical Disposal
$("#disposal").click(function (e) {
    e.preventDefault();

    if (!showLayer.disposal) {
        disposal.addTo(map);
        showLayer.disposal = true;
    } else {
        map.removeLayer(disposal);
        showLayer.disposal = false;
    }
});

// Recyclopedia Disposal
$("#recyclopedia").click(function (e) {
    e.preventDefault();

    if (!showLayer.recyclopedia) {
        recyclopedia.addTo(map);
        showLayer.recyclopedia = true;
    } else {
        map.removeLayer(recyclopedia);
        showLayer.recyclopedia = false;
    }
});


// Education
$("#education").click(function (e) {
    e.preventDefault();

    if (!showLayer.education) {
        education.addTo(map);
        showLayer.education = true;
    } else {
        map.removeLayer(education);
        showLayer.education = false;
    }
});




