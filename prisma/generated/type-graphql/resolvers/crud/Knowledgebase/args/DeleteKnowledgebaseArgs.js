"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseWhereUniqueInput_1 = require("../../../inputs/KnowledgebaseWhereUniqueInput");
let DeleteKnowledgebaseArgs = class DeleteKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput)
], DeleteKnowledgebaseArgs.prototype, "where", void 0);
DeleteKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteKnowledgebaseArgs);
exports.DeleteKnowledgebaseArgs = DeleteKnowledgebaseArgs;
