"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let GlossaryMinOrderByAggregateInput = class GlossaryMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMinOrderByAggregateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMinOrderByAggregateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryMinOrderByAggregateInput.prototype, "published", void 0);
GlossaryMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlossaryMinOrderByAggregateInput", {
        isAbstract: true
    })
], GlossaryMinOrderByAggregateInput);
exports.GlossaryMinOrderByAggregateInput = GlossaryMinOrderByAggregateInput;
