"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCollectionsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsWhereUniqueInput_1 = require("../../../inputs/CollectionsWhereUniqueInput");
let FindUniqueCollectionsOrThrowArgs = class FindUniqueCollectionsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput)
], FindUniqueCollectionsOrThrowArgs.prototype, "where", void 0);
FindUniqueCollectionsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCollectionsOrThrowArgs);
exports.FindUniqueCollectionsOrThrowArgs = FindUniqueCollectionsOrThrowArgs;
