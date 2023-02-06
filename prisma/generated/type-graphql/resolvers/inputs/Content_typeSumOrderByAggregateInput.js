"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Content_typeSumOrderByAggregateInput = class Content_typeSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeSumOrderByAggregateInput.prototype, "number", void 0);
Content_typeSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Content_typeSumOrderByAggregateInput", {
        isAbstract: true
    })
], Content_typeSumOrderByAggregateInput);
exports.Content_typeSumOrderByAggregateInput = Content_typeSumOrderByAggregateInput;
