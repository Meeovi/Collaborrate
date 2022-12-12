"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesOrderByRelevanceInput_1 = require("../inputs/StatesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StatesOrderByWithRelationAndSearchRelevanceInput = class StatesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithRelationAndSearchRelevanceInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByWithRelationAndSearchRelevanceInput.prototype, "trainings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesOrderByRelevanceInput_1.StatesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesOrderByRelevanceInput_1.StatesOrderByRelevanceInput)
], StatesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
StatesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], StatesOrderByWithRelationAndSearchRelevanceInput);
exports.StatesOrderByWithRelationAndSearchRelevanceInput = StatesOrderByWithRelationAndSearchRelevanceInput;
