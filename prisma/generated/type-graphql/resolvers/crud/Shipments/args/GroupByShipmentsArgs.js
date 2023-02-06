"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsOrderByWithAggregationInput_1 = require("../../../inputs/ShipmentsOrderByWithAggregationInput");
const ShipmentsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ShipmentsScalarWhereWithAggregatesInput");
const ShipmentsWhereInput_1 = require("../../../inputs/ShipmentsWhereInput");
const ShipmentsScalarFieldEnum_1 = require("../../../../enums/ShipmentsScalarFieldEnum");
let GroupByShipmentsArgs = class GroupByShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereInput_1.ShipmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereInput_1.ShipmentsWhereInput)
], GroupByShipmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShipmentsOrderByWithAggregationInput_1.ShipmentsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShipmentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShipmentsScalarFieldEnum_1.ShipmentsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShipmentsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsScalarWhereWithAggregatesInput_1.ShipmentsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsScalarWhereWithAggregatesInput_1.ShipmentsScalarWhereWithAggregatesInput)
], GroupByShipmentsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShipmentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShipmentsArgs.prototype, "skip", void 0);
GroupByShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByShipmentsArgs);
exports.GroupByShipmentsArgs = GroupByShipmentsArgs;
