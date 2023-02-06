"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPartnersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersOrderByWithAggregationInput_1 = require("../../../inputs/PartnersOrderByWithAggregationInput");
const PartnersScalarWhereWithAggregatesInput_1 = require("../../../inputs/PartnersScalarWhereWithAggregatesInput");
const PartnersWhereInput_1 = require("../../../inputs/PartnersWhereInput");
const PartnersScalarFieldEnum_1 = require("../../../../enums/PartnersScalarFieldEnum");
let GroupByPartnersArgs = class GroupByPartnersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersWhereInput_1.PartnersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersWhereInput_1.PartnersWhereInput)
], GroupByPartnersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersOrderByWithAggregationInput_1.PartnersOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPartnersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersScalarFieldEnum_1.PartnersScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPartnersArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersScalarWhereWithAggregatesInput_1.PartnersScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersScalarWhereWithAggregatesInput_1.PartnersScalarWhereWithAggregatesInput)
], GroupByPartnersArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPartnersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPartnersArgs.prototype, "skip", void 0);
GroupByPartnersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPartnersArgs);
exports.GroupByPartnersArgs = GroupByPartnersArgs;
