"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesOrderByRelevanceInput_1 = require("../inputs/CitiesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CitiesOrderByWithRelationAndSearchRelevanceInput = class CitiesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithRelationAndSearchRelevanceInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithRelationAndSearchRelevanceInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithRelationAndSearchRelevanceInput.prototype, "postalCode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesOrderByRelevanceInput_1.CitiesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesOrderByRelevanceInput_1.CitiesOrderByRelevanceInput)
], CitiesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
CitiesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CitiesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], CitiesOrderByWithRelationAndSearchRelevanceInput);
exports.CitiesOrderByWithRelationAndSearchRelevanceInput = CitiesOrderByWithRelationAndSearchRelevanceInput;
