"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateInput_1 = require("../../../inputs/CommentsCreateInput");
let CreateCommentsArgs = class CreateCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCreateInput_1.CommentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentsCreateInput_1.CommentsCreateInput)
], CreateCommentsArgs.prototype, "data", void 0);
CreateCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCommentsArgs);
exports.CreateCommentsArgs = CreateCommentsArgs;
