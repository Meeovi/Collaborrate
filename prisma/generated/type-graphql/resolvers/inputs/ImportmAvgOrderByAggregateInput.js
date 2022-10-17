"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ImportmAvgOrderByAggregateInput = class ImportmAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ImportmAvgOrderByAggregateInput.prototype, "id", void 0);
ImportmAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ImportmAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ImportmAvgOrderByAggregateInput);
exports.ImportmAvgOrderByAggregateInput = ImportmAvgOrderByAggregateInput;
