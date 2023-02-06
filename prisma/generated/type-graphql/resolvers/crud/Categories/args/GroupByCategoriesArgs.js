"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoriesOrderByWithAggregationInput_1 = require("../../../inputs/CategoriesOrderByWithAggregationInput");
const CategoriesScalarWhereWithAggregatesInput_1 = require("../../../inputs/CategoriesScalarWhereWithAggregatesInput");
const CategoriesWhereInput_1 = require("../../../inputs/CategoriesWhereInput");
const CategoriesScalarFieldEnum_1 = require("../../../../enums/CategoriesScalarFieldEnum");
let GroupByCategoriesArgs = class GroupByCategoriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesWhereInput_1.CategoriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesWhereInput_1.CategoriesWhereInput)
], GroupByCategoriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesOrderByWithAggregationInput_1.CategoriesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCategoriesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoriesScalarFieldEnum_1.CategoriesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCategoriesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoriesScalarWhereWithAggregatesInput_1.CategoriesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoriesScalarWhereWithAggregatesInput_1.CategoriesScalarWhereWithAggregatesInput)
], GroupByCategoriesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCategoriesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCategoriesArgs.prototype, "skip", void 0);
GroupByCategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCategoriesArgs);
exports.GroupByCategoriesArgs = GroupByCategoriesArgs;
