"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsOrderByRelevanceInput_1 = require("../inputs/TransactionsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TransactionsOrderByWithRelationAndSearchRelevanceInput = class TransactionsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationAndSearchRelevanceInput.prototype, "order_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationAndSearchRelevanceInput.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationAndSearchRelevanceInput.prototype, "parent_transaction_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationAndSearchRelevanceInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationAndSearchRelevanceInput.prototype, "payment_method", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationAndSearchRelevanceInput.prototype, "closed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_payment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionsOrderByWithRelationAndSearchRelevanceInput.prototype, "orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsOrderByRelevanceInput_1.TransactionsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsOrderByRelevanceInput_1.TransactionsOrderByRelevanceInput)
], TransactionsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
TransactionsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], TransactionsOrderByWithRelationAndSearchRelevanceInput);
exports.TransactionsOrderByWithRelationAndSearchRelevanceInput = TransactionsOrderByWithRelationAndSearchRelevanceInput;
