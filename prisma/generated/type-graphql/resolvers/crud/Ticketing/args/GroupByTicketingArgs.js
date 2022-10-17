"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTicketingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingOrderByWithAggregationInput_1 = require("../../../inputs/TicketingOrderByWithAggregationInput");
const TicketingScalarWhereWithAggregatesInput_1 = require("../../../inputs/TicketingScalarWhereWithAggregatesInput");
const TicketingWhereInput_1 = require("../../../inputs/TicketingWhereInput");
const TicketingScalarFieldEnum_1 = require("../../../../enums/TicketingScalarFieldEnum");
let GroupByTicketingArgs = class GroupByTicketingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingWhereInput_1.TicketingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingWhereInput_1.TicketingWhereInput)
], GroupByTicketingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingOrderByWithAggregationInput_1.TicketingOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTicketingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingScalarFieldEnum_1.TicketingScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTicketingArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingScalarWhereWithAggregatesInput_1.TicketingScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingScalarWhereWithAggregatesInput_1.TicketingScalarWhereWithAggregatesInput)
], GroupByTicketingArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTicketingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTicketingArgs.prototype, "skip", void 0);
GroupByTicketingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTicketingArgs);
exports.GroupByTicketingArgs = GroupByTicketingArgs;
