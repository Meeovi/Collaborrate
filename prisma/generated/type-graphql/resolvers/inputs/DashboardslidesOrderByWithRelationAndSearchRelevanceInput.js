"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesOrderByRelevanceInput_1 = require("../inputs/DashboardslidesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardslidesOrderByWithRelationAndSearchRelevanceInput = class DashboardslidesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithRelationAndSearchRelevanceInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithRelationAndSearchRelevanceInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesOrderByRelevanceInput_1.DashboardslidesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesOrderByRelevanceInput_1.DashboardslidesOrderByRelevanceInput)
], DashboardslidesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
DashboardslidesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslidesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], DashboardslidesOrderByWithRelationAndSearchRelevanceInput);
exports.DashboardslidesOrderByWithRelationAndSearchRelevanceInput = DashboardslidesOrderByWithRelationAndSearchRelevanceInput;
