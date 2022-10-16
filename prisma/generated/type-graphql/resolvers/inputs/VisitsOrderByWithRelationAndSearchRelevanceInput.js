"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsOrderByRelevanceInput_1 = require("../inputs/VisitsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VisitsOrderByWithRelationAndSearchRelevanceInput = class VisitsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "reason", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "emergency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "meeting", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsOrderByRelevanceInput_1.VisitsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsOrderByRelevanceInput_1.VisitsOrderByRelevanceInput)
], VisitsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
VisitsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisitsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], VisitsOrderByWithRelationAndSearchRelevanceInput);
exports.VisitsOrderByWithRelationAndSearchRelevanceInput = VisitsOrderByWithRelationAndSearchRelevanceInput;
