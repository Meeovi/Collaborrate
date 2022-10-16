"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsWhereUniqueInput_1 = require("../../../inputs/CommentsWhereUniqueInput");
let DeleteOneCommentsArgs = class DeleteOneCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], DeleteOneCommentsArgs.prototype, "where", void 0);
DeleteOneCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCommentsArgs);
exports.DeleteOneCommentsArgs = DeleteOneCommentsArgs;
