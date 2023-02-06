"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LogInAvgOrderByAggregateInput = class LogInAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LogInAvgOrderByAggregateInput.prototype, "id", void 0);
LogInAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LogInAvgOrderByAggregateInput", {
        isAbstract: true
    })
], LogInAvgOrderByAggregateInput);
exports.LogInAvgOrderByAggregateInput = LogInAvgOrderByAggregateInput;
