"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseOrderByWithRelationInput_1 = require("../../../inputs/KnowledgebaseOrderByWithRelationInput");
const KnowledgebaseWhereInput_1 = require("../../../inputs/KnowledgebaseWhereInput");
const KnowledgebaseWhereUniqueInput_1 = require("../../../inputs/KnowledgebaseWhereUniqueInput");
let AggregateKnowledgebaseArgs = class AggregateKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereInput_1.KnowledgebaseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereInput_1.KnowledgebaseWhereInput)
], AggregateKnowledgebaseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [KnowledgebaseOrderByWithRelationInput_1.KnowledgebaseOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateKnowledgebaseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereUniqueInput_1.KnowledgebaseWhereUniqueInput)
], AggregateKnowledgebaseArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateKnowledgebaseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateKnowledgebaseArgs.prototype, "skip", void 0);
AggregateKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateKnowledgebaseArgs);
exports.AggregateKnowledgebaseArgs = AggregateKnowledgebaseArgs;
