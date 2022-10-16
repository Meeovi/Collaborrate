"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsOrderByRelevanceFieldEnum_1 = require("../../enums/CustomizationsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let CustomizationsOrderByRelevanceInput = class CustomizationsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomizationsOrderByRelevanceFieldEnum_1.CustomizationsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CustomizationsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CustomizationsOrderByRelevanceInput.prototype, "search", void 0);
CustomizationsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomizationsOrderByRelevanceInput", {
        isAbstract: true
    })
], CustomizationsOrderByRelevanceInput);
exports.CustomizationsOrderByRelevanceInput = CustomizationsOrderByRelevanceInput;
