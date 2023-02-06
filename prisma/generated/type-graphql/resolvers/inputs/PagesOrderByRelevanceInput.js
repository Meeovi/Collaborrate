"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesOrderByRelevanceFieldEnum_1 = require("../../enums/PagesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let PagesOrderByRelevanceInput = class PagesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesOrderByRelevanceFieldEnum_1.PagesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PagesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByRelevanceInput.prototype, "search", void 0);
PagesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesOrderByRelevanceInput", {
        isAbstract: true
    })
], PagesOrderByRelevanceInput);
exports.PagesOrderByRelevanceInput = PagesOrderByRelevanceInput;
