"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OotoOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoOrderByRelevanceInput_1 = require("../inputs/OotoOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OotoOrderByWithRelationAndSearchRelevanceInput = class OotoOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithRelationAndSearchRelevanceInput.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithRelationAndSearchRelevanceInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithRelationAndSearchRelevanceInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithRelationAndSearchRelevanceInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithRelationAndSearchRelevanceInput.prototype, "using_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OotoOrderByWithRelationAndSearchRelevanceInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoOrderByRelevanceInput_1.OotoOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OotoOrderByRelevanceInput_1.OotoOrderByRelevanceInput)
], OotoOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
OotoOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OotoOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], OotoOrderByWithRelationAndSearchRelevanceInput);
exports.OotoOrderByWithRelationAndSearchRelevanceInput = OotoOrderByWithRelationAndSearchRelevanceInput;
