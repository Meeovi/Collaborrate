"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CustomersAvgOrderByAggregateInput = class CustomersAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomersAvgOrderByAggregateInput.prototype, "id", void 0);
CustomersAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CustomersAvgOrderByAggregateInput);
exports.CustomersAvgOrderByAggregateInput = CustomersAvgOrderByAggregateInput;
