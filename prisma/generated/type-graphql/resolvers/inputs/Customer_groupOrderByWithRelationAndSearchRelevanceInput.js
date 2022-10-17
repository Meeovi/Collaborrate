"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupOrderByRelevanceInput_1 = require("../inputs/Customer_groupOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_groupOrderByWithRelationAndSearchRelevanceInput = class Customer_groupOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationAndSearchRelevanceInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationAndSearchRelevanceInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithRelationAndSearchRelevanceInput.prototype, "coverPhoto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupOrderByRelevanceInput_1.Customer_groupOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupOrderByRelevanceInput_1.Customer_groupOrderByRelevanceInput)
], Customer_groupOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Customer_groupOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Customer_groupOrderByWithRelationAndSearchRelevanceInput);
exports.Customer_groupOrderByWithRelationAndSearchRelevanceInput = Customer_groupOrderByWithRelationAndSearchRelevanceInput;
