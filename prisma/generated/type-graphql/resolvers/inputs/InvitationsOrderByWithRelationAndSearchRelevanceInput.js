"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InvitationsOrderByRelevanceInput_1 = require("../inputs/InvitationsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InvitationsOrderByWithRelationAndSearchRelevanceInput = class InvitationsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "invoiceDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "billingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "shippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "orderNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "grandTotalPurchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InvitationsOrderByRelevanceInput_1.InvitationsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InvitationsOrderByRelevanceInput_1.InvitationsOrderByRelevanceInput)
], InvitationsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
InvitationsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InvitationsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], InvitationsOrderByWithRelationAndSearchRelevanceInput);
exports.InvitationsOrderByWithRelationAndSearchRelevanceInput = InvitationsOrderByWithRelationAndSearchRelevanceInput;
