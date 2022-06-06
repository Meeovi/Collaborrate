"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseWhereUniqueInput_1 = require("../../../inputs/KnowledgebaseWhereUniqueInput");
let FindUniqueKnowledgebaseArgs = class FindUniqueKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput)
], FindUniqueKnowledgebaseArgs.prototype, "where", void 0);
FindUniqueKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueKnowledgebaseArgs);
exports.FindUniqueKnowledgebaseArgs = FindUniqueKnowledgebaseArgs;
