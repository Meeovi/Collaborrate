"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Url_rewritesCountOrderByAggregateInput = class Url_rewritesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCountOrderByAggregateInput.prototype, "request_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCountOrderByAggregateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCountOrderByAggregateInput.prototype, "redirect_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCountOrderByAggregateInput.prototype, "target_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesCountOrderByAggregateInput.prototype, "store", void 0);
Url_rewritesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesCountOrderByAggregateInput", {
        isAbstract: true
    })
], Url_rewritesCountOrderByAggregateInput);
exports.Url_rewritesCountOrderByAggregateInput = Url_rewritesCountOrderByAggregateInput;
