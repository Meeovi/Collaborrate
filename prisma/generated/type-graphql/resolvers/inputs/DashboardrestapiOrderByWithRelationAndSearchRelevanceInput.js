"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiOrderByRelevanceInput_1 = require("../inputs/DashboardrestapiOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardrestapiOrderByWithRelationAndSearchRelevanceInput = class DashboardrestapiOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithRelationAndSearchRelevanceInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithRelationAndSearchRelevanceInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithRelationAndSearchRelevanceInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithRelationAndSearchRelevanceInput.prototype, "authenticationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiOrderByRelevanceInput_1.DashboardrestapiOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiOrderByRelevanceInput_1.DashboardrestapiOrderByRelevanceInput)
], DashboardrestapiOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
DashboardrestapiOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardrestapiOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], DashboardrestapiOrderByWithRelationAndSearchRelevanceInput);
exports.DashboardrestapiOrderByWithRelationAndSearchRelevanceInput = DashboardrestapiOrderByWithRelationAndSearchRelevanceInput;
