"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProvidersOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersWhereUniqueInput_1 = require("../../../inputs/ProvidersWhereUniqueInput");
let FindUniqueProvidersOrThrowArgs = class FindUniqueProvidersOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], FindUniqueProvidersOrThrowArgs.prototype, "where", void 0);
FindUniqueProvidersOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProvidersOrThrowArgs);
exports.FindUniqueProvidersOrThrowArgs = FindUniqueProvidersOrThrowArgs;
