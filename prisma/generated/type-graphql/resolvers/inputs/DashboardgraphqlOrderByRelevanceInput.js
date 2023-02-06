"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlOrderByRelevanceFieldEnum_1 = require("../../enums/DashboardgraphqlOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardgraphqlOrderByRelevanceInput = class DashboardgraphqlOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlOrderByRelevanceFieldEnum_1.DashboardgraphqlOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardgraphqlOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlOrderByRelevanceInput.prototype, "search", void 0);
DashboardgraphqlOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardgraphqlOrderByRelevanceInput", {
        isAbstract: true
    })
], DashboardgraphqlOrderByRelevanceInput);
exports.DashboardgraphqlOrderByRelevanceInput = DashboardgraphqlOrderByRelevanceInput;
