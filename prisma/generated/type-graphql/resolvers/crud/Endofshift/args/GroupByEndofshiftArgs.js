"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEndofshiftArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftOrderByWithAggregationInput_1 = require("../../../inputs/EndofshiftOrderByWithAggregationInput");
const EndofshiftScalarWhereWithAggregatesInput_1 = require("../../../inputs/EndofshiftScalarWhereWithAggregatesInput");
const EndofshiftWhereInput_1 = require("../../../inputs/EndofshiftWhereInput");
const EndofshiftScalarFieldEnum_1 = require("../../../../enums/EndofshiftScalarFieldEnum");
let GroupByEndofshiftArgs = class GroupByEndofshiftArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftWhereInput_1.EndofshiftWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftWhereInput_1.EndofshiftWhereInput)
], GroupByEndofshiftArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EndofshiftOrderByWithAggregationInput_1.EndofshiftOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEndofshiftArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EndofshiftScalarFieldEnum_1.EndofshiftScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByEndofshiftArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftScalarWhereWithAggregatesInput_1.EndofshiftScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftScalarWhereWithAggregatesInput_1.EndofshiftScalarWhereWithAggregatesInput)
], GroupByEndofshiftArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEndofshiftArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByEndofshiftArgs.prototype, "skip", void 0);
GroupByEndofshiftArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByEndofshiftArgs);
exports.GroupByEndofshiftArgs = GroupByEndofshiftArgs;
