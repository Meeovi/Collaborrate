"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Url_rewritesMinOrderByAggregateInput = class Url_rewritesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMinOrderByAggregateInput.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMinOrderByAggregateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMinOrderByAggregateInput.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMinOrderByAggregateInput.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesMinOrderByAggregateInput.prototype, "store", void 0);
Url_rewritesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesMinOrderByAggregateInput", {
        isAbstract: true
    })
], Url_rewritesMinOrderByAggregateInput);
exports.Url_rewritesMinOrderByAggregateInput = Url_rewritesMinOrderByAggregateInput;
