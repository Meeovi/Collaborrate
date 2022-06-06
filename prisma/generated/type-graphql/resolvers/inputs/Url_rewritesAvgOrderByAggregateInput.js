"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Url_rewritesAvgOrderByAggregateInput = class Url_rewritesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesAvgOrderByAggregateInput.prototype, "id", void 0);
Url_rewritesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Url_rewritesAvgOrderByAggregateInput);
exports.Url_rewritesAvgOrderByAggregateInput = Url_rewritesAvgOrderByAggregateInput;
