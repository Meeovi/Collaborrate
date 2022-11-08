"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RolesMinOrderByAggregateInput = class RolesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesMinOrderByAggregateInput.prototype, "role_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesMinOrderByAggregateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RolesMinOrderByAggregateInput.prototype, "created_at", void 0);
RolesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesMinOrderByAggregateInput", {
        isAbstract: true
    })
], RolesMinOrderByAggregateInput);
exports.RolesMinOrderByAggregateInput = RolesMinOrderByAggregateInput;
