<script src="https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js"></script>


var places = [
    {
        "name": "Place 1",
        "latitude": -23.31509536897005,
        "longitude": -46.57099951314262
    },
    {
        "name": "Place 2",
        "latitude": -23.91249270500097,
        "longitude": -47.09606419418101
    },
    {
        "name": "Place 3",
        "latitude": -23.52710718577365,
        "longitude": -46.69994882618741
    },
    {
        "name": "Place 4",
        "latitude": -23.51754048756383,
        "longitude": -46.720150962394044
    },
    {
        "name": "Place 5",
        "latitude": -23.413788281465223,
        "longitude": -46.20064058300011
    },
    {
        "name": "Place 6",
        "latitude": -23.220308056164285,
        "longitude": -46.62869783157425
    },
    {
        "name": "Place 7",
        "latitude": -23.595480253216905,
        "longitude": -46.76326904176956
    },
    {
        "name": "Place 8",
        "latitude": -23.103617301247773,
        "longitude": -47.21331716131434
    },
    {
        "name": "Place 9",
        "latitude": -23.34225455501337,
        "longitude": -46.72375266194919
    },
    {
        "name": "Place 10",
        "latitude": -23.435010523425316,
        "longitude": -46.75793393713071
    },
    {
        "name": "Place 11",
        "latitude": -23.55769115766933,
        "longitude": -46.70289747854592
    },
    {
        "name": "Place 12",
        "latitude": -24.018829971035377,
        "longitude": -46.22343742577884
    },
    {
        "name": "Place 13",
        "latitude": -23.507746459511544,
        "longitude": -46.69649078211333
    },
    {
        "name": "Place 14",
        "latitude": -23.539648374087246,
        "longitude": -46.7015175248792
    },
    {
        "name": "Place 15",
        "latitude": -23.31915116591076,
        "longitude": -46.70032586047838
    },
    {
        "name": "Place 16",
        "latitude": -23.50652477309112,
        "longitude": -46.113766484016544
    },
    {
        "name": "Place 17",
        "latitude": -23.376433738940147,
        "longitude": -47.19019408576682
    },
    {
        "name": "Place 18",
        "latitude": -23.48375185661303,
        "longitude": -46.65613979287038
    },
    {
        "name": "Place 19",
        "latitude": -23.396757122537576,
        "longitude": -46.70978280175039
    },
    {
        "name": "Place 20",
        "latitude": -23.108010513151594,
        "longitude": -46.34508131233949
    },
    {
        "name": "Place 21",
        "latitude": -23.165823843770532,
        "longitude": -46.06891701109722
    },
    {
        "name": "Place 22",
        "latitude": -23.001519448523755,
        "longitude": -46.19615283366803
    },
    {
        "name": "Place 23",
        "latitude": -23.108701468516994,
        "longitude": -47.19315502158142
    },
    {
        "name": "Place 24",
        "latitude": -23.92596519456283,
        "longitude": -46.92083331410679
    },
    {
        "name": "Place 25",
        "latitude": -23.255221782129645,
        "longitude": -46.96221967131659
    },
    {
        "name": "Place 26",
        "latitude": -23.67686137131047,
        "longitude": -47.10035409161982
    },
    {
        "name": "Place 27",
        "latitude": -23.389392735158097,
        "longitude": -46.711472129123905
    },
    {
        "name": "Place 28",
        "latitude": -23.531980461361393,
        "longitude": -46.68897817641302
    },
    {
        "name": "Place 29",
        "latitude": -23.703813024372497,
        "longitude": -47.229615527625825
    },
    {
        "name": "Place 30",
        "latitude": -23.56889431255199,
        "longitude": -46.537339449939836
    },
    {
        "name": "Place 31",
        "latitude": -23.525852838150506,
        "longitude": -46.696071498589006
    },
    {
        "name": "Place 32",
        "latitude": -23.728359314744793,
        "longitude": -47.02765038559987
    },
    {
        "name": "Place 33",
        "latitude": -23.303517573073684,
        "longitude": -46.8032725657397
    },
    {
        "name": "Place 34",
        "latitude": -23.710582236873286,
        "longitude": -46.31713177119458
    },
    {
        "name": "Place 35",
        "latitude": -23.468701349439897,
        "longitude": -46.83848577752321
    },
    {
        "name": "Place 36",
        "latitude": -23.20056714445039,
        "longitude": -46.44303087184115
    },
    {
        "name": "Place 37",
        "latitude": -23.853418247050772,
        "longitude": -46.07869864944847
    },
    {
        "name": "Place 38",
        "latitude": -24.09194165121498,
        "longitude": -46.34590174288142
    },
    {
        "name": "Place 39",
        "latitude": -23.384891746359273,
        "longitude": -46.66877180763066
    },
    {
        "name": "Place 40",
        "latitude": -23.706899127562835,
        "longitude": -46.54732519686214
    },
    {
        "name": "Place 41",
        "latitude": -23.62402043698033,
        "longitude": -46.697385245518824
    },
    {
        "name": "Place 42",
        "latitude": -22.971187424715566,
        "longitude": -46.28740116583436
    },
    {
        "name": "Place 43",
        "latitude": -23.71503536477956,
        "longitude": -46.51948886141982
    },
    {
        "name": "Place 44",
        "latitude": -23.91817033346031,
        "longitude": -46.67814674589717
    },
    {
        "name": "Place 45",
        "latitude": -23.64639136720365,
        "longitude": -46.40127218379924
    },
    {
        "name": "Place 46",
        "latitude": -23.18045470837761,
        "longitude": -46.82593515933369
    },
    {
        "name": "Place 47",
        "latitude": -23.628276734567482,
        "longitude": -46.54788991048957
    },
    {
        "name": "Place 48",
        "latitude": -23.39562934517768,
        "longitude": -45.95418040774154
    },
    {
        "name": "Place 49",
        "latitude": -23.41823416882838,
        "longitude": -47.08928120276704
    },
    {
        "name": "Place 50",
        "latitude": -23.927312031695003,
        "longitude": -46.41471700567637
    },
    {
        "name": "Place 51",
        "latitude": -23.33376222454862,
        "longitude": -46.31515038820578
    },
    {
        "name": "Place 52",
        "latitude": -23.348069593990957,
        "longitude": -46.37787980166071
    },
    {
        "name": "Place 53",
        "latitude": -23.42785123022611,
        "longitude": -47.16387105606723
    },
    {
        "name": "Place 54",
        "latitude": -23.356795834258325,
        "longitude": -46.360986379688086
    },
    {
        "name": "Place 55",
        "latitude": -23.583167060727572,
        "longitude": -46.682649732080364
    },
    {
        "name": "Place 56",
        "latitude": -23.642305112621425,
        "longitude": -46.689523460385075
    },
    {
        "name": "Place 57",
        "latitude": -23.28772824716667,
        "longitude": -46.83129448243759
    },
    {
        "name": "Place 58",
        "latitude": -24.12399274567967,
        "longitude": -46.63731752712001
    },
    {
        "name": "Place 59",
        "latitude": -24.145191798767083,
        "longitude": -46.88298351286071
    },
    {
        "name": "Place 60",
        "latitude": -23.637470281043843,
        "longitude": -46.60682231295617
    },
    {
        "name": "Place 61",
        "latitude": -23.468911672612684,
        "longitude": -46.249607710598355
    },
    {
        "name": "Place 62",
        "latitude": -23.9365846235264,
        "longitude": -46.67425336755548
    },
    {
        "name": "Place 63",
        "latitude": -23.45157760490723,
        "longitude": -46.69944418039766
    },
    {
        "name": "Place 64",
        "latitude": -23.2202905475614,
        "longitude": -46.55691609646308
    },
    {
        "name": "Place 65",
        "latitude": -24.022297365036884,
        "longitude": -46.81074883400737
    },
    {
        "name": "Place 66",
        "latitude": -22.81801999336827,
        "longitude": -46.569821240307036
    },
    {
        "name": "Place 67",
        "latitude": -23.515823572956908,
        "longitude": -46.745045572600326
    },
    {
        "name": "Place 68",
        "latitude": -23.512696443963485,
        "longitude": -46.734200910411154
    },
    {
        "name": "Place 69",
        "latitude": -23.115318051380743,
        "longitude": -46.74514602357318
    },
    {
        "name": "Place 70",
        "latitude": -24.079545260622524,
        "longitude": -46.60248799647526
    },
    {
        "name": "Place 71",
        "latitude": -24.071109154492788,
        "longitude": -46.41140972789536
    },
    {
        "name": "Place 72",
        "latitude": -23.727442004167067,
        "longitude": -46.70644632337846
    },
    {
        "name": "Place 73",
        "latitude": -23.417303326981653,
        "longitude": -46.89253821122537
    },
    {
        "name": "Place 74",
        "latitude": -23.754738132105384,
        "longitude": -47.17654749932756
    },
    {
        "name": "Place 75",
        "latitude": -22.997247003140284,
        "longitude": -46.49373037316703
    },
    {
        "name": "Place 76",
        "latitude": -23.109810793307087,
        "longitude": -47.08842638340224
    },
    {
        "name": "Place 77",
        "latitude": -23.063771063724317,
        "longitude": -46.91159755001789
    },
    {
        "name": "Place 78",
        "latitude": -23.531110320439012,
        "longitude": -46.74387945677784
    },
    {
        "name": "Place 79",
        "latitude": -23.562692782481143,
        "longitude": -46.78371611488821
    },
    {
        "name": "Place 80",
        "latitude": -23.78761113936078,
        "longitude": -46.36142593610604
    },
    {
        "name": "Place 81",
        "latitude": -23.655497287274287,
        "longitude": -46.204975487197956
    },
    {
        "name": "Place 82",
        "latitude": -23.648984264456026,
        "longitude": -46.76516689564153
    },
    {
        "name": "Place 83",
        "latitude": -23.80816649750367,
        "longitude": -47.10605670562029
    },
    {
        "name": "Place 84",
        "latitude": -23.514056086188603,
        "longitude": -46.85639245518924
    },
    {
        "name": "Place 85",
        "latitude": -23.054470601281757,
        "longitude": -46.382388056174854
    },
    {
        "name": "Place 86",
        "latitude": -23.445993342196722,
        "longitude": -46.927527148328146
    },
    {
        "name": "Place 87",
        "latitude": -23.241998708305804,
        "longitude": -46.765731623015924
    },
    {
        "name": "Place 88",
        "latitude": -23.305526249619398,
        "longitude": -46.96709774423704
    },
    {
        "name": "Place 89",
        "latitude": -23.37776922386406,
        "longitude": -47.17018441677043
    },
    {
        "name": "Place 90",
        "latitude": -24.013073177292622,
        "longitude": -46.627503387254066
    },
    {
        "name": "Place 91",
        "latitude": -23.49994599773202,
        "longitude": -46.62873781079814
    },
    {
        "name": "Place 92",
        "latitude": -23.726590171843412,
        "longitude": -46.62080783419141
    },
    {
        "name": "Place 93",
        "latitude": -23.759668753976996,
        "longitude": -46.612882702060844
    },
    {
        "name": "Place 94",
        "latitude": -23.340497334855208,
        "longitude": -46.326895970484806
    },
    {
        "name": "Place 95",
        "latitude": -23.683068269221124,
        "longitude": -46.67249335034185
    },
    {
        "name": "Place 96",
        "latitude": -23.473237362885246,
        "longitude": -46.87205824993646
    },
    {
        "name": "Place 97",
        "latitude": -23.23680196081151,
        "longitude": -46.935350537770944
    },
    {
        "name": "Place 98",
        "latitude": -23.04654734619102,
        "longitude": -47.04663067292996
    },
    {
        "name": "Place 99",
        "latitude": -23.228119593403708,
        "longitude": -47.0742428227995
    },
    {
        "name": "Place 100",
        "latitude": -23.784721661904463,
        "longitude": -46.00195680244929
    },
    {
        "name": "Place 101",
        "latitude": -23.646482866353047,
        "longitude": -46.77501684877657
    },
    {
        "name": "Place 102",
        "latitude": -24.199690892598138,
        "longitude": -46.53935534017816
    },
    {
        "name": "Place 103",
        "latitude": -23.231438404770504,
        "longitude": -46.25699495730441
    },
    {
        "name": "Place 104",
        "latitude": -23.884474333205848,
        "longitude": -47.19921134692342
    },
    {
        "name": "Place 105",
        "latitude": -23.7699783409978,
        "longitude": -46.890583396420226
    },
    {
        "name": "Place 106",
        "latitude": -23.547846524114572,
        "longitude": -46.861128333283105
    },
    {
        "name": "Place 107",
        "latitude": -23.331033379094453,
        "longitude": -47.34672309725873
    },
    {
        "name": "Place 108",
        "latitude": -23.72232414474567,
        "longitude": -46.44371579548532
    },
    {
        "name": "Place 109",
        "latitude": -23.647473593774492,
        "longitude": -46.62126109365261
    },
    {
        "name": "Place 110",
        "latitude": -23.20727009480769,
        "longitude": -46.638981494313725
    },
    {
        "name": "Place 111",
        "latitude": -23.43270973133708,
        "longitude": -46.87482580709659
    },
    {
        "name": "Place 112",
        "latitude": -23.04129373081329,
        "longitude": -46.597591101250586
    },
    {
        "name": "Place 113",
        "latitude": -23.485253797384992,
        "longitude": -46.69795704634454
    },
    {
        "name": "Place 114",
        "latitude": -23.35873733334082,
        "longitude": -46.49116575258151
    },
    {
        "name": "Place 115",
        "latitude": -23.59214517863904,
        "longitude": -46.681959520454775
    },
    {
        "name": "Place 116",
        "latitude": -23.17779470555121,
        "longitude": -46.71793079867994
    },
    {
        "name": "Place 117",
        "latitude": -22.92888391332041,
        "longitude": -46.74481934357284
    },
    {
        "name": "Place 118",
        "latitude": -23.840906484658593,
        "longitude": -46.9672954312336
    },
    {
        "name": "Place 119",
        "latitude": -23.443929277837373,
        "longitude": -46.10688489689682
    },
    {
        "name": "Place 120",
        "latitude": -23.76420607236213,
        "longitude": -46.32585074805272
    },
    {
        "name": "Place 121",
        "latitude": -23.19625354726642,
        "longitude": -47.15767848341393
    },
    {
        "name": "Place 122",
        "latitude": -23.71108238444776,
        "longitude": -46.433317488259874
    },
    {
        "name": "Place 123",
        "latitude": -23.77228933645324,
        "longitude": -46.62796412270363
    },
    {
        "name": "Place 124",
        "latitude": -24.008668102071464,
        "longitude": -46.785422631943845
    },
    {
        "name": "Place 125",
        "latitude": -23.437081954462784,
        "longitude": -47.30752425044576
    },
    {
        "name": "Place 126",
        "latitude": -23.748049984488457,
        "longitude": -47.227149806337245
    },
    {
        "name": "Place 127",
        "latitude": -23.8533394931795,
        "longitude": -46.22949768332156
    },
    {
        "name": "Place 128",
        "latitude": -23.48977554823084,
        "longitude": -46.72162352401766
    },
    {
        "name": "Place 129",
        "latitude": -23.08101815654643,
        "longitude": -46.94674428692503
    },
    {
        "name": "Place 130",
        "latitude": -23.778624441018636,
        "longitude": -46.30560554222569
    },
    {
        "name": "Place 131",
        "latitude": -23.213293007075823,
        "longitude": -46.47127228791645
    },
    {
        "name": "Place 132",
        "latitude": -23.25798354237939,
        "longitude": -47.069702882530216
    },
    {
        "name": "Place 133",
        "latitude": -24.05216991440963,
        "longitude": -47.07429891331524
    },
    {
        "name": "Place 134",
        "latitude": -23.680080030505064,
        "longitude": -46.01265949366828
    },
    {
        "name": "Place 135",
        "latitude": -23.74179319683007,
        "longitude": -47.01278304688407
    },
    {
        "name": "Place 136",
        "latitude": -22.907834923691663,
        "longitude": -46.891988298416024
    },
    {
        "name": "Place 137",
        "latitude": -23.976860667800157,
        "longitude": -46.55213547775453
    },
    {
        "name": "Place 138",
        "latitude": -23.501797634287282,
        "longitude": -46.70451952220337
    },
    {
        "name": "Place 139",
        "latitude": -23.697400699258953,
        "longitude": -46.933634797811656
    },
    {
        "name": "Place 140",
        "latitude": -23.463462069547237,
        "longitude": -46.64971778525334
    },
    {
        "name": "Place 141",
        "latitude": -23.534193308857063,
        "longitude": -46.49997287546658
    },
    {
        "name": "Place 142",
        "latitude": -23.487974194264684,
        "longitude": -46.9040654320598
    },
    {
        "name": "Place 143",
        "latitude": -23.347644000290135,
        "longitude": -47.28780564499761
    },
    {
        "name": "Place 144",
        "latitude": -23.4371211645747,
        "longitude": -46.532614700335166
    },
    {
        "name": "Place 145",
        "latitude": -23.648461037861214,
        "longitude": -46.94257944863895
    },
    {
        "name": "Place 146",
        "latitude": -23.689335666855555,
        "longitude": -47.11361676349991
    },
    {
        "name": "Place 147",
        "latitude": -23.40196519374281,
        "longitude": -46.766735568879135
    },
    {
        "name": "Place 148",
        "latitude": -23.46009906532855,
        "longitude": -46.98223985890902
    },
    {
        "name": "Place 149",
        "latitude": -23.178894080617617,
        "longitude": -46.592880106624456
    },
    {
        "name": "Place 150",
        "latitude": -23.801776521040587,
        "longitude": -46.21460817456326
    },
    {
        "name": "Place 151",
        "latitude": -23.22699674342822,
        "longitude": -46.95409184436915
    },
    {
        "name": "Place 152",
        "latitude": -23.56034079254296,
        "longitude": -46.33929891000719
    },
    {
        "name": "Place 153",
        "latitude": -23.02971144930068,
        "longitude": -46.74627464091291
    },
    {
        "name": "Place 154",
        "latitude": -23.942188524094675,
        "longitude": -46.99038345441231
    },
    {
        "name": "Place 155",
        "latitude": -23.51969795006218,
        "longitude": -46.73140096092825
    },
    {
        "name": "Place 156",
        "latitude": -23.526350132282555,
        "longitude": -47.11379367929583
    },
    {
        "name": "Place 157",
        "latitude": -24.0859789198174,
        "longitude": -46.63765146269493
    },
    {
        "name": "Place 158",
        "latitude": -23.49639544244068,
        "longitude": -46.799663571546944
    },
    {
        "name": "Place 159",
        "latitude": -23.64095044109281,
        "longitude": -46.487044054317714
    },
    {
        "name": "Place 160",
        "latitude": -23.194515521853162,
        "longitude": -46.720225205726024
    },
    {
        "name": "Place 161",
        "latitude": -24.04187057784015,
        "longitude": -47.09257477262345
    },
    {
        "name": "Place 162",
        "latitude": -23.428302062880284,
        "longitude": -46.61261129049985
    },
    {
        "name": "Place 163",
        "latitude": -23.738849286152412,
        "longitude": -46.84289622466288
    },
    {
        "name": "Place 164",
        "latitude": -23.350874173327448,
        "longitude": -47.39939316513202
    },
    {
        "name": "Place 165",
        "latitude": -23.85246611756476,
        "longitude": -46.25812667258856
    },
    {
        "name": "Place 166",
        "latitude": -23.6592360968709,
        "longitude": -46.63589489326208
    },
    {
        "name": "Place 167",
        "latitude": -23.484991505252147,
        "longitude": -47.30817680138786
    },
    {
        "name": "Place 168",
        "latitude": -23.53564275979425,
        "longitude": -46.717915804959205
    },
    {
        "name": "Place 169",
        "latitude": -23.913291997813733,
        "longitude": -46.94706395670489
    },
    {
        "name": "Place 170",
        "latitude": -23.719392825526693,
        "longitude": -47.10471761094968
    },
    {
        "name": "Place 171",
        "latitude": -23.791018342614752,
        "longitude": -46.91841743971132
    },
    {
        "name": "Place 172",
        "latitude": -23.510100117539167,
        "longitude": -46.49580604623657
    },
    {
        "name": "Place 173",
        "latitude": -23.40855796975859,
        "longitude": -46.534320861622
    },
    {
        "name": "Place 174",
        "latitude": -23.465141061288733,
        "longitude": -46.23057943818652
    },
    {
        "name": "Place 175",
        "latitude": -23.44035429744777,
        "longitude": -46.55450099520627
    },
    {
        "name": "Place 176",
        "latitude": -23.535005524936533,
        "longitude": -46.817795042662794
    },
    {
        "name": "Place 177",
        "latitude": -23.510096856039777,
        "longitude": -47.12648244459785
    },
    {
        "name": "Place 178",
        "latitude": -23.423218247759092,
        "longitude": -46.71163982287423
    },
    {
        "name": "Place 179",
        "latitude": -23.53142023919127,
        "longitude": -46.7071762851419
    },
    {
        "name": "Place 180",
        "latitude": -23.311151263922746,
        "longitude": -46.1315841368825
    },
    {
        "name": "Place 181",
        "latitude": -23.506260911479348,
        "longitude": -46.702919726236246
    },
    {
        "name": "Place 182",
        "latitude": -23.632852807659656,
        "longitude": -46.385384632808474
    },
    {
        "name": "Place 183",
        "latitude": -23.456995830979672,
        "longitude": -46.65518568798094
    },
    {
        "name": "Place 184",
        "latitude": -23.43239719462141,
        "longitude": -46.88723927003108
    },
    {
        "name": "Place 185",
        "latitude": -23.640283912583136,
        "longitude": -47.22672502146408
    },
    {
        "name": "Place 186",
        "latitude": -23.47940693017016,
        "longitude": -46.7790714196294
    },
    {
        "name": "Place 187",
        "latitude": -23.51158027876446,
        "longitude": -46.69845197399744
    },
    {
        "name": "Place 188",
        "latitude": -23.98083226141295,
        "longitude": -46.54223322601854
    },
    {
        "name": "Place 189",
        "latitude": -23.090598962970663,
        "longitude": -46.48776378598528
    },
    {
        "name": "Place 190",
        "latitude": -23.83676059436778,
        "longitude": -46.74699065530077
    },
    {
        "name": "Place 191",
        "latitude": -23.99231052931194,
        "longitude": -46.67745230524693
    },
    {
        "name": "Place 192",
        "latitude": -23.557213100436183,
        "longitude": -47.1956442727162
    },
    {
        "name": "Place 193",
        "latitude": -23.41122695526718,
        "longitude": -46.653873571929324
    },
    {
        "name": "Place 194",
        "latitude": -23.84352488357463,
        "longitude": -47.207250514648585
    },
    {
        "name": "Place 195",
        "latitude": -23.395059649462194,
        "longitude": -46.71877659337976
    },
    {
        "name": "Place 196",
        "latitude": -23.547984925111482,
        "longitude": -47.005734201960514
    },
    {
        "name": "Place 197",
        "latitude": -23.317502442092394,
        "longitude": -47.15259820275731
    },
    {
        "name": "Place 198",
        "latitude": -23.41968301530395,
        "longitude": -46.83558378395604
    },
    {
        "name": "Place 199",
        "latitude": -23.935844748824135,
        "longitude": -46.5480234707679
    },
    {
        "name": "Place 200",
        "latitude": -24.03581979957746,
        "longitude": -46.457364908764006
    },
    {
        "name": "Place 201",
        "latitude": -23.000356720554592,
        "longitude": -47.21451902786001
    },
    {
        "name": "Place 202",
        "latitude": -23.32209696891698,
        "longitude": -46.64119027917686
    },
    {
        "name": "Place 203",
        "latitude": -23.36218159517929,
        "longitude": -46.4926567749119
    },
    {
        "name": "Place 204",
        "latitude": -23.85476899546037,
        "longitude": -46.16066790752876
    },
    {
        "name": "Place 205",
        "latitude": -23.110036995022174,
        "longitude": -47.27130514743415
    },
    {
        "name": "Place 206",
        "latitude": -23.476397852127477,
        "longitude": -46.960649803345575
    },
    {
        "name": "Place 207",
        "latitude": -23.42310176452,
        "longitude": -46.714645605405615
    },
    {
        "name": "Place 208",
        "latitude": -23.81479634563192,
        "longitude": -46.6158045284718
    },
    {
        "name": "Place 209",
        "latitude": -23.238284676353558,
        "longitude": -46.2813528457139
    },
    {
        "name": "Place 210",
        "latitude": -23.71735607675822,
        "longitude": -46.627647420601214
    },
    {
        "name": "Place 211",
        "latitude": -23.40935009610853,
        "longitude": -46.77774940421573
    },
    {
        "name": "Place 212",
        "latitude": -23.243090249029787,
        "longitude": -46.28652650199636
    },
    {
        "name": "Place 213",
        "latitude": -24.109866017102924,
        "longitude": -47.118742024885734
    },
    {
        "name": "Place 214",
        "latitude": -23.841663989527383,
        "longitude": -46.401880103777096
    },
    {
        "name": "Place 215",
        "latitude": -23.34654746564827,
        "longitude": -46.93779745230893
    },
    {
        "name": "Place 216",
        "latitude": -22.86078363926817,
        "longitude": -46.59702908921813
    },
    {
        "name": "Place 217",
        "latitude": -23.09664527036251,
        "longitude": -47.25153447920357
    },
    {
        "name": "Place 218",
        "latitude": -23.12161161953078,
        "longitude": -46.41338269109121
    },
    {
        "name": "Place 219",
        "latitude": -23.205253587716967,
        "longitude": -46.87691361563902
    },
    {
        "name": "Place 220",
        "latitude": -23.769501010991593,
        "longitude": -46.81741212434916
    },
    {
        "name": "Place 221",
        "latitude": -23.606255411660836,
        "longitude": -46.762410259713945
    },
    {
        "name": "Place 222",
        "latitude": -23.45592049962759,
        "longitude": -46.75957867146476
    },
    {
        "name": "Place 223",
        "latitude": -23.573427265372324,
        "longitude": -46.59930430372603
    },
    {
        "name": "Place 224",
        "latitude": -23.16999180451501,
        "longitude": -47.16003776672737
    },
    {
        "name": "Place 225",
        "latitude": -24.143121704465912,
        "longitude": -46.66175321184456
    },
    {
        "name": "Place 226",
        "latitude": -23.00646529965471,
        "longitude": -47.030803660605386
    },
    {
        "name": "Place 227",
        "latitude": -23.33920515740404,
        "longitude": -46.989731463102835
    },
    {
        "name": "Place 228",
        "latitude": -24.118918941662677,
        "longitude": -46.76327832766464
    },
    {
        "name": "Place 229",
        "latitude": -23.123811736406353,
        "longitude": -46.799941116890025
    },
    {
        "name": "Place 230",
        "latitude": -23.462250755371993,
        "longitude": -46.86218459937039
    },
    {
        "name": "Place 231",
        "latitude": -23.622062250811567,
        "longitude": -47.14838503641929
    },
    {
        "name": "Place 232",
        "latitude": -23.45884055911026,
        "longitude": -47.04870874965737
    },
    {
        "name": "Place 233",
        "latitude": -23.386100263232002,
        "longitude": -46.80223122838286
    },
    {
        "name": "Place 234",
        "latitude": -23.65867286278784,
        "longitude": -47.17688723587172
    },
    {
        "name": "Place 235",
        "latitude": -23.530946203424794,
        "longitude": -46.6936496039089
    },
    {
        "name": "Place 236",
        "latitude": -23.658381243232597,
        "longitude": -46.57211592606455
    },
    {
        "name": "Place 237",
        "latitude": -23.15558519771523,
        "longitude": -47.2856205917243
    },
    {
        "name": "Place 238",
        "latitude": -23.552121776577913,
        "longitude": -46.730174814390956
    },
    {
        "name": "Place 239",
        "latitude": -23.347001799195954,
        "longitude": -46.04698066922472
    },
    {
        "name": "Place 240",
        "latitude": -23.375889569888223,
        "longitude": -46.67511427656965
    },
    {
        "name": "Place 241",
        "latitude": -24.034614975771913,
        "longitude": -46.88025397921083
    },
    {
        "name": "Place 242",
        "latitude": -24.19055718352717,
        "longitude": -46.43389696118696
    },
    {
        "name": "Place 243",
        "latitude": -23.53194029658347,
        "longitude": -45.98860063765578
    },
    {
        "name": "Place 244",
        "latitude": -23.534760620370072,
        "longitude": -46.40250588394569
    },
    {
        "name": "Place 245",
        "latitude": -23.700414982510132,
        "longitude": -47.151472787299234
    },
    {
        "name": "Place 246",
        "latitude": -24.007412197103527,
        "longitude": -46.29699168676104
    },
    {
        "name": "Place 247",
        "latitude": -23.198489975686307,
        "longitude": -46.882601755532114
    },
    {
        "name": "Place 248",
        "latitude": -23.220666314798297,
        "longitude": -46.1583656025928
    },
    {
        "name": "Place 249",
        "latitude": -22.90618099043154,
        "longitude": -46.37669684639564
    },
    {
        "name": "Place 250",
        "latitude": -23.595786360264253,
        "longitude": -46.69224014731311
    },
    {
        "name": "Place 251",
        "latitude": -23.47832134447617,
        "longitude": -46.89742280018328
    },
    {
        "name": "Place 252",
        "latitude": -23.36838527592177,
        "longitude": -46.88617761493898
    },
    {
        "name": "Place 253",
        "latitude": -23.929522011463238,
        "longitude": -46.155438162121975
    },
    {
        "name": "Place 254",
        "latitude": -23.528083436094107,
        "longitude": -46.69658582453734
    },
    {
        "name": "Place 255",
        "latitude": -23.977491499963474,
        "longitude": -46.976722306648206
    },
    {
        "name": "Place 256",
        "latitude": -23.437378766477377,
        "longitude": -46.68416817612318
    },
    {
        "name": "Place 257",
        "latitude": -23.55822085492923,
        "longitude": -46.60297410311653
    },
    {
        "name": "Place 258",
        "latitude": -23.72233113697833,
        "longitude": -47.36147463337227
    },
    {
        "name": "Place 259",
        "latitude": -23.706997369589086,
        "longitude": -46.02493592151183
    },
    {
        "name": "Place 260",
        "latitude": -23.472555550371904,
        "longitude": -47.083129280885586
    },
    {
        "name": "Place 261",
        "latitude": -23.53565120614588,
        "longitude": -46.65861474782119
    },
    {
        "name": "Place 262",
        "latitude": -23.224039136987198,
        "longitude": -47.06992820018765
    },
    {
        "name": "Place 263",
        "latitude": -23.070072292185515,
        "longitude": -46.541150954695205
    },
    {
        "name": "Place 264",
        "latitude": -23.72662325484091,
        "longitude": -46.8581137975657
    },
    {
        "name": "Place 265",
        "latitude": -23.174313102717267,
        "longitude": -46.84570882117955
    },
    {
        "name": "Place 266",
        "latitude": -23.352534515322755,
        "longitude": -47.2679107842357
    },
    {
        "name": "Place 267",
        "latitude": -23.895039748010895,
        "longitude": -46.65933980830575
    },
    {
        "name": "Place 268",
        "latitude": -23.72568402902133,
        "longitude": -46.548843767506504
    },
    {
        "name": "Place 269",
        "latitude": -23.32656277010815,
        "longitude": -46.33761875660752
    },
    {
        "name": "Place 270",
        "latitude": -23.082011765643745,
        "longitude": -46.83531224909631
    },
    {
        "name": "Place 271",
        "latitude": -23.60255895149101,
        "longitude": -46.46853750408658
    },
    {
        "name": "Place 272",
        "latitude": -23.558694161231234,
        "longitude": -46.57118117887724
    },
    {
        "name": "Place 273",
        "latitude": -23.497716999768485,
        "longitude": -46.678903666783526
    },
    {
        "name": "Place 274",
        "latitude": -24.01491496311894,
        "longitude": -46.86808749390503
    },
    {
        "name": "Place 275",
        "latitude": -23.101855964950868,
        "longitude": -46.63206432744175
    },
    {
        "name": "Place 276",
        "latitude": -22.896309614798547,
        "longitude": -46.91738919452777
    },
    {
        "name": "Place 277",
        "latitude": -23.4603315522145,
        "longitude": -46.70883207612386
    },
    {
        "name": "Place 278",
        "latitude": -23.416151338195547,
        "longitude": -46.81221735724939
    },
    {
        "name": "Place 279",
        "latitude": -23.155811199897276,
        "longitude": -46.54005074095126
    },
    {
        "name": "Place 280",
        "latitude": -24.077763047098507,
        "longitude": -46.88822466822534
    },
    {
        "name": "Place 281",
        "latitude": -23.864979617216168,
        "longitude": -46.8833300931666
    },
    {
        "name": "Place 282",
        "latitude": -24.01613983854037,
        "longitude": -47.02834813513149
    },
    {
        "name": "Place 283",
        "latitude": -23.36715818140469,
        "longitude": -46.02354089464794
    },
    {
        "name": "Place 284",
        "latitude": -23.27768285611743,
        "longitude": -46.47959232061843
    },
    {
        "name": "Place 285",
        "latitude": -23.357407753142624,
        "longitude": -46.7668955336209
    },
    {
        "name": "Place 286",
        "latitude": -24.139651864668224,
        "longitude": -46.76381664699711
    },
    {
        "name": "Place 287",
        "latitude": -23.95372025154023,
        "longitude": -46.53407202154875
    },
    {
        "name": "Place 288",
        "latitude": -23.716136860258008,
        "longitude": -46.64105586885849
    },
    {
        "name": "Place 289",
        "latitude": -23.672690431420616,
        "longitude": -46.086494871152354
    },
    {
        "name": "Place 290",
        "latitude": -23.491648045341442,
        "longitude": -46.62322808066922
    },
    {
        "name": "Place 291",
        "latitude": -23.20555144063214,
        "longitude": -47.04747687535615
    },
    {
        "name": "Place 292",
        "latitude": -23.637357660508638,
        "longitude": -46.72444296436456
    },
    {
        "name": "Place 293",
        "latitude": -24.146132197770143,
        "longitude": -46.604309379127216
    },
    {
        "name": "Place 294",
        "latitude": -23.96888160743204,
        "longitude": -46.677349657618535
    },
    {
        "name": "Place 295",
        "latitude": -23.957895040523404,
        "longitude": -46.22651211869438
    },
    {
        "name": "Place 296",
        "latitude": -23.5757221009382,
        "longitude": -46.75151502492503
    },
    {
        "name": "Place 297",
        "latitude": -23.272296536285133,
        "longitude": -46.568801297901274
    },
    {
        "name": "Place 298",
        "latitude": -23.606467877890587,
        "longitude": -46.66261813536385
    },
    {
        "name": "Place 299",
        "latitude": -23.614524051375707,
        "longitude": -46.938141886972645
    },
    {
        "name": "Place 300",
        "latitude": -23.631901359577835,
        "longitude": -46.61253469127452
    },
    {
        "name": "Place 301",
        "latitude": -23.63871292915288,
        "longitude": -46.584184559626664
    },
    {
        "name": "Place 302",
        "latitude": -23.92600832524797,
        "longitude": -46.503321423302296
    },
    {
        "name": "Place 303",
        "latitude": -23.24228818202012,
        "longitude": -46.782348944919946
    },
    {
        "name": "Place 304",
        "latitude": -23.712691716177464,
        "longitude": -46.6699707731639
    },
    {
        "name": "Place 305",
        "latitude": -23.206825725382295,
        "longitude": -46.39180251185838
    },
    {
        "name": "Place 306",
        "latitude": -23.817641679402726,
        "longitude": -46.653282686929344
    },
    {
        "name": "Place 307",
        "latitude": -23.716971547227992,
        "longitude": -46.96817973013191
    },
    {
        "name": "Place 308",
        "latitude": -23.65152931477837,
        "longitude": -46.52677222335534
    },
    {
        "name": "Place 309",
        "latitude": -23.446225084379144,
        "longitude": -47.15531344695667
    },
    {
        "name": "Place 310",
        "latitude": -23.416142043694347,
        "longitude": -46.920989652096914
    },
    {
        "name": "Place 311",
        "latitude": -23.383498172790915,
        "longitude": -46.8942952410845
    },
    {
        "name": "Place 312",
        "latitude": -24.068890351958697,
        "longitude": -46.99327335387634
    },
    {
        "name": "Place 313",
        "latitude": -23.417198798709208,
        "longitude": -46.64364570703639
    },
    {
        "name": "Place 314",
        "latitude": -23.315268798033976,
        "longitude": -47.02290020231963
    },
    {
        "name": "Place 315",
        "latitude": -23.515063199818755,
        "longitude": -46.898579918572985
    },
    {
        "name": "Place 316",
        "latitude": -23.36494725398751,
        "longitude": -46.5944285361087
    },
    {
        "name": "Place 317",
        "latitude": -23.42277753077572,
        "longitude": -46.56977698884974
    },
    {
        "name": "Place 318",
        "latitude": -23.048187017604675,
        "longitude": -46.83297166407491
    },
    {
        "name": "Place 319",
        "latitude": -23.346382552701822,
        "longitude": -46.5114537445954
    },
    {
        "name": "Place 320",
        "latitude": -23.356769152480055,
        "longitude": -46.52243953559487
    },
    {
        "name": "Place 321",
        "latitude": -23.780398872254047,
        "longitude": -46.57840214269539
    },
    {
        "name": "Place 322",
        "latitude": -23.69865797670568,
        "longitude": -46.504628116189394
    },
    {
        "name": "Place 323",
        "latitude": -23.51268095330572,
        "longitude": -46.78294141520388
    },
    {
        "name": "Place 324",
        "latitude": -23.182522605859106,
        "longitude": -46.38732646774572
    },
    {
        "name": "Place 325",
        "latitude": -23.528053208827405,
        "longitude": -46.70199724617093
    },
    {
        "name": "Place 326",
        "latitude": -23.876215821302814,
        "longitude": -46.97854112958234
    },
    {
        "name": "Place 327",
        "latitude": -23.622019576787388,
        "longitude": -46.9703419634857
    },
    {
        "name": "Place 328",
        "latitude": -23.880030812408748,
        "longitude": -47.15433592113202
    },
    {
        "name": "Place 329",
        "latitude": -23.455462519804183,
        "longitude": -46.12958284668074
    },
    {
        "name": "Place 330",
        "latitude": -24.148616461964714,
        "longitude": -46.70779971393178
    },
    {
        "name": "Place 331",
        "latitude": -23.8533748601077,
        "longitude": -47.038626190512694
    },
    {
        "name": "Place 332",
        "latitude": -23.481778801909655,
        "longitude": -46.76894119191662
    },
    {
        "name": "Place 333",
        "latitude": -24.018499127389966,
        "longitude": -47.13233630049059
    },
    {
        "name": "Place 334",
        "latitude": -23.404890136584395,
        "longitude": -46.95032549403225
    },
    {
        "name": "Place 335",
        "latitude": -23.440482498416888,
        "longitude": -47.09866071257485
    },
    {
        "name": "Place 336",
        "latitude": -23.72742402978184,
        "longitude": -46.66547698116994
    },
    {
        "name": "Place 337",
        "latitude": -23.99059177741234,
        "longitude": -46.62022683591604
    },
    {
        "name": "Place 338",
        "latitude": -23.478198716443377,
        "longitude": -46.69811722742822
    },
    {
        "name": "Place 339",
        "latitude": -23.609157376759466,
        "longitude": -46.98346481701302
    },
    {
        "name": "Place 340",
        "latitude": -23.02293049648781,
        "longitude": -46.9476263324495
    },
    {
        "name": "Place 341",
        "latitude": -23.503190095021836,
        "longitude": -46.66837122590609
    },
    {
        "name": "Place 342",
        "latitude": -23.214429586922765,
        "longitude": -47.2277909577908
    },
    {
        "name": "Place 343",
        "latitude": -23.778760141592237,
        "longitude": -47.43068262427828
    },
    {
        "name": "Place 344",
        "latitude": -23.432851235582397,
        "longitude": -47.26564794893254
    },
    {
        "name": "Place 345",
        "latitude": -23.639875681839005,
        "longitude": -46.61936705130139
    },
    {
        "name": "Place 346",
        "latitude": -24.031162159833965,
        "longitude": -46.49153277879451
    },
    {
        "name": "Place 347",
        "latitude": -22.842410830897123,
        "longitude": -46.8354250625522
    },
    {
        "name": "Place 348",
        "latitude": -23.43053341592206,
        "longitude": -46.71554100977829
    },
    {
        "name": "Place 349",
        "latitude": -23.801342069451568,
        "longitude": -46.61704380463943
    },
    {
        "name": "Place 350",
        "latitude": -23.551353075864956,
        "longitude": -46.800459272848315
    },
    {
        "name": "Place 351",
        "latitude": -23.372757337226844,
        "longitude": -46.22586426522805
    },
    {
        "name": "Place 352",
        "latitude": -23.945250935218297,
        "longitude": -46.69069357470939
    },
    {
        "name": "Place 353",
        "latitude": -23.274234292441047,
        "longitude": -47.0615477907372
    },
    {
        "name": "Place 354",
        "latitude": -23.754607025303123,
        "longitude": -46.548915916468516
    },
    {
        "name": "Place 355",
        "latitude": -23.245601175087227,
        "longitude": -46.64498670889254
    },
    {
        "name": "Place 356",
        "latitude": -23.52507892385787,
        "longitude": -46.702656751081825
    },
    {
        "name": "Place 357",
        "latitude": -23.428567838289,
        "longitude": -46.75896970401587
    },
    {
        "name": "Place 358",
        "latitude": -23.264584729300463,
        "longitude": -46.3531608240121
    },
    {
        "name": "Place 359",
        "latitude": -23.21492005886528,
        "longitude": -46.99272092277998
    },
    {
        "name": "Place 360",
        "latitude": -23.520762580639758,
        "longitude": -46.7222180839677
    },
    {
        "name": "Place 361",
        "latitude": -23.518340715087138,
        "longitude": -46.72161458866963
    },
    {
        "name": "Place 362",
        "latitude": -23.975230684683357,
        "longitude": -46.973258174262114
    },
    {
        "name": "Place 363",
        "latitude": -23.720732758800946,
        "longitude": -45.983002075714445
    },
    {
        "name": "Place 364",
        "latitude": -24.12073225034285,
        "longitude": -46.53195640312929
    },
    {
        "name": "Place 365",
        "latitude": -22.876455148378792,
        "longitude": -46.886143815214446
    },
    {
        "name": "Place 366",
        "latitude": -24.032814984716293,
        "longitude": -46.82647418257182
    },
    {
        "name": "Place 367",
        "latitude": -23.5604393904943,
        "longitude": -46.6380859440795
    },
    {
        "name": "Place 368",
        "latitude": -24.0636594751186,
        "longitude": -46.67433172645919
    },
    {
        "name": "Place 369",
        "latitude": -23.979142218792823,
        "longitude": -46.91943056935305
    },
    {
        "name": "Place 370",
        "latitude": -23.417424116662612,
        "longitude": -46.79380817006247
    },
    {
        "name": "Place 371",
        "latitude": -23.566775529640232,
        "longitude": -46.88671525322717
    },
    {
        "name": "Place 372",
        "latitude": -24.00993884879983,
        "longitude": -46.20267538623987
    },
    {
        "name": "Place 373",
        "latitude": -23.4483019322634,
        "longitude": -46.50229247602468
    },
    {
        "name": "Place 374",
        "latitude": -24.046068260905116,
        "longitude": -47.071690477558455
    },
    {
        "name": "Place 375",
        "latitude": -23.41193225199346,
        "longitude": -45.95782165418893
    },
    {
        "name": "Place 376",
        "latitude": -23.837302949490635,
        "longitude": -46.74689710842256
    },
    {
        "name": "Place 377",
        "latitude": -23.1065087605798,
        "longitude": -47.10186322774925
    },
    {
        "name": "Place 378",
        "latitude": -24.049560709980778,
        "longitude": -46.266713166823465
    },
    {
        "name": "Place 379",
        "latitude": -23.762220162564482,
        "longitude": -46.479336167535706
    },
    {
        "name": "Place 380",
        "latitude": -23.457735483762857,
        "longitude": -46.7898211224435
    },
    {
        "name": "Place 381",
        "latitude": -23.52529418707035,
        "longitude": -46.6653153419961
    },
    {
        "name": "Place 382",
        "latitude": -23.37629723891147,
        "longitude": -46.557247838256295
    },
    {
        "name": "Place 383",
        "latitude": -23.87134163448822,
        "longitude": -46.61754505376029
    },
    {
        "name": "Place 384",
        "latitude": -23.8002779263804,
        "longitude": -46.440480091315344
    },
    {
        "name": "Place 385",
        "latitude": -23.154501620194555,
        "longitude": -46.82131297824745
    },
    {
        "name": "Place 386",
        "latitude": -23.18012862777196,
        "longitude": -46.68642287299871
    },
    {
        "name": "Place 387",
        "latitude": -23.488234485571432,
        "longitude": -47.072568172701295
    },
    {
        "name": "Place 388",
        "latitude": -23.464149876813234,
        "longitude": -46.252828516937285
    },
    {
        "name": "Place 389",
        "latitude": -23.53483830461574,
        "longitude": -46.761340069967424
    },
    {
        "name": "Place 390",
        "latitude": -23.36843083952754,
        "longitude": -46.64346673868403
    },
    {
        "name": "Place 391",
        "latitude": -23.85686497137956,
        "longitude": -46.06602349379576
    },
    {
        "name": "Place 392",
        "latitude": -23.9941710516409,
        "longitude": -46.42840605916211
    },
    {
        "name": "Place 393",
        "latitude": -23.790119975602835,
        "longitude": -47.079061852148484
    },
    {
        "name": "Place 394",
        "latitude": -23.76742882507149,
        "longitude": -47.034846462351375
    },
    {
        "name": "Place 395",
        "latitude": -23.01069326048455,
        "longitude": -46.62925995873733
    },
    {
        "name": "Place 396",
        "latitude": -23.903375203240127,
        "longitude": -46.545864940519486
    },
    {
        "name": "Place 397",
        "latitude": -24.089757683601125,
        "longitude": -46.25791950005556
    },
    {
        "name": "Place 398",
        "latitude": -23.585362332944317,
        "longitude": -46.1929370877042
    },
    {
        "name": "Place 399",
        "latitude": -24.24038492568832,
        "longitude": -46.750604745323216
    },
    {
        "name": "Place 400",
        "latitude": -22.839025815721786,
        "longitude": -46.519046957153684
    },
    {
        "name": "Place 401",
        "latitude": -23.823824307888597,
        "longitude": -47.1270793920647
    },
    {
        "name": "Place 402",
        "latitude": -23.0567257217741,
        "longitude": -46.13329321259372
    },
    {
        "name": "Place 403",
        "latitude": -23.78651648681519,
        "longitude": -46.46543337457362
    },
    {
        "name": "Place 404",
        "latitude": -23.453937790045373,
        "longitude": -46.91444332312102
    },
    {
        "name": "Place 405",
        "latitude": -23.661887130277364,
        "longitude": -46.78327431440337
    },
    {
        "name": "Place 406",
        "latitude": -23.23806365592522,
        "longitude": -46.29073674792146
    },
    {
        "name": "Place 407",
        "latitude": -23.29391659182912,
        "longitude": -46.93161396776019
    },
    {
        "name": "Place 408",
        "latitude": -23.469493903437566,
        "longitude": -46.659913582992424
    },
    {
        "name": "Place 409",
        "latitude": -23.3488264859341,
        "longitude": -46.42592964072394
    },
    {
        "name": "Place 410",
        "latitude": -24.17281299590845,
        "longitude": -46.99952730218687
    },
    {
        "name": "Place 411",
        "latitude": -23.309900234103846,
        "longitude": -46.60061566831122
    },
    {
        "name": "Place 412",
        "latitude": -23.473557762868886,
        "longitude": -46.6852151730933
    },
    {
        "name": "Place 413",
        "latitude": -23.59277974222507,
        "longitude": -46.76551279931023
    },
    {
        "name": "Place 414",
        "latitude": -23.707989171580024,
        "longitude": -46.53547385800795
    },
    {
        "name": "Place 415",
        "latitude": -23.746358074681616,
        "longitude": -46.00035992529755
    },
    {
        "name": "Place 416",
        "latitude": -23.010236258887996,
        "longitude": -46.34742193892297
    },
    {
        "name": "Place 417",
        "latitude": -23.526906350245596,
        "longitude": -46.64654335230724
    },
    {
        "name": "Place 418",
        "latitude": -23.185427999677746,
        "longitude": -47.072962113736715
    },
    {
        "name": "Place 419",
        "latitude": -23.414177141846224,
        "longitude": -46.95653336868859
    },
    {
        "name": "Place 420",
        "latitude": -23.007040902885173,
        "longitude": -46.532815893277245
    },
    {
        "name": "Place 421",
        "latitude": -23.727959484468048,
        "longitude": -46.28578177203266
    },
    {
        "name": "Place 422",
        "latitude": -23.649951158345086,
        "longitude": -46.626464591145876
    },
    {
        "name": "Place 423",
        "latitude": -23.493028595418643,
        "longitude": -46.7981329806595
    },
    {
        "name": "Place 424",
        "latitude": -23.881259871825847,
        "longitude": -46.092709859342996
    },
    {
        "name": "Place 425",
        "latitude": -23.699977918392605,
        "longitude": -46.12295215912679
    },
    {
        "name": "Place 426",
        "latitude": -23.692789630137856,
        "longitude": -47.255820966261666
    },
    {
        "name": "Place 427",
        "latitude": -23.568136008988613,
        "longitude": -45.941671896190215
    },
    {
        "name": "Place 428",
        "latitude": -23.546397148492876,
        "longitude": -46.686114244084514
    },
    {
        "name": "Place 429",
        "latitude": -23.214202667297556,
        "longitude": -47.028068579315836
    },
    {
        "name": "Place 430",
        "latitude": -23.74547840800409,
        "longitude": -47.24050280630939
    },
    {
        "name": "Place 431",
        "latitude": -23.531040036254456,
        "longitude": -46.61825231866925
    },
    {
        "name": "Place 432",
        "latitude": -23.802803252128815,
        "longitude": -47.36083895638777
    },
    {
        "name": "Place 433",
        "latitude": -23.04279703171451,
        "longitude": -46.39479390819206
    },
    {
        "name": "Place 434",
        "latitude": -23.966227856471217,
        "longitude": -46.4944414515002
    },
    {
        "name": "Place 435",
        "latitude": -23.476382162661,
        "longitude": -46.688728332814286
    },
    {
        "name": "Place 436",
        "latitude": -23.25175689152947,
        "longitude": -46.51647689555682
    },
    {
        "name": "Place 437",
        "latitude": -23.161997609582606,
        "longitude": -47.18903036319478
    },
    {
        "name": "Place 438",
        "latitude": -23.47056981270814,
        "longitude": -46.29547966373448
    },
    {
        "name": "Place 439",
        "latitude": -23.359421345194836,
        "longitude": -46.41318926639392
    },
    {
        "name": "Place 440",
        "latitude": -23.36343042758682,
        "longitude": -47.016499175524615
    },
    {
        "name": "Place 441",
        "latitude": -23.547106529790835,
        "longitude": -47.36110379578773
    },
    {
        "name": "Place 442",
        "latitude": -23.521052806093778,
        "longitude": -46.482707959829256
    },
    {
        "name": "Place 443",
        "latitude": -22.9726593599302,
        "longitude": -46.98161352148732
    },
    {
        "name": "Place 444",
        "latitude": -23.141099050002847,
        "longitude": -46.82051372731741
    },
    {
        "name": "Place 445",
        "latitude": -22.993337110953085,
        "longitude": -46.892370012334965
    },
    {
        "name": "Place 446",
        "latitude": -23.49396529607567,
        "longitude": -46.48029363754663
    },
    {
        "name": "Place 447",
        "latitude": -23.177538613276663,
        "longitude": -47.30748799633497
    },
    {
        "name": "Place 448",
        "latitude": -23.626094709338613,
        "longitude": -46.69117390054818
    },
    {
        "name": "Place 449",
        "latitude": -23.267362996577894,
        "longitude": -46.48781046838602
    },
    {
        "name": "Place 450",
        "latitude": -23.182896564186525,
        "longitude": -46.982938308350924
    },
    {
        "name": "Place 451",
        "latitude": -23.157316657901227,
        "longitude": -46.87517872664404
    },
    {
        "name": "Place 452",
        "latitude": -23.599599186626925,
        "longitude": -45.98533162390986
    },
    {
        "name": "Place 453",
        "latitude": -24.012677520463722,
        "longitude": -46.86815084590046
    },
    {
        "name": "Place 454",
        "latitude": -22.89376555795462,
        "longitude": -47.06235494816238
    },
    {
        "name": "Place 455",
        "latitude": -23.48087743342206,
        "longitude": -46.601594114834214
    },
    {
        "name": "Place 456",
        "latitude": -23.53756877670388,
        "longitude": -46.679811672074294
    },
    {
        "name": "Place 457",
        "latitude": -23.55008269000303,
        "longitude": -46.8707474577701
    },
    {
        "name": "Place 458",
        "latitude": -23.450956599688126,
        "longitude": -46.69964280434236
    },
    {
        "name": "Place 459",
        "latitude": -22.875488143996932,
        "longitude": -46.65354204804418
    },
    {
        "name": "Place 460",
        "latitude": -23.22941869513531,
        "longitude": -47.10255719078719
    },
    {
        "name": "Place 461",
        "latitude": -23.125676427145684,
        "longitude": -47.20439430736198
    },
    {
        "name": "Place 462",
        "latitude": -23.213798989124307,
        "longitude": -47.38813017954865
    },
    {
        "name": "Place 463",
        "latitude": -23.42488328201484,
        "longitude": -46.89292280890747
    },
    {
        "name": "Place 464",
        "latitude": -23.495399531251497,
        "longitude": -46.464750381671834
    },
    {
        "name": "Place 465",
        "latitude": -23.365133523316334,
        "longitude": -47.40450616511104
    },
    {
        "name": "Place 466",
        "latitude": -23.578006201837397,
        "longitude": -47.29051424651037
    },
    {
        "name": "Place 467",
        "latitude": -23.691741100046183,
        "longitude": -46.80184108390651
    },
    {
        "name": "Place 468",
        "latitude": -23.308934086353307,
        "longitude": -46.93406952559662
    },
    {
        "name": "Place 469",
        "latitude": -23.713659141285426,
        "longitude": -46.7008931037276
    },
    {
        "name": "Place 470",
        "latitude": -23.878513230813528,
        "longitude": -46.44307165030444
    },
    {
        "name": "Place 471",
        "latitude": -23.525801734757977,
        "longitude": -46.67270278124671
    },
    {
        "name": "Place 472",
        "latitude": -24.08032146588123,
        "longitude": -46.91911014213338
    },
    {
        "name": "Place 473",
        "latitude": -23.54616354264989,
        "longitude": -46.71742091711399
    },
    {
        "name": "Place 474",
        "latitude": -23.538887254667202,
        "longitude": -46.49984315964666
    },
    {
        "name": "Place 475",
        "latitude": -23.533542162300606,
        "longitude": -46.71044355245701
    },
    {
        "name": "Place 476",
        "latitude": -23.938389380121006,
        "longitude": -46.94343023402978
    },
    {
        "name": "Place 477",
        "latitude": -23.03425609703717,
        "longitude": -46.86727234435597
    },
    {
        "name": "Place 478",
        "latitude": -23.495901983790223,
        "longitude": -47.04674343327065
    },
    {
        "name": "Place 479",
        "latitude": -23.501901644751815,
        "longitude": -46.61596425349043
    },
    {
        "name": "Place 480",
        "latitude": -23.577410639101373,
        "longitude": -46.61880719709908
    },
    {
        "name": "Place 481",
        "latitude": -23.820574443447153,
        "longitude": -46.62248264696361
    },
    {
        "name": "Place 482",
        "latitude": -23.670623837025104,
        "longitude": -46.57013489225932
    },
    {
        "name": "Place 483",
        "latitude": -23.54797256159202,
        "longitude": -47.271871208354156
    },
    {
        "name": "Place 484",
        "latitude": -23.1342419803115,
        "longitude": -46.38784952220522
    },
    {
        "name": "Place 485",
        "latitude": -23.189019561590055,
        "longitude": -46.54149349744682
    },
    {
        "name": "Place 486",
        "latitude": -23.88358433604278,
        "longitude": -46.315544917702326
    },
    {
        "name": "Place 487",
        "latitude": -23.527171138392806,
        "longitude": -46.70465583366872
    },
    {
        "name": "Place 488",
        "latitude": -23.13089855044389,
        "longitude": -46.500891078584836
    },
    {
        "name": "Place 489",
        "latitude": -22.977804615502198,
        "longitude": -46.571800961935985
    },
    {
        "name": "Place 490",
        "latitude": -23.01584549843124,
        "longitude": -46.76190174799106
    },
    {
        "name": "Place 491",
        "latitude": -23.200531549734738,
        "longitude": -46.678178100627655
    },
    {
        "name": "Place 492",
        "latitude": -23.24514905174664,
        "longitude": -46.58168464627205
    },
    {
        "name": "Place 493",
        "latitude": -23.089100829695905,
        "longitude": -46.40934509409991
    },
    {
        "name": "Place 494",
        "latitude": -22.91513660997428,
        "longitude": -47.03605424552544
    },
    {
        "name": "Place 495",
        "latitude": -23.687568439777376,
        "longitude": -46.08121849366048
    },
    {
        "name": "Place 496",
        "latitude": -24.08745815536512,
        "longitude": -46.580085979593605
    },
    {
        "name": "Place 497",
        "latitude": -23.531824242553316,
        "longitude": -46.82849407282435
    },
    {
        "name": "Place 498",
        "latitude": -23.24018244784187,
        "longitude": -46.566424068269555
    },
    {
        "name": "Place 499",
        "latitude": -23.803567741960503,
        "longitude": -46.713253784490675
    },
    {
        "name": "Place 500",
        "latitude": -23.920999174707404,
        "longitude": -46.22359482673243
    },
    {
        "name": "Place 501",
        "latitude": -23.777390816771124,
        "longitude": -46.42098332436562
    },
    {
        "name": "Place 502",
        "latitude": -23.02418804251718,
        "longitude": -46.80319371906247
    },
    {
        "name": "Place 503",
        "latitude": -23.273009883218005,
        "longitude": -46.46402056957771
    },
    {
        "name": "Place 504",
        "latitude": -23.242673315216997,
        "longitude": -46.728798948751184
    },
    {
        "name": "Place 505",
        "latitude": -22.82534671330106,
        "longitude": -46.70412396484225
    },
    {
        "name": "Place 506",
        "latitude": -24.051367336895606,
        "longitude": -46.59722913070339
    },
    {
        "name": "Place 507",
        "latitude": -24.203179541943932,
        "longitude": -46.78851094341991
    },
    {
        "name": "Place 508",
        "latitude": -23.086890182346497,
        "longitude": -46.4786784004734
    },
    {
        "name": "Place 509",
        "latitude": -23.43608637299732,
        "longitude": -47.03888081427853
    },
    {
        "name": "Place 510",
        "latitude": -23.665288875492067,
        "longitude": -46.56807351807713
    }
]

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: -23.574358764461905, lng: -46.58184848218016 },
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
        ]

    });

    const markers = places.map((place, i) => {

        return new google.maps.Marker({
            position: { lat: place.latitude, lng: place.longitude },
            label: place.name,
        });

    });
    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",

    });


}

<script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDeuPrnXLEdE2_wCuO-_KTPF9mCDW1n8qY&callback=initMap&libraries=&v=weekly"
    async defer></script>