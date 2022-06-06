"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsUpdateInput_1 = require("../../../inputs/CommentsUpdateInput");
const CommentsWhereUniqueInput_1 = require("../../../inputs/CommentsWhereUniqueInput");
let UpdateCommentsArgs = class UpdateCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsUpdateInput_1.CommentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsUpdateInput_1.CommentsUpdateInput)
], UpdateCommentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], UpdateCommentsArgs.prototype, "where", void 0);
UpdateCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCommentsArgs);
exports.UpdateCommentsArgs = UpdateCommentsArgs;
