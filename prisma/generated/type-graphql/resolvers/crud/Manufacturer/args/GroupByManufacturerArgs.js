"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByManufacturerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ManufacturerOrderByWithAggregationInput_1 = require("../../../inputs/ManufacturerOrderByWithAggregationInput");
const ManufacturerScalarWhereWithAggregatesInput_1 = require("../../../inputs/ManufacturerScalarWhereWithAggregatesInput");
const ManufacturerWhereInput_1 = require("../../../inputs/ManufacturerWhereInput");
const ManufacturerScalarFieldEnum_1 = require("../../../../enums/ManufacturerScalarFieldEnum");
let GroupByManufacturerArgs = class GroupByManufacturerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerWhereInput_1.ManufacturerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerWhereInput_1.ManufacturerWhereInput)
], GroupByManufacturerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerOrderByWithAggregationInput_1.ManufacturerOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByManufacturerArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerScalarFieldEnum_1.ManufacturerScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByManufacturerArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ManufacturerScalarWhereWithAggregatesInput_1.ManufacturerScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ManufacturerScalarWhereWithAggregatesInput_1.ManufacturerScalarWhereWithAggregatesInput)
], GroupByManufacturerArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByManufacturerArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByManufacturerArgs.prototype, "skip", void 0);
GroupByManufacturerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByManufacturerArgs);
exports.GroupByManufacturerArgs = GroupByManufacturerArgs;
