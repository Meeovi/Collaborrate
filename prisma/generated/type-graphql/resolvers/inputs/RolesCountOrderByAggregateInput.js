"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RolesCountOrderByAggregateInput = class RolesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesCountOrderByAggregateInput.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesCountOrderByAggregateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesCountOrderByAggregateInput.prototype, "created_at", void 0);
RolesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesCountOrderByAggregateInput", {
        isAbstract: true
    })
], RolesCountOrderByAggregateInput);
exports.RolesCountOrderByAggregateInput = RolesCountOrderByAggregateInput;
