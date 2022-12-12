"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWarehouseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WarehouseOrderByWithAggregationInput_1 = require("../../../inputs/WarehouseOrderByWithAggregationInput");
const WarehouseScalarWhereWithAggregatesInput_1 = require("../../../inputs/WarehouseScalarWhereWithAggregatesInput");
const WarehouseWhereInput_1 = require("../../../inputs/WarehouseWhereInput");
const WarehouseScalarFieldEnum_1 = require("../../../../enums/WarehouseScalarFieldEnum");
let GroupByWarehouseArgs = class GroupByWarehouseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseWhereInput_1.WarehouseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseWhereInput_1.WarehouseWhereInput)
], GroupByWarehouseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WarehouseOrderByWithAggregationInput_1.WarehouseOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWarehouseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WarehouseScalarFieldEnum_1.WarehouseScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWarehouseArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WarehouseScalarWhereWithAggregatesInput_1.WarehouseScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WarehouseScalarWhereWithAggregatesInput_1.WarehouseScalarWhereWithAggregatesInput)
], GroupByWarehouseArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWarehouseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWarehouseArgs.prototype, "skip", void 0);
GroupByWarehouseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByWarehouseArgs);
exports.GroupByWarehouseArgs = GroupByWarehouseArgs;
