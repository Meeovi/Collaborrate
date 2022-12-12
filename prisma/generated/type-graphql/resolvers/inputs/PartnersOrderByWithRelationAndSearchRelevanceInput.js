"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersOrderByRelevanceInput_1 = require("../inputs/PartnersOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PartnersOrderByWithRelationAndSearchRelevanceInput = class PartnersOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithRelationAndSearchRelevanceInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithRelationAndSearchRelevanceInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithRelationAndSearchRelevanceInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithRelationAndSearchRelevanceInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithRelationAndSearchRelevanceInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByWithRelationAndSearchRelevanceInput.prototype, "business_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PartnersOrderByRelevanceInput_1.PartnersOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PartnersOrderByRelevanceInput_1.PartnersOrderByRelevanceInput)
], PartnersOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
PartnersOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PartnersOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], PartnersOrderByWithRelationAndSearchRelevanceInput);
exports.PartnersOrderByWithRelationAndSearchRelevanceInput = PartnersOrderByWithRelationAndSearchRelevanceInput;
