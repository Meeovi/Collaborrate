"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DashboardjsonScalarFieldEnum;
(function (DashboardjsonScalarFieldEnum) {
    DashboardjsonScalarFieldEnum["id"] = "id";
    DashboardjsonScalarFieldEnum["name"] = "name";
    DashboardjsonScalarFieldEnum["url"] = "url";
    DashboardjsonScalarFieldEnum["description"] = "description";
    DashboardjsonScalarFieldEnum["definition"] = "definition";
    DashboardjsonScalarFieldEnum["format"] = "format";
})(DashboardjsonScalarFieldEnum = exports.DashboardjsonScalarFieldEnum || (exports.DashboardjsonScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DashboardjsonScalarFieldEnum, {
    name: "DashboardjsonScalarFieldEnum",
    description: undefined,
});
