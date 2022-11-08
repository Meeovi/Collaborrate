"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CountriesScalarFieldEnum;
(function (CountriesScalarFieldEnum) {
    CountriesScalarFieldEnum["id"] = "id";
    CountriesScalarFieldEnum["name"] = "name";
    CountriesScalarFieldEnum["description"] = "description";
    CountriesScalarFieldEnum["image"] = "image";
    CountriesScalarFieldEnum["region"] = "region";
    CountriesScalarFieldEnum["trainings"] = "trainings";
})(CountriesScalarFieldEnum = exports.CountriesScalarFieldEnum || (exports.CountriesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CountriesScalarFieldEnum, {
    name: "CountriesScalarFieldEnum",
    description: undefined,
});
