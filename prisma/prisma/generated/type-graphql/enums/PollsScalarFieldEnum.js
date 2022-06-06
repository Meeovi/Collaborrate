"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PollsScalarFieldEnum;
(function (PollsScalarFieldEnum) {
    PollsScalarFieldEnum["id"] = "id";
    PollsScalarFieldEnum["name"] = "name";
    PollsScalarFieldEnum["excerpt"] = "excerpt";
    PollsScalarFieldEnum["description"] = "description";
    PollsScalarFieldEnum["image"] = "image";
    PollsScalarFieldEnum["published"] = "published";
    PollsScalarFieldEnum["question"] = "question";
    PollsScalarFieldEnum["response"] = "response";
    PollsScalarFieldEnum["categories"] = "categories";
    PollsScalarFieldEnum["articles"] = "articles";
    PollsScalarFieldEnum["products"] = "products";
    PollsScalarFieldEnum["customers"] = "customers";
    PollsScalarFieldEnum["users"] = "users";
})(PollsScalarFieldEnum = exports.PollsScalarFieldEnum || (exports.PollsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PollsScalarFieldEnum, {
    name: "PollsScalarFieldEnum",
    description: undefined,
});
