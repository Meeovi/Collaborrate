"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDiscountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsOrderByWithAggregationInput_1 = require("../../../inputs/DiscountsOrderByWithAggregationInput");
const DiscountsScalarWhereWithAggregatesInput_1 = require("../../../inputs/DiscountsScalarWhereWithAggregatesInput");
const DiscountsWhereInput_1 = require("../../../inputs/DiscountsWhereInput");
const DiscountsScalarFieldEnum_1 = require("../../../../enums/DiscountsScalarFieldEnum");
let GroupByDiscountsArgs = class GroupByDiscountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsWhereInput_1.DiscountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsWhereInput_1.DiscountsWhereInput)
], GroupByDiscountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DiscountsOrderByWithAggregationInput_1.DiscountsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDiscountsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DiscountsScalarFieldEnum_1.DiscountsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDiscountsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsScalarWhereWithAggregatesInput_1.DiscountsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DiscountsScalarWhereWithAggregatesInput_1.DiscountsScalarWhereWithAggregatesInput)
], GroupByDiscountsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDiscountsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDiscountsArgs.prototype, "skip", void 0);
GroupByDiscountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDiscountsArgs);
exports.GroupByDiscountsArgs = GroupByDiscountsArgs;
