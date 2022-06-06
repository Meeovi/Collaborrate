"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesOrderByWithAggregationInput_1 = require("../../../inputs/CasesOrderByWithAggregationInput");
const CasesScalarWhereWithAggregatesInput_1 = require("../../../inputs/CasesScalarWhereWithAggregatesInput");
const CasesWhereInput_1 = require("../../../inputs/CasesWhereInput");
const CasesScalarFieldEnum_1 = require("../../../../enums/CasesScalarFieldEnum");
let GroupByCasesArgs = class GroupByCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereInput_1.CasesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesWhereInput_1.CasesWhereInput)
], GroupByCasesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CasesOrderByWithAggregationInput_1.CasesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCasesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CasesScalarFieldEnum_1.CasesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCasesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesScalarWhereWithAggregatesInput_1.CasesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesScalarWhereWithAggregatesInput_1.CasesScalarWhereWithAggregatesInput)
], GroupByCasesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCasesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCasesArgs.prototype, "skip", void 0);
GroupByCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCasesArgs);
exports.GroupByCasesArgs = GroupByCasesArgs;
