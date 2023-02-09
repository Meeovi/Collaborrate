"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsAvgOrderByAggregateInput = class TagsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsAvgOrderByAggregateInput.prototype, "id", void 0);
TagsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TagsAvgOrderByAggregateInput);
exports.TagsAvgOrderByAggregateInput = TagsAvgOrderByAggregateInput;
