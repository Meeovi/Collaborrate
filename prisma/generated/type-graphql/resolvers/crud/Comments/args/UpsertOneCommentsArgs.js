"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateInput_1 = require("../../../inputs/CommentsCreateInput");
const CommentsUpdateInput_1 = require("../../../inputs/CommentsUpdateInput");
const CommentsWhereUniqueInput_1 = require("../../../inputs/CommentsWhereUniqueInput");
let UpsertOneCommentsArgs = class UpsertOneCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], UpsertOneCommentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCreateInput_1.CommentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsCreateInput_1.CommentsCreateInput)
], UpsertOneCommentsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsUpdateInput_1.CommentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsUpdateInput_1.CommentsUpdateInput)
], UpsertOneCommentsArgs.prototype, "update", void 0);
UpsertOneCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCommentsArgs);
exports.UpsertOneCommentsArgs = UpsertOneCommentsArgs;
