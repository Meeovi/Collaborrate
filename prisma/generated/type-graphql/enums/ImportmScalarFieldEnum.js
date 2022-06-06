"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ImportmScalarFieldEnum;
(function (ImportmScalarFieldEnum) {
    ImportmScalarFieldEnum["id"] = "id";
    ImportmScalarFieldEnum["created_at"] = "created_at";
    ImportmScalarFieldEnum["name"] = "name";
    ImportmScalarFieldEnum["description"] = "description";
    ImportmScalarFieldEnum["file"] = "file";
    ImportmScalarFieldEnum["url"] = "url";
    ImportmScalarFieldEnum["image"] = "image";
})(ImportmScalarFieldEnum = exports.ImportmScalarFieldEnum || (exports.ImportmScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ImportmScalarFieldEnum, {
    name: "ImportmScalarFieldEnum",
    description: undefined,
});
