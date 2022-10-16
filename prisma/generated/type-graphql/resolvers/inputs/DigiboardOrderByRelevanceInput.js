"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardOrderByRelevanceFieldEnum_1 = require("../../enums/DigiboardOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let DigiboardOrderByRelevanceInput = class DigiboardOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardOrderByRelevanceFieldEnum_1.DigiboardOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DigiboardOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByRelevanceInput.prototype, "search", void 0);
DigiboardOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DigiboardOrderByRelevanceInput", {
        isAbstract: true
    })
], DigiboardOrderByRelevanceInput);
exports.DigiboardOrderByRelevanceInput = DigiboardOrderByRelevanceInput;
