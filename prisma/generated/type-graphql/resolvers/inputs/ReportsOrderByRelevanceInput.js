"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsOrderByRelevanceFieldEnum_1 = require("../../enums/ReportsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ReportsOrderByRelevanceInput = class ReportsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportsOrderByRelevanceFieldEnum_1.ReportsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReportsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReportsOrderByRelevanceInput.prototype, "search", void 0);
ReportsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportsOrderByRelevanceInput", {
        isAbstract: true
    })
], ReportsOrderByRelevanceInput);
exports.ReportsOrderByRelevanceInput = ReportsOrderByRelevanceInput;
