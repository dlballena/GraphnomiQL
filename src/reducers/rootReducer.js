// import each action type so the reducers can recognize actions
import * as actionTypes from '../constants/actionTypes';

//
const initialState = {
  schema: {
    "data": {
      "__schema": {
        "queryType": {
          "name": "Query"
        },
        "mutationType": null,
        "subscriptionType": null,
        "types": [
          {
            "kind": "OBJECT",
            "name": "Query",
            "description": null,
            "fields": [
              {
                "name": "business",
                "description": null,
                "args": [
                  {
                    "name": "id",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "locale",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Business",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "reviews",
                "description": null,
                "args": [
                  {
                    "name": "business",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "locale",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Reviews",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "phone_search",
                "description": null,
                "args": [
                  {
                    "name": "phone",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Businesses",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "search",
                "description": null,
                "args": [
                  {
                    "name": "term",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "location",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "country",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "offset",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "limit",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "sort_by",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "locale",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "longitude",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Float",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "latitude",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Float",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "categories",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "open_now",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "open_at",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "price",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "attributes",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "radius",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Float",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Businesses",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Business",
            "description": null,
            "fields": [
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "id",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "is_claimed",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "is_closed",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "url",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "phone",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "display_phone",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "review_count",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "categories",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Category",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "rating",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "location",
                "description": null,
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Location",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "coordinates",
                "description": null,
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Coordinates",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "photos",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "hours",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Hours",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "reviews",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Review",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "String",
            "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "Boolean",
            "description": "The `Boolean` scalar type represents `true` or `false`.",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "Int",
            "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^53 - 1) and 2^53 - 1 since represented in JSON as double-precision floating point numbers specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Category",
            "description": null,
            "fields": [
              {
                "name": "title",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "alias",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "Float",
            "description": "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Location",
            "description": null,
            "fields": [
              {
                "name": "address1",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "address2",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "address3",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "city",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "state",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "zip_code",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "country",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "formatted_address",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Coordinates",
            "description": null,
            "fields": [
              {
                "name": "latitude",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "longitude",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Hours",
            "description": null,
            "fields": [
              {
                "name": "hours_type",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "open",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "OpenHours",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "is_open_now",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "OpenHours",
            "description": null,
            "fields": [
              {
                "name": "is_overnight",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "end",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "start",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "day",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Review",
            "description": null,
            "fields": [
              {
                "name": "rating",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "user",
                "description": null,
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "text",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "time_created",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "url",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "User",
            "description": null,
            "fields": [
              {
                "name": "image_url",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Reviews",
            "description": null,
            "fields": [
              {
                "name": "review",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Review",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "total",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Businesses",
            "description": null,
            "fields": [
              {
                "name": "business",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Business",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "total",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Schema",
            "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation and subscription operations.",
            "fields": [
              {
                "name": "types",
                "description": "A list of all types supported by this server.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__Type",
                        "ofType": null
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "queryType",
                "description": "The type that query operations will be rooted at.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "mutationType",
                "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "subscriptionType",
                "description": "If this server support subscription, the type that subscription operations will be rooted at.",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "directives",
                "description": "A list of all directives supported by this server.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__Directive",
                        "ofType": null
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Type",
            "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
            "fields": [
              {
                "name": "kind",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "__TypeKind",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "fields",
                "description": null,
                "args": [
                  {
                    "name": "includeDeprecated",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null
                    },
                    "defaultValue": "false"
                  }
                ],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Field",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "interfaces",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "possibleTypes",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "enumValues",
                "description": null,
                "args": [
                  {
                    "name": "includeDeprecated",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null
                    },
                    "defaultValue": "false"
                  }
                ],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__EnumValue",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "inputFields",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ofType",
                "description": null,
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "ENUM",
            "name": "__TypeKind",
            "description": "An enum describing what kind of type a given `__Type` is",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": [
              {
                "name": "SCALAR",
                "description": "Indicates this type is a scalar.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "OBJECT",
                "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INTERFACE",
                "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "UNION",
                "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ENUM",
                "description": "Indicates this type is an enum. `enumValues` is a valid field.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INPUT_OBJECT",
                "description": "Indicates this type is an input object. `inputFields` is a valid field.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "LIST",
                "description": "Indicates this type is a list. `ofType` is a valid field.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "NON_NULL",
                "description": "Indicates this type is a non-null. `ofType` is a valid field.",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Field",
            "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
            "fields": [
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "args",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__InputValue",
                        "ofType": null
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "type",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "isDeprecated",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deprecationReason",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__InputValue",
            "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
            "fields": [
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "type",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "defaultValue",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__EnumValue",
            "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
            "fields": [
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "isDeprecated",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deprecationReason",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Directive",
            "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
            "fields": [
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "locations",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "__DirectiveLocation",
                        "ofType": null
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "args",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__InputValue",
                        "ofType": null
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "onOperation",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": true,
                "deprecationReason": "Use `locations`."
              },
              {
                "name": "onFragment",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": true,
                "deprecationReason": "Use `locations`."
              },
              {
                "name": "onField",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": true,
                "deprecationReason": "Use `locations`."
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "ENUM",
            "name": "__DirectiveLocation",
            "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": [
              {
                "name": "QUERY",
                "description": "Location adjacent to a query operation.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "MUTATION",
                "description": "Location adjacent to a mutation operation.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "SUBSCRIPTION",
                "description": "Location adjacent to a subscription operation.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "FIELD",
                "description": "Location adjacent to a field.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "FRAGMENT_DEFINITION",
                "description": "Location adjacent to a fragment definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "FRAGMENT_SPREAD",
                "description": "Location adjacent to a fragment spread.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INLINE_FRAGMENT",
                "description": "Location adjacent to an inline fragment.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "SCHEMA",
                "description": "Location adjacent to a schema definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "SCALAR",
                "description": "Location adjacent to a scalar definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "OBJECT",
                "description": "Location adjacent to an object definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "FIELD_DEFINITION",
                "description": "Location adjacent to a field definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ARGUMENT_DEFINITION",
                "description": "Location adjacent to an argument definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INTERFACE",
                "description": "Location adjacent to an interface definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "UNION",
                "description": "Location adjacent to a union definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ENUM",
                "description": "Location adjacent to an enum definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ENUM_VALUE",
                "description": "Location adjacent to an enum value definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INPUT_OBJECT",
                "description": "Location adjacent to an input object definition.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INPUT_FIELD_DEFINITION",
                "description": "Location adjacent to an input object field definition.",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "possibleTypes": null
          }
        ],
        "directives": [
          {
            "name": "include",
            "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
            "locations": [
              "FIELD",
              "FRAGMENT_SPREAD",
              "INLINE_FRAGMENT"
            ],
            "args": [
              {
                "name": "if",
                "description": "Included when true.",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ]
          },
          {
            "name": "skip",
            "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
            "locations": [
              "FIELD",
              "FRAGMENT_SPREAD",
              "INLINE_FRAGMENT"
            ],
            "args": [
              {
                "name": "if",
                "description": "Skipped when true.",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ]
          }
        ]
      }
    }
  }
  ,
  // typeList: [],
  selectedNode: {
    currentNodeId: null, // current name for the selected node
    currentEdgeId: null, // current relationship (should only change when clicking on ofType of row)
    scalar: null, // (should only be used for editing portion)
  },
  graph: {
    // research D3 & viz
    svg: null,
    focusElementId: null,
  },
  errorMsg: null,
};

const rootReducer = (prevState = initialState, action) => {
  const { type } = action;
  switch(type) {
    // add schema to state upon inputting introspection result
    case actionTypes.CHANGE_SCHEMA: {
      return {
        ...prevState,
        schema: actionTypes.payload,
        selectedNode: initialState.selectedNode, 
        graph: initialState.graph     
      };
    }

    // case actionTypes.CHANGE_SCHEMA_FILTER_TYPES: {
    //   return {
    //     ...prevState,
    //     schema: actionTypes.payload,
    //     typeList: actionTypes.payload.data.__schema.types.filter((type) => {
    //       return (type.name.charAt(0) !== "_" && type.name.charAt(1) !== "_" && type.kind !== "SCALAR" && type.kind !== "ENUM" && type.name.toLowerCase() !== "mutation")
    //     }),
    //     selectedNode: initialState.selectedNode, 
    //     graph: initialState.graph     
    //   }
    // }
    // render svg string to show graph
    case actionTypes.SVG_RENDERING_COMPLETED: {
      return {
        ...prevState,
        graph: {
          ...prevState.graph,
          svg: actionTypes.payload,
        }        
      };
    }
    // action for selecting on a node        
    case actionTypes.SELECT_NODE: {
      const currentNodeId = actionTypes.payload;
      if (currentNodeId === prevState.selectedNode.currentNodeId) return prevState;
      return {
        ...prevState,
        selectedNode: {
          ...prevState.selectedNode,
          currentNodeId,
          currentEdgeId: null,
          scalar: null,
        },
      };
    }
    // action for adding selected edge into state
    case actionTypes.SELECT_EDGE: {
      let currentEdgeId = actionTypes.payload;
      if (currentEdgeId === previousState.selectedNode.currentEdgeId) {
        return {
          ...prevState,
          selectedNode: {
            ...prevState.selectedNode,
            currentEdgeId: null,
            scalar:null,
          },
        };
      };
      let nodeId = extractTypeId(currentEdgeId);
      return {
        ...prevState,
        selectedNode: {
          ...prevState.selectedNode,
          currentNodeId: nodeId,
          currentEdgeId,
          scalar: null
        },
      };
    }
    // clear selected node
    case actionTypes.CLEAR_SELECTION: {
      return {
        ...prevState,
        selectedNode: initialState.selectedNode,
      };
    }
    // action to focus on an edge, node, or field 
    case actionTypes.FOCUS_ELEMENT: {
      return {
        ...prevState,
        graph: {
          ...prevState.graph,
          focusElementId: actionTypes.payload,
        },
      };
    }
    // action completed focus on edge, node, or field
    case actionTypes.FOCUS_ELEMENT_DONE: {
      if (prevState.graph.focusElementId !== actionTypes.payload) return prevState;
      return {
        ...prevState,
        graph: {
          ...prevState.graph,
          focusElementId: null,
        },
      };
    }
    // action for reporting any errors
    case actionTypes.REPORT_ERROR: {
      return {
        ...prevState,
        errorMsg: actionTypes.payload,
        errorMsg: initialState.errorMsg,
      };
    }

    // set default
    default: {
      return prevState;
    }   
  }
}

export default rootReducer;