"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlOrderByRelevanceInput_1 = require("../inputs/DashboardgraphqlOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput = class DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput.prototype, "urlValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput.prototype, "urlKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlOrderByRelevanceInput_1.DashboardgraphqlOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlOrderByRelevanceInput_1.DashboardgraphqlOrderByRelevanceInput)
], DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput);
exports.DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput = DashboardgraphqlOrderByWithRelationAndSearchRelevanceInput;
