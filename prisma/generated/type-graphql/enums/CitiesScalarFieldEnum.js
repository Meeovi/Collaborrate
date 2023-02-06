"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CitiesScalarFieldEnum;
(function (CitiesScalarFieldEnum) {
    CitiesScalarFieldEnum["id"] = "id";
    CitiesScalarFieldEnum["name"] = "name";
    CitiesScalarFieldEnum["description"] = "description";
    CitiesScalarFieldEnum["state"] = "state";
    CitiesScalarFieldEnum["country"] = "country";
    CitiesScalarFieldEnum["postalCode"] = "postalCode";
    CitiesScalarFieldEnum["image"] = "image";
})(CitiesScalarFieldEnum = exports.CitiesScalarFieldEnum || (exports.CitiesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CitiesScalarFieldEnum, {
    name: "CitiesScalarFieldEnum",
    description: undefined,
});
