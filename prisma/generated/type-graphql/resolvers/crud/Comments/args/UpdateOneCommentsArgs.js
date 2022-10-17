"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsUpdateInput_1 = require("../../../inputs/CommentsUpdateInput");
const CommentsWhereUniqueInput_1 = require("../../../inputs/CommentsWhereUniqueInput");
let UpdateOneCommentsArgs = class UpdateOneCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsUpdateInput_1.CommentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsUpdateInput_1.CommentsUpdateInput)
], UpdateOneCommentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], UpdateOneCommentsArgs.prototype, "where", void 0);
UpdateOneCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCommentsArgs);
exports.UpdateOneCommentsArgs = UpdateOneCommentsArgs;
