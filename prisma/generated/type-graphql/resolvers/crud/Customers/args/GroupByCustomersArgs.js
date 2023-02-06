"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersOrderByWithAggregationInput_1 = require("../../../inputs/CustomersOrderByWithAggregationInput");
const CustomersScalarWhereWithAggregatesInput_1 = require("../../../inputs/CustomersScalarWhereWithAggregatesInput");
const CustomersWhereInput_1 = require("../../../inputs/CustomersWhereInput");
const CustomersScalarFieldEnum_1 = require("../../../../enums/CustomersScalarFieldEnum");
let GroupByCustomersArgs = class GroupByCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereInput_1.CustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereInput_1.CustomersWhereInput)
], GroupByCustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomersOrderByWithAggregationInput_1.CustomersOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCustomersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomersScalarFieldEnum_1.CustomersScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCustomersArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersScalarWhereWithAggregatesInput_1.CustomersScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersScalarWhereWithAggregatesInput_1.CustomersScalarWhereWithAggregatesInput)
], GroupByCustomersArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCustomersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCustomersArgs.prototype, "skip", void 0);
GroupByCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCustomersArgs);
exports.GroupByCustomersArgs = GroupByCustomersArgs;
