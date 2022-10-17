"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardOrderByRelevanceInput_1 = require("../inputs/DigiboardOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DigiboardOrderByWithRelationAndSearchRelevanceInput = class DigiboardOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithRelationAndSearchRelevanceInput.prototype, "board", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithRelationAndSearchRelevanceInput.prototype, "student", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DigiboardOrderByWithRelationAndSearchRelevanceInput.prototype, "course", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardOrderByRelevanceInput_1.DigiboardOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardOrderByRelevanceInput_1.DigiboardOrderByRelevanceInput)
], DigiboardOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
DigiboardOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DigiboardOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], DigiboardOrderByWithRelationAndSearchRelevanceInput);
exports.DigiboardOrderByWithRelationAndSearchRelevanceInput = DigiboardOrderByWithRelationAndSearchRelevanceInput;
