"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsOrderByRelevanceInput_1 = require("../inputs/ReportsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReportsOrderByWithRelationAndSearchRelevanceInput = class ReportsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "customer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "subtotal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "applied_coupon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "ip_address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsOrderByRelevanceInput_1.ReportsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsOrderByRelevanceInput_1.ReportsOrderByRelevanceInput)
], ReportsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
ReportsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], ReportsOrderByWithRelationAndSearchRelevanceInput);
exports.ReportsOrderByWithRelationAndSearchRelevanceInput = ReportsOrderByWithRelationAndSearchRelevanceInput;
