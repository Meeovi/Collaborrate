"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonOrderByRelevanceFieldEnum_1 = require("../../enums/DashboardjsonOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardjsonOrderByRelevanceInput = class DashboardjsonOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonOrderByRelevanceFieldEnum_1.DashboardjsonOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardjsonOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardjsonOrderByRelevanceInput.prototype, "search", void 0);
DashboardjsonOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardjsonOrderByRelevanceInput", {
        isAbstract: true
    })
], DashboardjsonOrderByRelevanceInput);
exports.DashboardjsonOrderByRelevanceInput = DashboardjsonOrderByRelevanceInput;
