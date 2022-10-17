"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesAvgOrderByAggregateInput_1 = require("../inputs/MessagesAvgOrderByAggregateInput");
const MessagesCountOrderByAggregateInput_1 = require("../inputs/MessagesCountOrderByAggregateInput");
const MessagesMaxOrderByAggregateInput_1 = require("../inputs/MessagesMaxOrderByAggregateInput");
const MessagesMinOrderByAggregateInput_1 = require("../inputs/MessagesMinOrderByAggregateInput");
const MessagesSumOrderByAggregateInput_1 = require("../inputs/MessagesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MessagesOrderByWithAggregationInput = class MessagesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "from", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "sender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "staff_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesCountOrderByAggregateInput_1.MessagesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesCountOrderByAggregateInput_1.MessagesCountOrderByAggregateInput)
], MessagesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesAvgOrderByAggregateInput_1.MessagesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesAvgOrderByAggregateInput_1.MessagesAvgOrderByAggregateInput)
], MessagesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesMaxOrderByAggregateInput_1.MessagesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesMaxOrderByAggregateInput_1.MessagesMaxOrderByAggregateInput)
], MessagesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesMinOrderByAggregateInput_1.MessagesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesMinOrderByAggregateInput_1.MessagesMinOrderByAggregateInput)
], MessagesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessagesSumOrderByAggregateInput_1.MessagesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessagesSumOrderByAggregateInput_1.MessagesSumOrderByAggregateInput)
], MessagesOrderByWithAggregationInput.prototype, "_sum", void 0);
MessagesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessagesOrderByWithAggregationInput", {
        isAbstract: true
    })
], MessagesOrderByWithAggregationInput);
exports.MessagesOrderByWithAggregationInput = MessagesOrderByWithAggregationInput;
