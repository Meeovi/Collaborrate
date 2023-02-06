"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonOrderByRelevanceInput_1 = require("../inputs/DashboardjsonOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardjsonOrderByWithRelationAndSearchRelevanceInput = class DashboardjsonOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithRelationAndSearchRelevanceInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithRelationAndSearchRelevanceInput.prototype, "definition", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByWithRelationAndSearchRelevanceInput.prototype, "format", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonOrderByRelevanceInput_1.DashboardjsonOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonOrderByRelevanceInput_1.DashboardjsonOrderByRelevanceInput)
], DashboardjsonOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
DashboardjsonOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardjsonOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], DashboardjsonOrderByWithRelationAndSearchRelevanceInput);
exports.DashboardjsonOrderByWithRelationAndSearchRelevanceInput = DashboardjsonOrderByWithRelationAndSearchRelevanceInput;
