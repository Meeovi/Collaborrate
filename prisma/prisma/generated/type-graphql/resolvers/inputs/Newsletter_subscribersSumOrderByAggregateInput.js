"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Newsletter_subscribersSumOrderByAggregateInput = class Newsletter_subscribersSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersSumOrderByAggregateInput.prototype, "cust_id", void 0);
Newsletter_subscribersSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersSumOrderByAggregateInput", {
        isAbstract: true
    })
], Newsletter_subscribersSumOrderByAggregateInput);
exports.Newsletter_subscribersSumOrderByAggregateInput = Newsletter_subscribersSumOrderByAggregateInput;
