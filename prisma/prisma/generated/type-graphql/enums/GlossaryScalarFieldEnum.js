"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var GlossaryScalarFieldEnum;
(function (GlossaryScalarFieldEnum) {
    GlossaryScalarFieldEnum["id"] = "id";
    GlossaryScalarFieldEnum["name"] = "name";
    GlossaryScalarFieldEnum["content"] = "content";
    GlossaryScalarFieldEnum["image"] = "image";
    GlossaryScalarFieldEnum["published"] = "published";
})(GlossaryScalarFieldEnum = exports.GlossaryScalarFieldEnum || (exports.GlossaryScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(GlossaryScalarFieldEnum, {
    name: "GlossaryScalarFieldEnum",
    description: undefined,
});
