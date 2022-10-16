"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const StocksOrderByRelevanceFieldEnum_1 = require("../../enums/StocksOrderByRelevanceFieldEnum");
let StocksOrderByRelevanceInput = class StocksOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksOrderByRelevanceFieldEnum_1.StocksOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], StocksOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StocksOrderByRelevanceInput.prototype, "search", void 0);
StocksOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StocksOrderByRelevanceInput", {
        isAbstract: true
    })
], StocksOrderByRelevanceInput);
exports.StocksOrderByRelevanceInput = StocksOrderByRelevanceInput;
