"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCredit_memosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosOrderByWithAggregationInput_1 = require("../../../inputs/Credit_memosOrderByWithAggregationInput");
const Credit_memosScalarWhereWithAggregatesInput_1 = require("../../../inputs/Credit_memosScalarWhereWithAggregatesInput");
const Credit_memosWhereInput_1 = require("../../../inputs/Credit_memosWhereInput");
const Credit_memosScalarFieldEnum_1 = require("../../../../enums/Credit_memosScalarFieldEnum");
let GroupByCredit_memosArgs = class GroupByCredit_memosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosWhereInput_1.Credit_memosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosWhereInput_1.Credit_memosWhereInput)
], GroupByCredit_memosArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosOrderByWithAggregationInput_1.Credit_memosOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCredit_memosArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Credit_memosScalarFieldEnum_1.Credit_memosScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCredit_memosArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosScalarWhereWithAggregatesInput_1.Credit_memosScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosScalarWhereWithAggregatesInput_1.Credit_memosScalarWhereWithAggregatesInput)
], GroupByCredit_memosArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCredit_memosArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCredit_memosArgs.prototype, "skip", void 0);
GroupByCredit_memosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCredit_memosArgs);
exports.GroupByCredit_memosArgs = GroupByCredit_memosArgs;
