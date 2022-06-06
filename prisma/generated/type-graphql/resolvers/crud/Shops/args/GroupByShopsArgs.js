"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsOrderByWithAggregationInput_1 = require("../../../inputs/ShopsOrderByWithAggregationInput");
const ShopsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ShopsScalarWhereWithAggregatesInput");
const ShopsWhereInput_1 = require("../../../inputs/ShopsWhereInput");
const ShopsScalarFieldEnum_1 = require("../../../../enums/ShopsScalarFieldEnum");
let GroupByShopsArgs = class GroupByShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereInput_1.ShopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsWhereInput_1.ShopsWhereInput)
], GroupByShopsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShopsOrderByWithAggregationInput_1.ShopsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShopsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShopsScalarFieldEnum_1.ShopsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShopsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsScalarWhereWithAggregatesInput_1.ShopsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsScalarWhereWithAggregatesInput_1.ShopsScalarWhereWithAggregatesInput)
], GroupByShopsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShopsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShopsArgs.prototype, "skip", void 0);
GroupByShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByShopsArgs);
exports.GroupByShopsArgs = GroupByShopsArgs;
