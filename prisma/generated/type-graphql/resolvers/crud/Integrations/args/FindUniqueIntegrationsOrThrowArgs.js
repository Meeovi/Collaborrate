"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIntegrationsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntegrationsWhereUniqueInput_1 = require("../../../inputs/IntegrationsWhereUniqueInput");
let FindUniqueIntegrationsOrThrowArgs = class FindUniqueIntegrationsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IntegrationsWhereUniqueInput_1.IntegrationsWhereUniqueInput)
], FindUniqueIntegrationsOrThrowArgs.prototype, "where", void 0);
FindUniqueIntegrationsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueIntegrationsOrThrowArgs);
exports.FindUniqueIntegrationsOrThrowArgs = FindUniqueIntegrationsOrThrowArgs;
