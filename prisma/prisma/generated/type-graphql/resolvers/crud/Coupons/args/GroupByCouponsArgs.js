"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsOrderByWithAggregationInput_1 = require("../../../inputs/CouponsOrderByWithAggregationInput");
const CouponsScalarWhereWithAggregatesInput_1 = require("../../../inputs/CouponsScalarWhereWithAggregatesInput");
const CouponsWhereInput_1 = require("../../../inputs/CouponsWhereInput");
const CouponsScalarFieldEnum_1 = require("../../../../enums/CouponsScalarFieldEnum");
let GroupByCouponsArgs = class GroupByCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereInput_1.CouponsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereInput_1.CouponsWhereInput)
], GroupByCouponsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsOrderByWithAggregationInput_1.CouponsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCouponsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsScalarFieldEnum_1.CouponsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCouponsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsScalarWhereWithAggregatesInput_1.CouponsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsScalarWhereWithAggregatesInput_1.CouponsScalarWhereWithAggregatesInput)
], GroupByCouponsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCouponsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCouponsArgs.prototype, "skip", void 0);
GroupByCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCouponsArgs);
exports.GroupByCouponsArgs = GroupByCouponsArgs;
