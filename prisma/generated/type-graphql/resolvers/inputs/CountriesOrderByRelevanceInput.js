"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesOrderByRelevanceFieldEnum_1 = require("../../enums/CountriesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let CountriesOrderByRelevanceInput = class CountriesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountriesOrderByRelevanceFieldEnum_1.CountriesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CountriesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByRelevanceInput.prototype, "search", void 0);
CountriesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountriesOrderByRelevanceInput", {
        isAbstract: true
    })
], CountriesOrderByRelevanceInput);
exports.CountriesOrderByRelevanceInput = CountriesOrderByRelevanceInput;
