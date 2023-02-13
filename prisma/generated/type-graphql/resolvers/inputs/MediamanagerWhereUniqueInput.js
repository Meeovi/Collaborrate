"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediamanagerWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MediamanagerWhereUniqueInput = class MediamanagerWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MediamanagerWhereUniqueInput.prototype, "id", void 0);
MediamanagerWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MediamanagerWhereUniqueInput", {
        isAbstract: true
    })
], MediamanagerWhereUniqueInput);
exports.MediamanagerWhereUniqueInput = MediamanagerWhereUniqueInput;
