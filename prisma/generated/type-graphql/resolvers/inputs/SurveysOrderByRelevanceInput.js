"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const SurveysOrderByRelevanceFieldEnum_1 = require("../../enums/SurveysOrderByRelevanceFieldEnum");
let SurveysOrderByRelevanceInput = class SurveysOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SurveysOrderByRelevanceFieldEnum_1.SurveysOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SurveysOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SurveysOrderByRelevanceInput.prototype, "search", void 0);
SurveysOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SurveysOrderByRelevanceInput", {
        isAbstract: true
    })
], SurveysOrderByRelevanceInput);
exports.SurveysOrderByRelevanceInput = SurveysOrderByRelevanceInput;
