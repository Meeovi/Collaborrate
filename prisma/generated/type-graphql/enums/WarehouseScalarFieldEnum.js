"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WarehouseScalarFieldEnum;
(function (WarehouseScalarFieldEnum) {
    WarehouseScalarFieldEnum["id"] = "id";
    WarehouseScalarFieldEnum["created_at"] = "created_at";
    WarehouseScalarFieldEnum["name"] = "name";
    WarehouseScalarFieldEnum["description"] = "description";
    WarehouseScalarFieldEnum["city"] = "city";
    WarehouseScalarFieldEnum["state"] = "state";
    WarehouseScalarFieldEnum["country"] = "country";
    WarehouseScalarFieldEnum["postal"] = "postal";
    WarehouseScalarFieldEnum["status"] = "status";
    WarehouseScalarFieldEnum["image"] = "image";
    WarehouseScalarFieldEnum["products"] = "products";
    WarehouseScalarFieldEnum["category"] = "category";
    WarehouseScalarFieldEnum["isPublic"] = "isPublic";
})(WarehouseScalarFieldEnum = exports.WarehouseScalarFieldEnum || (exports.WarehouseScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(WarehouseScalarFieldEnum, {
    name: "WarehouseScalarFieldEnum",
    description: undefined,
});
