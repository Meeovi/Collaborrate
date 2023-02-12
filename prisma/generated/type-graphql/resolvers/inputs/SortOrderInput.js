"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullsOrder_1 = require("../../enums/NullsOrder");
const SortOrder_1 = require("../../enums/SortOrder");
let SortOrderInput = class SortOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SortOrderInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullsOrder_1.NullsOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SortOrderInput.prototype, "nulls", void 0);
SortOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SortOrderInput", {
        isAbstract: true
    })
], SortOrderInput);
exports.SortOrderInput = SortOrderInput;
