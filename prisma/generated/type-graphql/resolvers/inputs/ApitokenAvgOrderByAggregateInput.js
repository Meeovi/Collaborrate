"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApitokenAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ApitokenAvgOrderByAggregateInput = class ApitokenAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ApitokenAvgOrderByAggregateInput.prototype, "token", void 0);
ApitokenAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ApitokenAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ApitokenAvgOrderByAggregateInput);
exports.ApitokenAvgOrderByAggregateInput = ApitokenAvgOrderByAggregateInput;
