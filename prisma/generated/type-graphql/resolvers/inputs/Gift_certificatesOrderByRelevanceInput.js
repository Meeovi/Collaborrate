"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift_certificatesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesOrderByRelevanceFieldEnum_1 = require("../../enums/Gift_certificatesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Gift_certificatesOrderByRelevanceInput = class Gift_certificatesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gift_certificatesOrderByRelevanceFieldEnum_1.Gift_certificatesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Gift_certificatesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Gift_certificatesOrderByRelevanceInput.prototype, "search", void 0);
Gift_certificatesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Gift_certificatesOrderByRelevanceInput", {
        isAbstract: true
    })
], Gift_certificatesOrderByRelevanceInput);
exports.Gift_certificatesOrderByRelevanceInput = Gift_certificatesOrderByRelevanceInput;
