"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseCreateInput_1 = require("../../../inputs/KnowledgebaseCreateInput");
const KnowledgebaseUpdateInput_1 = require("../../../inputs/KnowledgebaseUpdateInput");
const KnowledgebaseWhereUniqueInput_1 = require("../../../inputs/KnowledgebaseWhereUniqueInput");
let UpsertKnowledgebaseArgs = class UpsertKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput)
], UpsertKnowledgebaseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseCreateInput_1.KnowledgebaseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseCreateInput_1.KnowledgebaseCreateInput)
], UpsertKnowledgebaseArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseUpdateInput_1.KnowledgebaseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", KnowledgebaseUpdateInput_1.KnowledgebaseUpdateInput)
], UpsertKnowledgebaseArgs.prototype, "update", void 0);
UpsertKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertKnowledgebaseArgs);
exports.UpsertKnowledgebaseArgs = UpsertKnowledgebaseArgs;
