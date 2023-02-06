"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationOrderByWithAggregationInput_1 = require("../../../inputs/InternalizationOrderByWithAggregationInput");
const InternalizationScalarWhereWithAggregatesInput_1 = require("../../../inputs/InternalizationScalarWhereWithAggregatesInput");
const InternalizationWhereInput_1 = require("../../../inputs/InternalizationWhereInput");
const InternalizationScalarFieldEnum_1 = require("../../../../enums/InternalizationScalarFieldEnum");
let GroupByInternalizationArgs = class GroupByInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereInput_1.InternalizationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationWhereInput_1.InternalizationWhereInput)
], GroupByInternalizationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationOrderByWithAggregationInput_1.InternalizationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInternalizationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationScalarFieldEnum_1.InternalizationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInternalizationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationScalarWhereWithAggregatesInput_1.InternalizationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationScalarWhereWithAggregatesInput_1.InternalizationScalarWhereWithAggregatesInput)
], GroupByInternalizationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInternalizationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInternalizationArgs.prototype, "skip", void 0);
GroupByInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByInternalizationArgs);
exports.GroupByInternalizationArgs = GroupByInternalizationArgs;
