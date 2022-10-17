"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CommentsOrderByRelevanceFieldEnum;
(function (CommentsOrderByRelevanceFieldEnum) {
    CommentsOrderByRelevanceFieldEnum["customer_name"] = "customer_name";
    CommentsOrderByRelevanceFieldEnum["description"] = "description";
    CommentsOrderByRelevanceFieldEnum["image"] = "image";
    CommentsOrderByRelevanceFieldEnum["response"] = "response";
    CommentsOrderByRelevanceFieldEnum["customers"] = "customers";
    CommentsOrderByRelevanceFieldEnum["mediamanager"] = "mediamanager";
    CommentsOrderByRelevanceFieldEnum["trainings"] = "trainings";
})(CommentsOrderByRelevanceFieldEnum = exports.CommentsOrderByRelevanceFieldEnum || (exports.CommentsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(CommentsOrderByRelevanceFieldEnum, {
    name: "CommentsOrderByRelevanceFieldEnum",
    description: undefined,
});
