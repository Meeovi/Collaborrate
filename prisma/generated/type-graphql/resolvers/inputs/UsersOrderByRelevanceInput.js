"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const UsersOrderByRelevanceFieldEnum_1 = require("../../enums/UsersOrderByRelevanceFieldEnum");
let UsersOrderByRelevanceInput = class UsersOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsersOrderByRelevanceFieldEnum_1.UsersOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UsersOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsersOrderByRelevanceInput.prototype, "search", void 0);
UsersOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsersOrderByRelevanceInput", {
        isAbstract: true
    })
], UsersOrderByRelevanceInput);
exports.UsersOrderByRelevanceInput = UsersOrderByRelevanceInput;
