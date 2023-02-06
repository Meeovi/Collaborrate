"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PluginsAvgOrderByAggregateInput = class PluginsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsAvgOrderByAggregateInput.prototype, "id", void 0);
PluginsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PluginsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], PluginsAvgOrderByAggregateInput);
exports.PluginsAvgOrderByAggregateInput = PluginsAvgOrderByAggregateInput;
