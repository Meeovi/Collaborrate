"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesOrderByRelevanceInput_1 = require("../inputs/ZonesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ZonesOrderByWithRelationAndSearchRelevanceInput = class ZonesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithRelationAndSearchRelevanceInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithRelationAndSearchRelevanceInput.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithRelationAndSearchRelevanceInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithRelationAndSearchRelevanceInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesOrderByWithRelationAndSearchRelevanceInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesOrderByRelevanceInput_1.ZonesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ZonesOrderByRelevanceInput_1.ZonesOrderByRelevanceInput)
], ZonesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
ZonesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ZonesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], ZonesOrderByWithRelationAndSearchRelevanceInput);
exports.ZonesOrderByWithRelationAndSearchRelevanceInput = ZonesOrderByWithRelationAndSearchRelevanceInput;
