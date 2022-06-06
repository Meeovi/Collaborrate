"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var KnowledgebaseScalarFieldEnum;
(function (KnowledgebaseScalarFieldEnum) {
    KnowledgebaseScalarFieldEnum["id"] = "id";
    KnowledgebaseScalarFieldEnum["created_at"] = "created_at";
    KnowledgebaseScalarFieldEnum["name"] = "name";
    KnowledgebaseScalarFieldEnum["status"] = "status";
    KnowledgebaseScalarFieldEnum["revision"] = "revision";
    KnowledgebaseScalarFieldEnum["content"] = "content";
    KnowledgebaseScalarFieldEnum["resolution"] = "resolution";
    KnowledgebaseScalarFieldEnum["author"] = "author";
    KnowledgebaseScalarFieldEnum["approver"] = "approver";
    KnowledgebaseScalarFieldEnum["date_modified"] = "date_modified";
})(KnowledgebaseScalarFieldEnum = exports.KnowledgebaseScalarFieldEnum || (exports.KnowledgebaseScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(KnowledgebaseScalarFieldEnum, {
    name: "KnowledgebaseScalarFieldEnum",
    description: undefined,
});
