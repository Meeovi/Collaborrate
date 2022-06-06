"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsWhereInput_1 = require("../inputs/CommentsWhereInput");
let CommentsListRelationFilter = class CommentsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereInput_1.CommentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsWhereInput_1.CommentsWhereInput)
], CommentsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereInput_1.CommentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsWhereInput_1.CommentsWhereInput)
], CommentsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereInput_1.CommentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsWhereInput_1.CommentsWhereInput)
], CommentsListRelationFilter.prototype, "none", void 0);
CommentsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsListRelationFilter", {
        isAbstract: true
    })
], CommentsListRelationFilter);
exports.CommentsListRelationFilter = CommentsListRelationFilter;
