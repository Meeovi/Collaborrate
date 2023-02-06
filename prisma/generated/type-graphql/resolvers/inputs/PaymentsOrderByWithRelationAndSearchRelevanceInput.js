"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsOrderByRelevanceInput_1 = require("../inputs/PaymentsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PaymentsOrderByWithRelationAndSearchRelevanceInput = class PaymentsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "host_uri", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "redirect_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "redirect_url_app", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaymentsOrderByRelevanceInput_1.PaymentsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaymentsOrderByRelevanceInput_1.PaymentsOrderByRelevanceInput)
], PaymentsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
PaymentsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaymentsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], PaymentsOrderByWithRelationAndSearchRelevanceInput);
exports.PaymentsOrderByWithRelationAndSearchRelevanceInput = PaymentsOrderByWithRelationAndSearchRelevanceInput;
