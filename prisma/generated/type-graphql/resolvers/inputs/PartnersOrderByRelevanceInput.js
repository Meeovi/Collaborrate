"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PartnersOrderByRelevanceFieldEnum_1 = require("../../enums/PartnersOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let PartnersOrderByRelevanceInput = class PartnersOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PartnersOrderByRelevanceFieldEnum_1.PartnersOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PartnersOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PartnersOrderByRelevanceInput.prototype, "search", void 0);
PartnersOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PartnersOrderByRelevanceInput", {
        isAbstract: true
    })
], PartnersOrderByRelevanceInput);
exports.PartnersOrderByRelevanceInput = PartnersOrderByRelevanceInput;
