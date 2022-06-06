"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesOrderByWithAggregationInput_1 = require("../../../inputs/Url_rewritesOrderByWithAggregationInput");
const Url_rewritesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Url_rewritesScalarWhereWithAggregatesInput");
const Url_rewritesWhereInput_1 = require("../../../inputs/Url_rewritesWhereInput");
const Url_rewritesScalarFieldEnum_1 = require("../../../../enums/Url_rewritesScalarFieldEnum");
let GroupByUrl_rewritesArgs = class GroupByUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereInput_1.Url_rewritesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereInput_1.Url_rewritesWhereInput)
], GroupByUrl_rewritesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Url_rewritesOrderByWithAggregationInput_1.Url_rewritesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUrl_rewritesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Url_rewritesScalarFieldEnum_1.Url_rewritesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUrl_rewritesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesScalarWhereWithAggregatesInput_1.Url_rewritesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesScalarWhereWithAggregatesInput_1.Url_rewritesScalarWhereWithAggregatesInput)
], GroupByUrl_rewritesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUrl_rewritesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUrl_rewritesArgs.prototype, "skip", void 0);
GroupByUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByUrl_rewritesArgs);
exports.GroupByUrl_rewritesArgs = GroupByUrl_rewritesArgs;
