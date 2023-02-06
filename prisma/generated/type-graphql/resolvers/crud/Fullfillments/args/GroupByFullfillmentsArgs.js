"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsOrderByWithAggregationInput_1 = require("../../../inputs/FullfillmentsOrderByWithAggregationInput");
const FullfillmentsScalarWhereWithAggregatesInput_1 = require("../../../inputs/FullfillmentsScalarWhereWithAggregatesInput");
const FullfillmentsWhereInput_1 = require("../../../inputs/FullfillmentsWhereInput");
const FullfillmentsScalarFieldEnum_1 = require("../../../../enums/FullfillmentsScalarFieldEnum");
let GroupByFullfillmentsArgs = class GroupByFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereInput_1.FullfillmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereInput_1.FullfillmentsWhereInput)
], GroupByFullfillmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FullfillmentsOrderByWithAggregationInput_1.FullfillmentsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFullfillmentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FullfillmentsScalarFieldEnum_1.FullfillmentsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFullfillmentsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsScalarWhereWithAggregatesInput_1.FullfillmentsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsScalarWhereWithAggregatesInput_1.FullfillmentsScalarWhereWithAggregatesInput)
], GroupByFullfillmentsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFullfillmentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFullfillmentsArgs.prototype, "skip", void 0);
GroupByFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByFullfillmentsArgs);
exports.GroupByFullfillmentsArgs = GroupByFullfillmentsArgs;
