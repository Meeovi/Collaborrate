"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Core_storeAvgOrderByAggregateInput = class Core_storeAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeAvgOrderByAggregateInput.prototype, "id", void 0);
Core_storeAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Core_storeAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Core_storeAvgOrderByAggregateInput);
exports.Core_storeAvgOrderByAggregateInput = Core_storeAvgOrderByAggregateInput;
