"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesOrderByWithAggregationInput_1 = require("../../../inputs/MessagesOrderByWithAggregationInput");
const MessagesScalarWhereWithAggregatesInput_1 = require("../../../inputs/MessagesScalarWhereWithAggregatesInput");
const MessagesWhereInput_1 = require("../../../inputs/MessagesWhereInput");
const MessagesScalarFieldEnum_1 = require("../../../../enums/MessagesScalarFieldEnum");
let GroupByMessagesArgs = class GroupByMessagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesWhereInput_1.MessagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesWhereInput_1.MessagesWhereInput)
], GroupByMessagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessagesOrderByWithAggregationInput_1.MessagesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMessagesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessagesScalarFieldEnum_1.MessagesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMessagesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesScalarWhereWithAggregatesInput_1.MessagesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesScalarWhereWithAggregatesInput_1.MessagesScalarWhereWithAggregatesInput)
], GroupByMessagesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMessagesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMessagesArgs.prototype, "skip", void 0);
GroupByMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMessagesArgs);
exports.GroupByMessagesArgs = GroupByMessagesArgs;
