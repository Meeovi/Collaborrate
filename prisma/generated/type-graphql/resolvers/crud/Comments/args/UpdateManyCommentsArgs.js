"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsUpdateManyMutationInput_1 = require("../../../inputs/CommentsUpdateManyMutationInput");
const CommentsWhereInput_1 = require("../../../inputs/CommentsWhereInput");
let UpdateManyCommentsArgs = class UpdateManyCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsUpdateManyMutationInput_1.CommentsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsUpdateManyMutationInput_1.CommentsUpdateManyMutationInput)
], UpdateManyCommentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereInput_1.CommentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsWhereInput_1.CommentsWhereInput)
], UpdateManyCommentsArgs.prototype, "where", void 0);
UpdateManyCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCommentsArgs);
exports.UpdateManyCommentsArgs = UpdateManyCommentsArgs;
