"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesOrderByWithAggregationInput_1 = require("../../../inputs/PagesOrderByWithAggregationInput");
const PagesScalarWhereWithAggregatesInput_1 = require("../../../inputs/PagesScalarWhereWithAggregatesInput");
const PagesWhereInput_1 = require("../../../inputs/PagesWhereInput");
const PagesScalarFieldEnum_1 = require("../../../../enums/PagesScalarFieldEnum");
let GroupByPagesArgs = class GroupByPagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereInput_1.PagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereInput_1.PagesWhereInput)
], GroupByPagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesOrderByWithAggregationInput_1.PagesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPagesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesScalarFieldEnum_1.PagesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPagesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesScalarWhereWithAggregatesInput_1.PagesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesScalarWhereWithAggregatesInput_1.PagesScalarWhereWithAggregatesInput)
], GroupByPagesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPagesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPagesArgs.prototype, "skip", void 0);
GroupByPagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPagesArgs);
exports.GroupByPagesArgs = GroupByPagesArgs;
