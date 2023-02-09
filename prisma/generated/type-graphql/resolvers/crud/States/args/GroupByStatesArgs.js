"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesOrderByWithAggregationInput_1 = require("../../../inputs/StatesOrderByWithAggregationInput");
const StatesScalarWhereWithAggregatesInput_1 = require("../../../inputs/StatesScalarWhereWithAggregatesInput");
const StatesWhereInput_1 = require("../../../inputs/StatesWhereInput");
const StatesScalarFieldEnum_1 = require("../../../../enums/StatesScalarFieldEnum");
let GroupByStatesArgs = class GroupByStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereInput_1.StatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesWhereInput_1.StatesWhereInput)
], GroupByStatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatesOrderByWithAggregationInput_1.StatesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatesScalarFieldEnum_1.StatesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStatesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesScalarWhereWithAggregatesInput_1.StatesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesScalarWhereWithAggregatesInput_1.StatesScalarWhereWithAggregatesInput)
], GroupByStatesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStatesArgs.prototype, "skip", void 0);
GroupByStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByStatesArgs);
exports.GroupByStatesArgs = GroupByStatesArgs;
