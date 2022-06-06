"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let OpportunitiesAvgOrderByAggregateInput = class OpportunitiesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OpportunitiesAvgOrderByAggregateInput.prototype, "id", void 0);
OpportunitiesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OpportunitiesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], OpportunitiesAvgOrderByAggregateInput);
exports.OpportunitiesAvgOrderByAggregateInput = OpportunitiesAvgOrderByAggregateInput;
