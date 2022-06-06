"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Newsletter_subscribersAvgOrderByAggregateInput = class Newsletter_subscribersAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersAvgOrderByAggregateInput.prototype, "cust_id", void 0);
Newsletter_subscribersAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Newsletter_subscribersAvgOrderByAggregateInput);
exports.Newsletter_subscribersAvgOrderByAggregateInput = Newsletter_subscribersAvgOrderByAggregateInput;
