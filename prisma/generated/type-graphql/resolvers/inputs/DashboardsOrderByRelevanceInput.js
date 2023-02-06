"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsOrderByRelevanceFieldEnum_1 = require("../../enums/DashboardsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardsOrderByRelevanceInput = class DashboardsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardsOrderByRelevanceFieldEnum_1.DashboardsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsOrderByRelevanceInput.prototype, "search", void 0);
DashboardsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardsOrderByRelevanceInput", {
        isAbstract: true
    })
], DashboardsOrderByRelevanceInput);
exports.DashboardsOrderByRelevanceInput = DashboardsOrderByRelevanceInput;
