"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseWhereInput_1 = require("../../../inputs/KnowledgebaseWhereInput");
let DeleteManyKnowledgebaseArgs = class DeleteManyKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereInput_1.KnowledgebaseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereInput_1.KnowledgebaseWhereInput)
], DeleteManyKnowledgebaseArgs.prototype, "where", void 0);
DeleteManyKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyKnowledgebaseArgs);
exports.DeleteManyKnowledgebaseArgs = DeleteManyKnowledgebaseArgs;
