"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAgreementsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsOrderByWithAggregationInput_1 = require("../../../inputs/AgreementsOrderByWithAggregationInput");
const AgreementsScalarWhereWithAggregatesInput_1 = require("../../../inputs/AgreementsScalarWhereWithAggregatesInput");
const AgreementsWhereInput_1 = require("../../../inputs/AgreementsWhereInput");
const AgreementsScalarFieldEnum_1 = require("../../../../enums/AgreementsScalarFieldEnum");
let GroupByAgreementsArgs = class GroupByAgreementsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsWhereInput_1.AgreementsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsWhereInput_1.AgreementsWhereInput)
], GroupByAgreementsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgreementsOrderByWithAggregationInput_1.AgreementsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAgreementsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgreementsScalarFieldEnum_1.AgreementsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAgreementsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsScalarWhereWithAggregatesInput_1.AgreementsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsScalarWhereWithAggregatesInput_1.AgreementsScalarWhereWithAggregatesInput)
], GroupByAgreementsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAgreementsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAgreementsArgs.prototype, "skip", void 0);
GroupByAgreementsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAgreementsArgs);
exports.GroupByAgreementsArgs = GroupByAgreementsArgs;
