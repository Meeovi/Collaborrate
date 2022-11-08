"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsOrderByRelevanceFieldEnum_1 = require("../../enums/AgreementsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let AgreementsOrderByRelevanceInput = class AgreementsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgreementsOrderByRelevanceFieldEnum_1.AgreementsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AgreementsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByRelevanceInput.prototype, "search", void 0);
AgreementsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgreementsOrderByRelevanceInput", {
        isAbstract: true
    })
], AgreementsOrderByRelevanceInput);
exports.AgreementsOrderByRelevanceInput = AgreementsOrderByRelevanceInput;
