"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMediamanagerOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerWhereUniqueInput_1 = require("../../../inputs/MediamanagerWhereUniqueInput");
let FindUniqueMediamanagerOrThrowArgs = class FindUniqueMediamanagerOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput)
], FindUniqueMediamanagerOrThrowArgs.prototype, "where", void 0);
FindUniqueMediamanagerOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueMediamanagerOrThrowArgs);
exports.FindUniqueMediamanagerOrThrowArgs = FindUniqueMediamanagerOrThrowArgs;
