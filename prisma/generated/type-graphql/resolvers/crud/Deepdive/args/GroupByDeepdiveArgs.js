"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDeepdiveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveOrderByWithAggregationInput_1 = require("../../../inputs/DeepdiveOrderByWithAggregationInput");
const DeepdiveScalarWhereWithAggregatesInput_1 = require("../../../inputs/DeepdiveScalarWhereWithAggregatesInput");
const DeepdiveWhereInput_1 = require("../../../inputs/DeepdiveWhereInput");
const DeepdiveScalarFieldEnum_1 = require("../../../../enums/DeepdiveScalarFieldEnum");
let GroupByDeepdiveArgs = class GroupByDeepdiveArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveWhereInput_1.DeepdiveWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveWhereInput_1.DeepdiveWhereInput)
], GroupByDeepdiveArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DeepdiveOrderByWithAggregationInput_1.DeepdiveOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDeepdiveArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DeepdiveScalarFieldEnum_1.DeepdiveScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDeepdiveArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveScalarWhereWithAggregatesInput_1.DeepdiveScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveScalarWhereWithAggregatesInput_1.DeepdiveScalarWhereWithAggregatesInput)
], GroupByDeepdiveArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDeepdiveArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDeepdiveArgs.prototype, "skip", void 0);
GroupByDeepdiveArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDeepdiveArgs);
exports.GroupByDeepdiveArgs = GroupByDeepdiveArgs;
