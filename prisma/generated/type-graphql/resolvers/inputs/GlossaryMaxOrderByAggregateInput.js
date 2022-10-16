"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let GlossaryMaxOrderByAggregateInput = class GlossaryMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMaxOrderByAggregateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMaxOrderByAggregateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMaxOrderByAggregateInput.prototype, "published", void 0);
GlossaryMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlossaryMaxOrderByAggregateInput", {
        isAbstract: true
    })
], GlossaryMaxOrderByAggregateInput);
exports.GlossaryMaxOrderByAggregateInput = GlossaryMaxOrderByAggregateInput;
