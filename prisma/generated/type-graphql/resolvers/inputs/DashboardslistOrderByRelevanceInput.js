"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslistOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistOrderByRelevanceFieldEnum_1 = require("../../enums/DashboardslistOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardslistOrderByRelevanceInput = class DashboardslistOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslistOrderByRelevanceFieldEnum_1.DashboardslistOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardslistOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslistOrderByRelevanceInput.prototype, "search", void 0);
DashboardslistOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslistOrderByRelevanceInput", {
        isAbstract: true
    })
], DashboardslistOrderByRelevanceInput);
exports.DashboardslistOrderByRelevanceInput = DashboardslistOrderByRelevanceInput;
