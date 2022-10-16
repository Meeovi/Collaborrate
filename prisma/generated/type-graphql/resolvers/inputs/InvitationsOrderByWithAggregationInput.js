"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsAvgOrderByAggregateInput_1 = require("../inputs/InvitationsAvgOrderByAggregateInput");
const InvitationsCountOrderByAggregateInput_1 = require("../inputs/InvitationsCountOrderByAggregateInput");
const InvitationsMaxOrderByAggregateInput_1 = require("../inputs/InvitationsMaxOrderByAggregateInput");
const InvitationsMinOrderByAggregateInput_1 = require("../inputs/InvitationsMinOrderByAggregateInput");
const InvitationsSumOrderByAggregateInput_1 = require("../inputs/InvitationsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InvitationsOrderByWithAggregationInput = class InvitationsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "invoiceDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "billingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "shippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "orderNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "grandTotalPurchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsCountOrderByAggregateInput_1.InvitationsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsCountOrderByAggregateInput_1.InvitationsCountOrderByAggregateInput)
], InvitationsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsAvgOrderByAggregateInput_1.InvitationsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsAvgOrderByAggregateInput_1.InvitationsAvgOrderByAggregateInput)
], InvitationsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsMaxOrderByAggregateInput_1.InvitationsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsMaxOrderByAggregateInput_1.InvitationsMaxOrderByAggregateInput)
], InvitationsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsMinOrderByAggregateInput_1.InvitationsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsMinOrderByAggregateInput_1.InvitationsMinOrderByAggregateInput)
], InvitationsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsSumOrderByAggregateInput_1.InvitationsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsSumOrderByAggregateInput_1.InvitationsSumOrderByAggregateInput)
], InvitationsOrderByWithAggregationInput.prototype, "_sum", void 0);
InvitationsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InvitationsOrderByWithAggregationInput", {
        isAbstract: true
    })
], InvitationsOrderByWithAggregationInput);
exports.InvitationsOrderByWithAggregationInput = InvitationsOrderByWithAggregationInput;
