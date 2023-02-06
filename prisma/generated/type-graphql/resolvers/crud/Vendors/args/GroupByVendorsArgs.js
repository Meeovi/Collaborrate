"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsOrderByWithAggregationInput_1 = require("../../../inputs/VendorsOrderByWithAggregationInput");
const VendorsScalarWhereWithAggregatesInput_1 = require("../../../inputs/VendorsScalarWhereWithAggregatesInput");
const VendorsWhereInput_1 = require("../../../inputs/VendorsWhereInput");
const VendorsScalarFieldEnum_1 = require("../../../../enums/VendorsScalarFieldEnum");
let GroupByVendorsArgs = class GroupByVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereInput_1.VendorsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsWhereInput_1.VendorsWhereInput)
], GroupByVendorsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VendorsOrderByWithAggregationInput_1.VendorsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVendorsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VendorsScalarFieldEnum_1.VendorsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVendorsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsScalarWhereWithAggregatesInput_1.VendorsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsScalarWhereWithAggregatesInput_1.VendorsScalarWhereWithAggregatesInput)
], GroupByVendorsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVendorsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVendorsArgs.prototype, "skip", void 0);
GroupByVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByVendorsArgs);
exports.GroupByVendorsArgs = GroupByVendorsArgs;
