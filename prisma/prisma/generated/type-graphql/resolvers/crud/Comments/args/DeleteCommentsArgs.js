"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsWhereUniqueInput_1 = require("../../../inputs/CommentsWhereUniqueInput");
let DeleteCommentsArgs = class DeleteCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], DeleteCommentsArgs.prototype, "where", void 0);
DeleteCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCommentsArgs);
exports.DeleteCommentsArgs = DeleteCommentsArgs;
