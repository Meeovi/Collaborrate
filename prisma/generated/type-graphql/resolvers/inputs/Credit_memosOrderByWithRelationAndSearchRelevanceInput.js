"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosOrderByRelevanceInput_1 = require("../inputs/Credit_memosOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Credit_memosOrderByWithRelationAndSearchRelevanceInput = class Credit_memosOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "credit_memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosOrderByRelevanceInput_1.Credit_memosOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosOrderByRelevanceInput_1.Credit_memosOrderByRelevanceInput)
], Credit_memosOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Credit_memosOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Credit_memosOrderByWithRelationAndSearchRelevanceInput);
exports.Credit_memosOrderByWithRelationAndSearchRelevanceInput = Credit_memosOrderByWithRelationAndSearchRelevanceInput;
