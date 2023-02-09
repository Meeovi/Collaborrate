"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountriesOrderByRelevanceInput_1 = require("../inputs/CountriesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CountriesOrderByWithRelationAndSearchRelevanceInput = class CountriesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithRelationAndSearchRelevanceInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountriesOrderByWithRelationAndSearchRelevanceInput.prototype, "trainings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountriesOrderByRelevanceInput_1.CountriesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountriesOrderByRelevanceInput_1.CountriesOrderByRelevanceInput)
], CountriesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
CountriesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountriesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], CountriesOrderByWithRelationAndSearchRelevanceInput);
exports.CountriesOrderByWithRelationAndSearchRelevanceInput = CountriesOrderByWithRelationAndSearchRelevanceInput;
