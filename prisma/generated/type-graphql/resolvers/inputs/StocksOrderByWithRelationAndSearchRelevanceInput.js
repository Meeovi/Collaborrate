"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksOrderByRelevanceInput_1 = require("../inputs/StocksOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StocksOrderByWithRelationAndSearchRelevanceInput = class StocksOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithRelationAndSearchRelevanceInput.prototype, "enabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithRelationAndSearchRelevanceInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByWithRelationAndSearchRelevanceInput.prototype, "sources", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksOrderByRelevanceInput_1.StocksOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksOrderByRelevanceInput_1.StocksOrderByRelevanceInput)
], StocksOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
StocksOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StocksOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], StocksOrderByWithRelationAndSearchRelevanceInput);
exports.StocksOrderByWithRelationAndSearchRelevanceInput = StocksOrderByWithRelationAndSearchRelevanceInput;
