"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsCreateManyInput_1 = require("../../../inputs/CommentsCreateManyInput");
let CreateManyCommentsArgs = class CreateManyCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsCreateManyInput_1.CommentsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCommentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCommentsArgs.prototype, "skipDuplicates", void 0);
CreateManyCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCommentsArgs);
exports.CreateManyCommentsArgs = CreateManyCommentsArgs;
