"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesOrderByWithAggregationInput_1 = require("../../../inputs/ZonesOrderByWithAggregationInput");
const ZonesScalarWhereWithAggregatesInput_1 = require("../../../inputs/ZonesScalarWhereWithAggregatesInput");
const ZonesWhereInput_1 = require("../../../inputs/ZonesWhereInput");
const ZonesScalarFieldEnum_1 = require("../../../../enums/ZonesScalarFieldEnum");
let GroupByZonesArgs = class GroupByZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereInput_1.ZonesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesWhereInput_1.ZonesWhereInput)
], GroupByZonesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ZonesOrderByWithAggregationInput_1.ZonesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByZonesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ZonesScalarFieldEnum_1.ZonesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByZonesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesScalarWhereWithAggregatesInput_1.ZonesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesScalarWhereWithAggregatesInput_1.ZonesScalarWhereWithAggregatesInput)
], GroupByZonesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByZonesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByZonesArgs.prototype, "skip", void 0);
GroupByZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByZonesArgs);
exports.GroupByZonesArgs = GroupByZonesArgs;
