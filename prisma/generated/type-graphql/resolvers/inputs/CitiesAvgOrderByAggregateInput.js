"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CitiesAvgOrderByAggregateInput = class CitiesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CitiesAvgOrderByAggregateInput.prototype, "id", void 0);
CitiesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CitiesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CitiesAvgOrderByAggregateInput);
exports.CitiesAvgOrderByAggregateInput = CitiesAvgOrderByAggregateInput;
