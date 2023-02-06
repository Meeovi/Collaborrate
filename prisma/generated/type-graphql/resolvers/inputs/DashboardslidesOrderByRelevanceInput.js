"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesOrderByRelevanceFieldEnum_1 = require("../../enums/DashboardslidesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardslidesOrderByRelevanceInput = class DashboardslidesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesOrderByRelevanceFieldEnum_1.DashboardslidesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardslidesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DashboardslidesOrderByRelevanceInput.prototype, "search", void 0);
DashboardslidesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslidesOrderByRelevanceInput", {
        isAbstract: true
    })
], DashboardslidesOrderByRelevanceInput);
exports.DashboardslidesOrderByRelevanceInput = DashboardslidesOrderByRelevanceInput;
