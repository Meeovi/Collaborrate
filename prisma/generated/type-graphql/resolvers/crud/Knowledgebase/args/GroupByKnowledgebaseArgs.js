"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByKnowledgebaseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const KnowledgebaseOrderByWithAggregationInput_1 = require("../../../inputs/KnowledgebaseOrderByWithAggregationInput");
const KnowledgebaseScalarWhereWithAggregatesInput_1 = require("../../../inputs/KnowledgebaseScalarWhereWithAggregatesInput");
const KnowledgebaseWhereInput_1 = require("../../../inputs/KnowledgebaseWhereInput");
const KnowledgebaseScalarFieldEnum_1 = require("../../../../enums/KnowledgebaseScalarFieldEnum");
let GroupByKnowledgebaseArgs = class GroupByKnowledgebaseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseWhereInput_1.KnowledgebaseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseWhereInput_1.KnowledgebaseWhereInput)
], GroupByKnowledgebaseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [KnowledgebaseOrderByWithAggregationInput_1.KnowledgebaseOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByKnowledgebaseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [KnowledgebaseScalarFieldEnum_1.KnowledgebaseScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByKnowledgebaseArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => KnowledgebaseScalarWhereWithAggregatesInput_1.KnowledgebaseScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", KnowledgebaseScalarWhereWithAggregatesInput_1.KnowledgebaseScalarWhereWithAggregatesInput)
], GroupByKnowledgebaseArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByKnowledgebaseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByKnowledgebaseArgs.prototype, "skip", void 0);
GroupByKnowledgebaseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByKnowledgebaseArgs);
exports.GroupByKnowledgebaseArgs = GroupByKnowledgebaseArgs;
