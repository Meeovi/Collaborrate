"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesOrderByRelevanceFieldEnum_1 = require("../../enums/CitiesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let CitiesOrderByRelevanceInput = class CitiesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CitiesOrderByRelevanceFieldEnum_1.CitiesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CitiesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByRelevanceInput.prototype, "search", void 0);
CitiesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CitiesOrderByRelevanceInput", {
        isAbstract: true
    })
], CitiesOrderByRelevanceInput);
exports.CitiesOrderByRelevanceInput = CitiesOrderByRelevanceInput;
