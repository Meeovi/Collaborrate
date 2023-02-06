"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsOrderByRelevanceInput_1 = require("../inputs/FullfillmentsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FullfillmentsOrderByWithRelationAndSearchRelevanceInput = class FullfillmentsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "shipping_zones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "company", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "address_two", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "zipcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "country_area", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "pickup", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "stock", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsOrderByRelevanceInput_1.FullfillmentsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FullfillmentsOrderByRelevanceInput_1.FullfillmentsOrderByRelevanceInput)
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
FullfillmentsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FullfillmentsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], FullfillmentsOrderByWithRelationAndSearchRelevanceInput);
exports.FullfillmentsOrderByWithRelationAndSearchRelevanceInput = FullfillmentsOrderByWithRelationAndSearchRelevanceInput;
