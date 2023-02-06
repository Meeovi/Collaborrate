"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProvidersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProvidersWhereUniqueInput_1 = require("../../../inputs/ProvidersWhereUniqueInput");
let FindUniqueProvidersArgs = class FindUniqueProvidersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProvidersWhereUniqueInput_1.ProvidersWhereUniqueInput)
], FindUniqueProvidersArgs.prototype, "where", void 0);
FindUniqueProvidersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProvidersArgs);
exports.FindUniqueProvidersArgs = FindUniqueProvidersArgs;
