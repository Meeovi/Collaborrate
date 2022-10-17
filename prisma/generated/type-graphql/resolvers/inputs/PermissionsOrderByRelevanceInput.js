"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsOrderByRelevanceFieldEnum_1 = require("../../enums/PermissionsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let PermissionsOrderByRelevanceInput = class PermissionsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PermissionsOrderByRelevanceFieldEnum_1.PermissionsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PermissionsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PermissionsOrderByRelevanceInput.prototype, "search", void 0);
PermissionsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PermissionsOrderByRelevanceInput", {
        isAbstract: true
    })
], PermissionsOrderByRelevanceInput);
exports.PermissionsOrderByRelevanceInput = PermissionsOrderByRelevanceInput;
