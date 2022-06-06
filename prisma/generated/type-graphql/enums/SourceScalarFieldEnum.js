"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SourceScalarFieldEnum;
(function (SourceScalarFieldEnum) {
    SourceScalarFieldEnum["id"] = "id";
    SourceScalarFieldEnum["name"] = "name";
    SourceScalarFieldEnum["code"] = "code";
    SourceScalarFieldEnum["enabled"] = "enabled";
    SourceScalarFieldEnum["description"] = "description";
    SourceScalarFieldEnum["latitude"] = "latitude";
    SourceScalarFieldEnum["longitude"] = "longitude";
    SourceScalarFieldEnum["pickup_location"] = "pickup_location";
    SourceScalarFieldEnum["contact_name"] = "contact_name";
    SourceScalarFieldEnum["email"] = "email";
    SourceScalarFieldEnum["phone"] = "phone";
    SourceScalarFieldEnum["fax"] = "fax";
    SourceScalarFieldEnum["country"] = "country";
    SourceScalarFieldEnum["state"] = "state";
    SourceScalarFieldEnum["city"] = "city";
    SourceScalarFieldEnum["street"] = "street";
    SourceScalarFieldEnum["postcode"] = "postcode";
})(SourceScalarFieldEnum = exports.SourceScalarFieldEnum || (exports.SourceScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SourceScalarFieldEnum, {
    name: "SourceScalarFieldEnum",
    description: undefined,
});
