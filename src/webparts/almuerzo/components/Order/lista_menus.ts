export default{

    "oficinas": [
        "Oficina Mstech",
        "Oficina San Cristobal Seguros",
        "Oficina San Cristobal Caja Mutual",
        "Bolsa de Comercio Rosario",
        "Telecom Argentina",
        "Banco Municipal de Rosario"
    ],

    "turno": [
        "Turno 1",
        "Turno 2"
    ],


    
    "menus": [
        { //Menú 1
            "Menu": "Carne", //nombre del Menú
            "Props": [  
                "Tipo", //nombre de las propiedades
                "Guarnición"//NOTA: hay una cantidad definida de propiedades que son: "Tipo", "Guarnición", "Gustos", "Gusto especial", "Gratinada" y "Salsa"
            ],
            "Tipo": [ //opciones de la prop "Tipo"
                "Filet de pollo grillado",
                "Milanesa de carne",
                "Milanesa de carne napolitana",
                "Milanesa de pollo",
                "Milanesa de pollo napolitana",
                "Pizzanesa napolitana"
            ],
            "Guarnición": [ //opciones de la prop "Guarnición"
                "Arroz",
                "Ensalada",// <- hay un caso especial que es "Ensalada", que desencadena la prop "Gustos"
                "Puré de calabaza",
                "Puré de papa",
                "Puré mixto"
            ],

            "MAX": 3,   //maxima cantidad de gustos seleccionable
            "Gustos": [ //opciones de la prop "Gustos"
                "Apio",
                "Arroz",
                "Arroz integral",
                "Arvejas",
                "Calabaza", //NOTA: en el caso de poner una opcion llamada "Ensalada", asegurarse
                "Huevo",    //      de pasar "MAX" y "Gustos" con sus respectivos valores
                "Lechuga",
                "Lentejas",
                "Papa",
                "Radicheta",
                "Remolacha",
                "Repollo",
                "Rúcula",
                "Tomate",
                "Zanahoria"
            ],
        },
        { //Menú 2
            "Menu": "Ensalada para armar",
            "Props": [
                "Gusto especial",
                "Gustos"
            ],
            "MAX": 5,
            "Gustos": [
                "Apio",
                "Arroz",
                "Arroz integral",
                "Arvejas",
                "Calabaza",
                "Huevo",
                "Lechuga",
                "Lentejas",
                "Papa",
                "Radicheta",
                "Remolacha",
                "Repollo",
                "Rúcula",
                "Tomate",
                "Zanahoria",
                "Cebolla"
            ],
            "Gusto especial": [
                "Atún",
                "Choclo",
                "Jamón",
                "Morrón",
                "Palmito",
                "Pollo",
                "Queso"
            ]
        },
        {//Menú 3
            "Menu": "Omelette con guarnición",
            "Props": [
                "Tipo",
                "Guarnición"
            ],
            "Tipo": [
                "Jamón y queso",
                "Vejetales salteados",
                "Verdura"
            ],
            "Guarnición": [
                "Arroz",
                "Ensalada",
                "Puré de calabaza",
                "Puré de papa",
                "Puré mixto"
            ]
        },
        {//Menú 4
            "Menu": "Rolls",
            "Props": [
                "Tipo"
            ],
            "Tipo": [
                "César (Lechuga, queso rallado, crutones, aderezo césar y trozos de pollo)",
                "Capresse (Queso, Tomate y albahaca)"
            ]
        },
        {//Menú 5
            "Menu": "Pizzetas de arroz (Para Celíacos)",
            "Props": [
                "Tipo"
            ],
            "Tipo": [
                "4 quesos",
                "Especial",
                "Muzzarella",
                "Napolitana",
                "Rúcula, tomate y queso"
            ]
        },
        {//Menú 6
            "Menu": "Tartas con guarnición",
            "Props": [
                "Tipo",
                "Guarnición"
            ],
            "Tipo": [
                "Jamon, queso tomate y albahaca",
                "Jamón y queso",
                "Verdura",
                "Calabaza y queso"
            ],
            "Guarnición": [
                "Arroz",
                "Ensalada",
                "Puré de calabaza",
                "Puré de papa",
                "Puré mixto"
            ]
        },
        {//Menú 7
            "Menu": "Milanesas vegetarianas",
            "Props": [
                "Tipo",
                "Gratinada",
                "Guarnición"
            ],
            "Tipo": [
                "Arveja",
                "Calabaza",
                "Choclo",
                "Lenteja",
                "Soja",
                "Zanahoria"
            ],
            "Guarnición": [
                "Arroz",
                "Ensalada",
                "Puré de calabaza",
                "Puré de papa",
                "Puré mixto"
            ],
            "Gratinada": [0,1]
        },
        {//Menú 8
            "Menu": "Sándwich",
            "Props": [
                "Tipo"
            ],
            "Tipo": [
                "Carlitos especial",
                "Carlitos simple",
                "Hamburguesa especial",
                "Sandwich de jamon y queso",
                "Sandwich de pollo",
                "Sandwich primavera"
            ]
        },
        {//Menú 9
            "Menu": "Pasta",
            "Props": [
                "Tipo",
                "Salsa"
            ],
            "Tipo": [
                "Ñoquis",
                "Ravioles",
                "Tallarines"
            ],
            "Salsa": [
                "Tuco",
                "Blanca",
                "Mixta",
                "Bolognesa",
                "4 quesos"
            ]
        },
        {//Menú 10
            "Menu": "Menu del día",
            "Props": []
        }
    ]
}
