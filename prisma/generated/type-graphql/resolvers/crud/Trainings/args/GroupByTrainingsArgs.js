"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsOrderByWithAggregationInput_1 = require("../../../inputs/TrainingsOrderByWithAggregationInput");
const TrainingsScalarWhereWithAggregatesInput_1 = require("../../../inputs/TrainingsScalarWhereWithAggregatesInput");
const TrainingsWhereInput_1 = require("../../../inputs/TrainingsWhereInput");
const TrainingsScalarFieldEnum_1 = require("../../../../enums/TrainingsScalarFieldEnum");
let GroupByTrainingsArgs = class GroupByTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsWhereInput_1.TrainingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsWhereInput_1.TrainingsWhereInput)
], GroupByTrainingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TrainingsOrderByWithAggregationInput_1.TrainingsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTrainingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TrainingsScalarFieldEnum_1.TrainingsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTrainingsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TrainingsScalarWhereWithAggregatesInput_1.TrainingsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TrainingsScalarWhereWithAggregatesInput_1.TrainingsScalarWhereWithAggregatesInput)
], GroupByTrainingsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTrainingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTrainingsArgs.prototype, "skip", void 0);
GroupByTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTrainingsArgs);
exports.GroupByTrainingsArgs = GroupByTrainingsArgs;
