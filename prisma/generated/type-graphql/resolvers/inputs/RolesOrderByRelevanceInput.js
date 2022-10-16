"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesOrderByRelevanceFieldEnum_1 = require("../../enums/RolesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let RolesOrderByRelevanceInput = class RolesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RolesOrderByRelevanceFieldEnum_1.RolesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RolesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RolesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RolesOrderByRelevanceInput.prototype, "search", void 0);
RolesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RolesOrderByRelevanceInput", {
        isAbstract: true
    })
], RolesOrderByRelevanceInput);
exports.RolesOrderByRelevanceInput = RolesOrderByRelevanceInput;
