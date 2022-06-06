"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesOrderByWithAggregationInput_1 = require("../../../inputs/Gift_certificatesOrderByWithAggregationInput");
const Gift_certificatesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Gift_certificatesScalarWhereWithAggregatesInput");
const Gift_certificatesWhereInput_1 = require("../../../inputs/Gift_certificatesWhereInput");
const Gift_certificatesScalarFieldEnum_1 = require("../../../../enums/Gift_certificatesScalarFieldEnum");
let GroupByGift_certificatesArgs = class GroupByGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesWhereInput_1.Gift_certificatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesWhereInput_1.Gift_certificatesWhereInput)
], GroupByGift_certificatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gift_certificatesOrderByWithAggregationInput_1.Gift_certificatesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByGift_certificatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gift_certificatesScalarFieldEnum_1.Gift_certificatesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByGift_certificatesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gift_certificatesScalarWhereWithAggregatesInput_1.Gift_certificatesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Gift_certificatesScalarWhereWithAggregatesInput_1.Gift_certificatesScalarWhereWithAggregatesInput)
], GroupByGift_certificatesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByGift_certificatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByGift_certificatesArgs.prototype, "skip", void 0);
GroupByGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByGift_certificatesArgs);
exports.GroupByGift_certificatesArgs = GroupByGift_certificatesArgs;
