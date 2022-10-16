"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CommentsScalarFieldEnum;
(function (CommentsScalarFieldEnum) {
    CommentsScalarFieldEnum["id"] = "id";
    CommentsScalarFieldEnum["customer_name"] = "customer_name";
    CommentsScalarFieldEnum["description"] = "description";
    CommentsScalarFieldEnum["image"] = "image";
    CommentsScalarFieldEnum["response"] = "response";
    CommentsScalarFieldEnum["published"] = "published";
    CommentsScalarFieldEnum["cust_id"] = "cust_id";
    CommentsScalarFieldEnum["customers"] = "customers";
    CommentsScalarFieldEnum["mediamanager"] = "mediamanager";
    CommentsScalarFieldEnum["trainings"] = "trainings";
})(CommentsScalarFieldEnum = exports.CommentsScalarFieldEnum || (exports.CommentsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CommentsScalarFieldEnum, {
    name: "CommentsScalarFieldEnum",
    description: undefined,
});
