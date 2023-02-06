"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiOrderByRelevanceFieldEnum_1 = require("../../enums/DashboardrestapiOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardrestapiOrderByRelevanceInput = class DashboardrestapiOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiOrderByRelevanceFieldEnum_1.DashboardrestapiOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardrestapiOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardrestapiOrderByRelevanceInput.prototype, "search", void 0);
DashboardrestapiOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardrestapiOrderByRelevanceInput", {
        isAbstract: true
    })
], DashboardrestapiOrderByRelevanceInput);
exports.DashboardrestapiOrderByRelevanceInput = DashboardrestapiOrderByRelevanceInput;
