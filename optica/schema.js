{
    "title": "proveedor",
    "required": [
       "_id",
       "nombre",
       "direccion",
       "tlf",
       "nif"
    ],
    "properties": {
      "_id": { "bsonType": "objectId" },
      "nombre": { "bsonType": "string" },
      "direccion": { "bsonType": "string" },
      "tlf": { "bsonType": "string" },
      "fax": { "bsonType": "number" },
      "nif": { "bsonType": "string" }
    }
  }

{
    "title": "gafas",
    "required": [
       "_id",
       "marca",
       "graduacion1",
       "graduacion2",
       "color1",
       "color2",
       "montura",
       "color montura",
       "precio",
       "empleado_venta"
    ],
    "properties": {
        "_id": { "bsonType": "objectId" },
        "marca": { "bsonType": "string" },
        "graduacion1": { "bsonType": "float" },
        "graduacion2": { "bsonType": "float" },
        "color1": { "bsonType": "string" },
        "color2":{ "bsonType": "string" },
        "montura":{ "bsonType": "string" },
        "color montura":{ "bsonType": "string" },
        "precio": { "bsonType": "string" },
        "comprador":{ "bsonType": "objectId" },
        "empleado_venta": { "bsonType": "objectId" }
    }
  }
{
    "title": "cliente",
    "required": [
       "_id",
       "nombre",
       "direccion",
       "tlf",
       "nif",
       "correo",
       "fecha_registro",
       "recomendacion"
    ],
    "properties": {
        "_id":{ "bsonType": "objectId" },
        "nombre": { "bsonType": "string" },
        "direccion": { "bsonType": "string" },
        "tlf": { "bsonType": "string" },
        "nif": { "bsonType": "string" },
        "correo": { "bsonType": "string" },
        "fecha_registro": { "bsonType": "" },
        "recomendacion":{ "bsonType": "objectId" }
        "compras":{"bsonType": "array", 
                    "items":"objectId"}
    }
  }